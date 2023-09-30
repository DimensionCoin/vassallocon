/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true, // Enable gzip compression
  reactStrictMode: true, // Enforce best practices and catch potential issues

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Feature-Policy",
            value:
              "camera 'none'; geolocation 'none'; microphone 'none'; payment 'none'; usb 'none'",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/old-route",
        destination: "/new-route",
        permanent: true,
      },
      {
        source: "/deprecated-page",
        destination: "/updated-page",
        permanent: false, // Temporary redirect
      },
    ];
  },
};

module.exports = nextConfig;
