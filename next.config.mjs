/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'www.smartsight.in',
                
            },
        ],
    },
};

export default nextConfig;
