/** @type {import('next').NextConfig} */
const nextConfig = {
    // Página estática: se publica en Cloudflare (Workers, cuenta de Apolosoft).
    output: 'export',
    trailingSlash: true,
    images: {
        // Sin servidor no hay optimizador de imágenes de Next.
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
