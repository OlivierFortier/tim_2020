module.exports = {
  crossOrigin: 'anonymous',
  sassLoaderOptions: {
    sassOptions: {
      implementation: require('sass'),
    },
  },
  images: {
    domains: ['assets.vercel.com', 'images.ctfassets.net', 'ctfassets.net']
  },
};
