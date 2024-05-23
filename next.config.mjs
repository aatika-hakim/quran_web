/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'aatika.salwaquranacademy.com',
                port: '',
                pathname: '/images/**',
            }
        ]
    }
};
export default nextConfig;
