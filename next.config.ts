import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // ✅ Agrega tu dominio externo aquí
  },
};

export default nextConfig;
