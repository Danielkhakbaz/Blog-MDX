const withMDX = require("@next/mdx")();

const nextConfig = {
  swcMinify: true,
  experimental: {
    ppr: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
