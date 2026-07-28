import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // Max 5 requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute in ms

function getRateLimitKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown';
  return ip;
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

// Validate zip code format (5 digits)
function isValidZipCode(zip: string): boolean {
  return /^\d{5}$/.test(zip);
}

// Validate coordinates
function isValidCoordinates(lat: number, lng: number): boolean {
  return (
    typeof lat === 'number' &&
    typeof lng === 'number' &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

interface PlaceResult {
  place_id: string;
  name: string;
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  formatted_phone_number?: string;
  opening_hours?: {
    weekday_text?: string[];
    open_now?: boolean;
  };
  rating?: number;
  user_ratings_total?: number;
  business_status?: string;
}

interface RealEstateLocation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  hours?: string[];
  isOpen?: boolean;
  rating?: number;
  totalRatings?: number;
  distance?: number;
  businessStatus?: string;
}

// Check if a place name indicates it's a Real Estate office
function isRealEstateOffice(name: string): boolean {
  const nameLower = name.toLowerCase();
  const realEstateKeywords = [
    'real-estate',
    'department of motor vehicles',
    'motor vehicle',
    'driver license',
    'driver\'s license',
    'real estate license',
    'driver services',
    'vehicle registration',
    'dps ', // Texas Department of Public Safety
    'department of public safety',
    'registry of motor vehicles', // Massachusetts
    'rmv',
    'secretary of state', // Some states use SOS for driver services
    'driver service',
    'license office',
    'licensing office',
    'dol ', // Washington Department of Licensing
    'department of licensing',
    'motor vehicles division',
    'mvd', // Arizona Motor Vehicle Division
    'bureau of motor vehicles',
    'bmv', // Ohio, Indiana
  ];

  return realEstateKeywords.some(keyword => nameLower.includes(keyword));
}

// Calculate distance between two coordinates in miles
function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check
    const ip = getRateLimitKey(request);
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again in a minute.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60'
          }
        }
      );
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    if (!apiKey) {
      console.error('GOOGLE_PLACES_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { zipCode, lat, lng } = body;

    let searchLat: number;
    let searchLng: number;

    // If zip code provided, geocode it first
    if (zipCode) {
      if (!isValidZipCode(zipCode)) {
        return NextResponse.json(
          { error: 'Invalid zip code format. Please enter a 5-digit zip code.' },
          { status: 400 }
        );
      }

      // Geocode the zip code
      const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${apiKey}`;
      const geocodeResponse = await fetch(geocodeUrl);
      const geocodeData = await geocodeResponse.json();

      if (geocodeData.status !== 'OK' || !geocodeData.results?.[0]) {
        console.error('Geocoding failed:', geocodeData.status, geocodeData.error_message);
        return NextResponse.json(
          { error: 'Could not find location for this zip code.' },
          { status: 400 }
        );
      }

      const location = geocodeData.results[0].geometry.location;
      searchLat = location.lat;
      searchLng = location.lng;
    } else if (lat !== undefined && lng !== undefined) {
      if (!isValidCoordinates(lat, lng)) {
        return NextResponse.json(
          { error: 'Invalid coordinates provided.' },
          { status: 400 }
        );
      }
      searchLat = lat;
      searchLng = lng;
    } else {
      return NextResponse.json(
        { error: 'Please provide a zip code or location coordinates.' },
        { status: 400 }
      );
    }

    // Search for Real Estate offices using Google Places API
    // Using nearbySearch with type and keyword for best results
    const searchUrl = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
    searchUrl.searchParams.append('location', `${searchLat},${searchLng}`);
    searchUrl.searchParams.append('radius', '40000'); // 40km (~25 miles)
    searchUrl.searchParams.append('keyword', 'Real Estate Department of Motor Vehicles');
    searchUrl.searchParams.append('type', 'local_government_office');
    searchUrl.searchParams.append('key', apiKey);

    const searchResponse = await fetch(searchUrl.toString());
    const searchData = await searchResponse.json();

    if (searchData.status === 'ZERO_RESULTS') {
      // Try a broader search without type restriction
      const broaderSearchUrl = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
      broaderSearchUrl.searchParams.append('location', `${searchLat},${searchLng}`);
      broaderSearchUrl.searchParams.append('radius', '50000'); // 50km
      broaderSearchUrl.searchParams.append('keyword', 'Real Estate driver license office');
      broaderSearchUrl.searchParams.append('key', apiKey);

      const broaderResponse = await fetch(broaderSearchUrl.toString());
      const broaderData = await broaderResponse.json();

      if (broaderData.status === 'ZERO_RESULTS') {
        return NextResponse.json({
          locations: [],
          searchLocation: { lat: searchLat, lng: searchLng },
          message: 'No Real Estate offices found near this location. Try a different zip code.'
        });
      }

      searchData.results = broaderData.results;
    }

    if (searchData.status !== 'OK' && searchData.status !== 'ZERO_RESULTS') {
      console.error('Google Places API error:', searchData.status, searchData.error_message);
      return NextResponse.json(
        { error: 'Failed to search for Real Estate locations.' },
        { status: 500 }
      );
    }

    // Filter results to only include actual Real Estate offices
    const filteredResults = (searchData.results || []).filter((place: PlaceResult) =>
      isRealEstateOffice(place.name)
    );

    // If no Real Estate offices found after filtering, return empty
    if (filteredResults.length === 0) {
      return NextResponse.json({
        locations: [],
        searchLocation: { lat: searchLat, lng: searchLng },
        message: 'No Real Estate offices found near this location. Try a different zip code.'
      });
    }

    // Get detailed information for each place
    const locations: RealEstateLocation[] = await Promise.all(
      filteredResults.slice(0, 10).map(async (place: PlaceResult) => {
        // Fetch place details for phone number and hours
        const detailsUrl = new URL('https://maps.googleapis.com/maps/api/place/details/json');
        detailsUrl.searchParams.append('place_id', place.place_id);
        detailsUrl.searchParams.append('fields', 'formatted_phone_number,opening_hours,business_status');
        detailsUrl.searchParams.append('key', apiKey);

        try {
          const detailsResponse = await fetch(detailsUrl.toString());
          const detailsData = await detailsResponse.json();
          const details = detailsData.result || {};

          const distance = calculateDistance(
            searchLat,
            searchLng,
            place.geometry.location.lat,
            place.geometry.location.lng
          );

          return {
            id: place.place_id,
            name: place.name,
            address: place.formatted_address,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            phone: details.formatted_phone_number,
            hours: details.opening_hours?.weekday_text,
            isOpen: details.opening_hours?.open_now,
            rating: place.rating,
            totalRatings: place.user_ratings_total,
            distance: Math.round(distance * 10) / 10,
            businessStatus: details.business_status || place.business_status
          };
        } catch (error) {
          // If details fetch fails, return basic info
          const distance = calculateDistance(
            searchLat,
            searchLng,
            place.geometry.location.lat,
            place.geometry.location.lng
          );

          return {
            id: place.place_id,
            name: place.name,
            address: place.formatted_address,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
            rating: place.rating,
            totalRatings: place.user_ratings_total,
            distance: Math.round(distance * 10) / 10,
            businessStatus: place.business_status
          };
        }
      })
    );

    // Sort by distance
    locations.sort((a, b) => (a.distance || 0) - (b.distance || 0));

    return NextResponse.json({
      locations,
      searchLocation: { lat: searchLat, lng: searchLng },
      count: locations.length
    }, {
      headers: {
        'X-RateLimit-Remaining': rateLimit.remaining.toString()
      }
    });

  } catch (error: any) {
    console.error('Real Estate locations API error:', error.message, error);
    return NextResponse.json(
      { error: 'An unexpected error occurred.' },
      { status: 500 }
    );
  }
}
