module.exports = {
  images: {
    domains: [
     "https://sothis.es/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
