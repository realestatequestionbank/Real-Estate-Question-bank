const stateDepartmentFolders = {
  'alabama': 'dmv',
  'alaska': 'dmv',
  'arizona': 'mvd',
  'arkansas': 'dfa',
  'california': 'dmv',
  'colorado': 'dmv',
  'connecticut': 'dmv',
  'delaware': 'dmv',
  'florida': 'dmv',
  'georgia': 'dds',
  'hawaii': 'dmv',
  'idaho': 'dmv',
  'illinois': 'sos',
  'indiana': 'bmv',
  'iowa': 'dot',
  'kansas': 'dmv',
  'kentucky': 'dmv',
  'louisiana': 'omv',
  'maine': 'bmv',
  'maryland': 'mva',
  'massachusetts': 'rmv',
  'michigan': 'sos',
  'minnesota': 'dvs',
  'mississippi': 'dps',
  'missouri': 'dor',
  'montana': 'mvd',
  'nebraska': 'dmv',
  'nevada': 'dmv',
  'new-hampshire': 'dmv',
  'new-jersey': 'mvc',
  'new-mexico': 'mvd',
  'new-york': 'dmv',
  'north-carolina': 'dmv',
  'north-dakota': 'dot',
  'ohio': 'bmv',
  'oklahoma': 'dps',
  'oregon': 'dmv',
  'pennsylvania': 'penndot',
  'rhode-island': 'dmv',
  'south-carolina': 'dmv',
  'south-dakota': 'dps',
  'tennessee': 'dos',
  'texas': 'dps',
  'utah': 'dmv',
  'vermont': 'dmv',
  'virginia': 'dmv',
  'washington': 'dol',
  'west-virginia': 'dmv',
  'wisconsin': 'dot',
  'wyoming': 'dot'
};

