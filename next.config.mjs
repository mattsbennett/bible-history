/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.tina.io',
                port: '',
            }
        ],
    },
};

export default nextConfig;
