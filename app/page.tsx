"use client";

import Sobre from "@/components/about/sobre";
import Contato from "@/components/contato/contato";
import Footer from "@/components/footer/rodape";
import Frota from "@/components/frota/frota";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-full h-full">
          <Image
            src="/frota-completa.png"
            alt="Logotipo da Viação Avanti"
            layout="responsive"
            width={1920} // Substitua pelo valor real da largura da imagem
            height={1080} // Substitua pelo valor real da altura da imagem
            priority={true}
          />
        </div>
      </div>
      <Frota/>
      <Sobre/>
      <Contato/>
      <Footer/>
    </div>
  );
}
