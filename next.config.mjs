/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configuração para exportação estática
  images: {
    domains: ['viacaoavanti.com.br'], // Domínio permitido para imagens
    unoptimized: true, // Desabilita a otimização de imagens para exportação estática

  },
};

export default nextConfig;
