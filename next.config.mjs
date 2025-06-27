/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://photoportfolioapi-production.up.railway.app/uploads/**')],
    },
};

export default nextConfig;
