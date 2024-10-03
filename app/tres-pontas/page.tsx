"use client";

import Sobre from "@/components/about/sobre";
import Contato from "@/components/about/contato";
import Footer from "@/components/header/rodape";
import Frota from "@/components/frota/frota";
import Navbar from "@/components/header/navbar";
import BackgroundSlider from "@/components/page/backgroundslider";
import HighlightCard from "@/components/page/hightlight";
import Image from "next/image";
import Rotas from "@/components/about/contato copy";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <BackgroundSlider/>
      </div>


      <Rotas/>
      
      <Contato/>
      <Footer/>
    </div>
  );
}
