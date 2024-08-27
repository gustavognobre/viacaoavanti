"use client";

import Sobre from "@/components/about/sobre";
import Contato from "@/components/about/contato";
import Footer from "@/components/header/rodape";
import Frota from "@/components/frota/frota";
import Navbar from "@/components/header/navbar";
import BackgroundSlider from "@/components/page/backgroundslider";
import HighlightCard from "@/components/page/hightlight";

import Image from "next/image";
import Servico from "@/components/about/servicos";
import Diferenciais from "@/components/about/diferenciais";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <BackgroundSlider/>
      </div>
      <Servico/>
      <Diferenciais/>
      <Frota/>
      
      <HighlightCard/>
      
      
      <Contato/>
      <Footer/>
    </div>
  );
}
