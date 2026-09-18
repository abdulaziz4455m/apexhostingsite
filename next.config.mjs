/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables statically generated site output if strict SSG is required.
  // Note: Un-comment `output: 'export'` if a strict static export is needed.
  // output: 'export',
  
  // Enable trailing slash for SEO consistency
  trailingSlash: true,

  // Compress responses
  compress: true,
  
  // Optimization features
  experimental: {
    optimizeCss: true, // Requires external critters package (if you install it later)
    scrollRestoration: true,
  },
};

export default nextConfig;
