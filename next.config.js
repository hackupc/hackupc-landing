/** @type {import('next').NextConfig} */
const nextConfig = {
  // The landing is fully static: `next build` emits plain HTML/CSS/JS into
  // `out/`, so production runs no Next.js server.
  output: "export",
  images: {
    // The default image loader needs a server; all our images are SVGs anyway.
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