const stateDepartmentAcronyms = {
  'alabama': 'AREC',
  'alaska': 'AREC',
  'arizona': 'ADRE',
  'arkansas': 'AREC',
  'california': 'DRE',
  'colorado': 'CREC',
  'connecticut': 'DCP',
  'delaware': 'DREC',
  'florida': 'FREC',
  'georgia': 'GREC',
  'hawaii': 'HREC',
  'idaho': 'IREC',
  'illinois': 'IDFPR',
  'indiana': 'IREC',
  'iowa': 'IREC',
  'kansas': 'KREC',
  'kentucky': 'KREC',
  'louisiana': 'LREC',
  'maine': 'MREC',
  'maryland': 'MREC',
  'massachusetts': 'MREC',
  'michigan': 'LARA',
  'minnesota': 'MNDOC',
  'mississippi': 'MREC',
  'missouri': 'MREC',
  'montana': 'MBRR',
  'nebraska': 'NREC',
  'nevada': 'NRED',
  'new-hampshire': 'NHREC',
  'new-jersey': 'NJREC',
  'new-mexico': 'NMREC',
  'new-york': 'NYDOS',
  'north-carolina': 'NCREC',
  'north-dakota': 'NDREC',
  'ohio': 'ODRE',
  'oklahoma': 'OREC',
  'oregon': 'OREA',
  'pennsylvania': 'SREC',
  'rhode-island': 'DBR',
  'south-carolina': 'SCREC',
  'south-dakota': 'SDREC',
  'tennessee': 'TREC',
  'texas': 'TREC',
  'utah': 'UDRE',
  'vermont': 'VREC',
  'virginia': 'VREB',
  'washington': 'DOL',
  'west-virginia': 'WVREC',
  'wisconsin': 'DSPS',
  'wyoming': 'WREC'
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Skip ESLint during build (lint errors are non-blocking style issues)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  optimizeFonts: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Headers for SEO and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=43200',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {

    // Exclude Node.js modules from client-side bundles
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        'fs/promises': false,
        path: false,
      };
    }

    // Optimize CSS bundling
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            styles: {
              name: 'styles',
              type: 'css/mini-extract',
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },

  // SWC configuration for modern browsers
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: false
  },



  // Optimize bundle splitting
  async rewrites() {
    return [
      // Real Estate states rewrites (all 50 states)
      ...Object.entries(stateDepartmentFolders).map(([state, dept]) => ({
        source: `/${state}-real-estate-practice-test`,
        destination: `/${state}-${dept}-permit-test`
      })),
      ...Object.entries(stateDepartmentFolders).map(([state, dept]) => ({
        source: `/${state}-real-estate-practice-test/:subpath*`,
        destination: `/${state}-${dept}-permit-test/:subpath*`
      })),
      ...Object.entries(stateDepartmentFolders).map(([state, dept]) => ({
        source: `/${state}-real-estate-practice-test-:count-questions`,
        destination: `/${state}-${dept}-permit-test-:count-questions`
      })),

      // CDL Test Specific Pages Rewrites (Punjabi)
      { source: '/:state-class-a-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/class-a/punjabi' },
      { source: '/:state-class-b-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/class-b/punjabi' },
      { source: '/:state-class-c-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/class-c/punjabi' },
      { source: '/:state-hazmat-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/hazmat/punjabi' },
      { source: '/:state-tanker-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/tanker/punjabi' },
      { source: '/:state-air-brakes-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/air-brakes/punjabi' },
      { source: '/:state-combination-vehicles-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/combination-vehicles/punjabi' },
      { source: '/:state-pre-trip-inspection-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/pre-trip-inspection/punjabi' },
      { source: '/:state-passenger-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/passenger/punjabi' },
      { source: '/:state-school-bus-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/school-bus/punjabi' },
      { source: '/:state-double-triple-trailers-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/double-triple-trailers/punjabi' },
      { source: '/:state-ambulance-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/ambulance/punjabi' },
      { source: '/:state-cdl-permit-test/punjabi', destination: '/cdl-permit-test/:state/punjabi' },

      // CDL Test Specific Pages Rewrites
      { source: '/:state-class-a-cdl-permit-test', destination: '/cdl-permit-test/:state/class-a' },
      { source: '/:state-class-b-cdl-permit-test', destination: '/cdl-permit-test/:state/class-b' },
      { source: '/:state-class-c-cdl-permit-test', destination: '/cdl-permit-test/:state/class-c' },
      { source: '/:state-hazmat-cdl-permit-test', destination: '/cdl-permit-test/:state/hazmat' },
      { source: '/:state-tanker-cdl-permit-test', destination: '/cdl-permit-test/:state/tanker' },
      { source: '/:state-air-brakes-cdl-permit-test', destination: '/cdl-permit-test/:state/air-brakes' },
      { source: '/:state-combination-vehicles-cdl-permit-test', destination: '/cdl-permit-test/:state/combination-vehicles' },
      { source: '/:state-pre-trip-inspection-cdl-permit-test', destination: '/cdl-permit-test/:state/pre-trip-inspection' },
      { source: '/:state-passenger-cdl-permit-test', destination: '/cdl-permit-test/:state/passenger' },
      { source: '/:state-school-bus-cdl-permit-test', destination: '/cdl-permit-test/:state/school-bus' },
      { source: '/:state-double-triple-trailers-cdl-permit-test', destination: '/cdl-permit-test/:state/double-triple-trailers' },
      { source: '/:state-ambulance-cdl-permit-test', destination: '/cdl-permit-test/:state/ambulance' },
      {
        source: '/:state-cdl-permit-test',
        destination: '/cdl-permit-test/:state',
      },
      {
        source: '/state-guides/:state-cdl',
        destination: '/state-guides/cdl/:state',
      },
      {
        source: '/fines-and-limits',
        destination: '/driving-test-concepts/fines-and-limits',
      },
      {
        source: '/road-sign-test',
        destination: '/driving-test-concepts/road-sign-test',
      },
      {
        source: '/right-of-way-rules',
        destination: '/driving-test-concepts/right-of-way-rules',
      },
      {
        source: '/parking-rules',
        destination: '/driving-test-concepts/parking-rules',
      },
      {
        source: '/alcohol-drugs',
        destination: '/driving-test-concepts/alcohol-drugs',
      },
      {
        source: '/traffic-signals',
        destination: '/driving-test-concepts/traffic-signals',
      },
      {
        source: '/signs-and-signals',
        destination: '/driving-test-concepts/signs-and-signals',
      },
      {
        source: '/safe-driving',
        destination: '/driving-test-concepts/safe-driving',
      },
      // Real Estate vanity rewrites
      {
        source: '/real-estate-near-me',
        destination: '/dmv-near-me',
      },
      {
        source: '/real-estate-practice-test-concepts',
        destination: '/dmv-permit-test-concepts',
      },
      {
        source: '/how-many-questions-real-estate-practice-test',
        destination: '/how-many-questions-dmv-permit-test',
      },
      // State Real Estate handbook summaries mapping (10 states with handbook summaries)
      ...['california', 'nevada', 'new-mexico', 'new-york', 'ohio', 'oregon', 'texas', 'utah', 'virginia', 'washington']
        .map(state => ({
          source: `/${state}-real-estate-handbook-summary`,
          destination: `/${state}-${stateDepartmentFolders[state]}-handbook-summary`
        })),
      // Map handbooks URLs to prevent 404
      ...['california', 'nevada', 'new-mexico', 'new-york', 'ohio', 'oregon', 'texas', 'utah', 'virginia', 'washington']
        .map(state => ({
          source: `/handbooks/${state}`,
          destination: `/${state}-${stateDepartmentFolders[state]}-handbook-summary`
        })),
      ...Object.keys(stateDepartmentFolders)
        .filter(state => !['california', 'nevada', 'new-mexico', 'new-york', 'ohio', 'oregon', 'texas', 'utah', 'virginia', 'washington'].includes(state))
        .map(state => ({
          source: `/handbooks/${state}`,
          destination: `/${state}-real-estate-practice-test`
        })),
    ]
  },

  // Redirects for dedicated state pages (redirect old /state/X/free URLs to new dedicated pages)
  async redirects() {
    return [
      { source: '/auth/login', destination: '/login', permanent: true },
      { source: '/auth/signup', destination: '/get-premium', permanent: true },
      { source: '/signup', destination: '/get-premium', permanent: true },
      { source: '/pricing', destination: '/get-premium', permanent: true },
      // Redirect ?test=N query param URLs to clean path-based URLs
      {
        source: '/state/:state/practice/free',
        has: [{ type: 'query', key: 'test', value: '(?<test>[1-5])' }],
        destination: '/state/:state/practice/free/:test',
        permanent: true,
      },
      // Real Estate states redirects (all 50 states)
      ...Object.entries(stateDepartmentFolders).map(([state, dept]) => ({
        source: `/state/${state}/free`,
        destination: `/${state}-real-estate-practice-test`,
        permanent: true
      })),
      ...Object.entries(stateDepartmentFolders).map(([state, dept]) => ({
        source: `/${state}-real-estate-permit-test`,
        destination: `/${state}-real-estate-practice-test`,
        permanent: true
      })),
      ...Object.entries(stateDepartmentFolders).map(([state, dept]) => ({
        source: `/${state}-real-estate-permit-test-:count-questions`,
        destination: `/${state}-real-estate-practice-test-:count-questions`,
        permanent: true
      })),

      // Legacy PDF redirects for all 50 states (driving or old re dept acronyms)
      ...Object.keys(stateDepartmentFolders).flatMap(stateKey => {
        const formattedState = stateKey
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('-');

        const drivingDept = stateDepartmentFolders[stateKey].toUpperCase();
        const reDept = stateDepartmentAcronyms[stateKey];

        const oldPatterns = [
          `Free-${formattedState}-DMV-Practice-Questions.pdf`,
          `Free-${formattedState}-${drivingDept}-Practice-Questions.pdf`
        ];
        
        if (reDept) {
          oldPatterns.push(`Free-${formattedState}-${reDept}-Practice-Questions.pdf`);
        }

        return oldPatterns.map(oldFile => ({
          source: `/free-permit-test-questions-PDF/${oldFile}`,
          destination: `/free-real-estate-practice-questions-PDF/Free-${formattedState}-Real-Estate-Practice-Questions.pdf`,
          permanent: true
        }));
      }),
      // CDL handbook redirects: old /handbooks/[state]-cdl → new /handbooks/cdl/[state]
      { source: '/handbooks/california-cdl', destination: '/handbooks/cdl/california', permanent: true },
      { source: '/handbooks/alabama-cdl', destination: '/handbooks/cdl/alabama', permanent: true },
      { source: '/handbooks/alaska-cdl', destination: '/handbooks/cdl/alaska', permanent: true },
      { source: '/handbooks/arizona-cdl', destination: '/handbooks/cdl/arizona', permanent: true },
      { source: '/handbooks/arkansas-cdl', destination: '/handbooks/cdl/arkansas', permanent: true },
      { source: '/handbooks/colorado-cdl', destination: '/handbooks/cdl/colorado', permanent: true },
      { source: '/handbooks/connecticut-cdl', destination: '/handbooks/cdl/connecticut', permanent: true },
      { source: '/handbooks/delaware-cdl', destination: '/handbooks/cdl/delaware', permanent: true },
      { source: '/handbooks/florida-cdl', destination: '/handbooks/cdl/florida', permanent: true },
      { source: '/handbooks/georgia-cdl', destination: '/handbooks/cdl/georgia', permanent: true },
      { source: '/handbooks/hawaii-cdl', destination: '/handbooks/cdl/hawaii', permanent: true },
      { source: '/handbooks/idaho-cdl', destination: '/handbooks/cdl/idaho', permanent: true },
      { source: '/handbooks/illinois-cdl', destination: '/handbooks/cdl/illinois', permanent: true },
      { source: '/handbooks/indiana-cdl', destination: '/handbooks/cdl/indiana', permanent: true },
      { source: '/handbooks/iowa-cdl', destination: '/handbooks/cdl/iowa', permanent: true },
      { source: '/handbooks/kansas-cdl', destination: '/handbooks/cdl/kansas', permanent: true },
      { source: '/handbooks/kentucky-cdl', destination: '/handbooks/cdl/kentucky', permanent: true },
      { source: '/handbooks/louisiana-cdl', destination: '/handbooks/cdl/louisiana', permanent: true },
      { source: '/handbooks/maine-cdl', destination: '/handbooks/cdl/maine', permanent: true },
      { source: '/handbooks/maryland-cdl', destination: '/handbooks/cdl/maryland', permanent: true },
      { source: '/handbooks/massachusetts-cdl', destination: '/handbooks/cdl/massachusetts', permanent: true },
      { source: '/handbooks/michigan-cdl', destination: '/handbooks/cdl/michigan', permanent: true },
      { source: '/handbooks/minnesota-cdl', destination: '/handbooks/cdl/minnesota', permanent: true },
      { source: '/handbooks/mississippi-cdl', destination: '/handbooks/cdl/mississippi', permanent: true },
      { source: '/handbooks/missouri-cdl', destination: '/handbooks/cdl/missouri', permanent: true },
      { source: '/handbooks/montana-cdl', destination: '/handbooks/cdl/montana', permanent: true },
      { source: '/handbooks/nebraska-cdl', destination: '/handbooks/cdl/nebraska', permanent: true },
      { source: '/handbooks/nevada-cdl', destination: '/handbooks/cdl/nevada', permanent: true },
      { source: '/handbooks/new-hampshire-cdl', destination: '/handbooks/cdl/new-hampshire', permanent: true },
      { source: '/handbooks/new-jersey-cdl', destination: '/handbooks/cdl/new-jersey', permanent: true },
      { source: '/handbooks/new-mexico-cdl', destination: '/handbooks/cdl/new-mexico', permanent: true },
      { source: '/handbooks/new-york-cdl', destination: '/handbooks/cdl/new-york', permanent: true },
      { source: '/handbooks/north-carolina-cdl', destination: '/handbooks/cdl/north-carolina', permanent: true },
      { source: '/handbooks/north-dakota-cdl', destination: '/handbooks/cdl/north-dakota', permanent: true },
      { source: '/handbooks/ohio-cdl', destination: '/handbooks/cdl/ohio', permanent: true },
      { source: '/handbooks/oklahoma-cdl', destination: '/handbooks/cdl/oklahoma', permanent: true },
      { source: '/handbooks/oregon-cdl', destination: '/handbooks/cdl/oregon', permanent: true },
      { source: '/handbooks/pennsylvania-cdl', destination: '/handbooks/cdl/pennsylvania', permanent: true },
      { source: '/handbooks/rhode-island-cdl', destination: '/handbooks/cdl/rhode-island', permanent: true },
      { source: '/handbooks/south-carolina-cdl', destination: '/handbooks/cdl/south-carolina', permanent: true },
      { source: '/handbooks/south-dakota-cdl', destination: '/handbooks/cdl/south-dakota', permanent: true },
      { source: '/handbooks/tennessee-cdl', destination: '/handbooks/cdl/tennessee', permanent: true },
      { source: '/handbooks/texas-cdl', destination: '/handbooks/cdl/texas', permanent: true },
      { source: '/handbooks/utah-cdl', destination: '/handbooks/cdl/utah', permanent: true },
      { source: '/handbooks/vermont-cdl', destination: '/handbooks/cdl/vermont', permanent: true },
      { source: '/handbooks/virginia-cdl', destination: '/handbooks/cdl/virginia', permanent: true },
      { source: '/handbooks/washington-cdl', destination: '/handbooks/cdl/washington', permanent: true },
      { source: '/handbooks/west-virginia-cdl', destination: '/handbooks/cdl/west-virginia', permanent: true },
      { source: '/handbooks/wisconsin-cdl', destination: '/handbooks/cdl/wisconsin', permanent: true },
      { source: '/handbooks/wyoming-cdl', destination: '/handbooks/cdl/wyoming', permanent: true },
    ]
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-progress'],
    serverComponentsExternalPackages: [],
  }
}

module.exports = nextConfig