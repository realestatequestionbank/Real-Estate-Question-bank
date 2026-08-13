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
      // Map handbooks URLs to prevent 404
      ...['california', 'nevada', 'new-mexico', 'new-york', 'ohio', 'oregon', 'texas', 'utah', 'virginia', 'washington']
        .map(state => ({
          source: `/handbooks/${state}`,
          destination: `/${state}-real-estate-handbook-summary`
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
      ...Object.keys(stateDepartmentFolders).map(state => ({
        source: `/state/${state}/free`,
        destination: `/${state}-real-estate-practice-test`,
        permanent: true
      })),
      ...Object.keys(stateDepartmentFolders).map(state => ({
        source: `/${state}-real-estate-permit-test`,
        destination: `/${state}-real-estate-practice-test`,
        permanent: true
      })),
      ...Object.keys(stateDepartmentFolders).map(state => ({
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
    ]
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-progress'],
    serverComponentsExternalPackages: [],
  }
}

module.exports = nextConfig