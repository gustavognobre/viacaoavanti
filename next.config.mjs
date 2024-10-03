/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Configuração para exportação estática
  images: {
    domains: ['viacaoavanti.com.br'], // Domínio permitido para imagens
<<<<<<< HEAD
    unoptimized: true, // Desabilita a otimização de imagens
=======
    unoptimized: true, // Desabilita a otimização de imagens para exportação estática
>>>>>>> f2cc5aee6467846b6c3549b6ad73d84815bf472b
  },
};

export default nextConfig;
