// next.config.mjs

export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '', // Leave this empty unless using a custom port
          pathname: '/**', // Allow all images from this domain
        },
      ],
    },
  };
  