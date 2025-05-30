/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the 'output: export' line completely
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig