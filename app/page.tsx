"use client";

import Sobre from "@/components/about/sobre";
import Contato from "@/components/contato/contato";
import Footer from "@/components/footer/rodape";
import Frota from "@/components/frota/frota";
import Navbar from "@/components/navbar/navbar";
import BackgroundSlider from "@/components/page/backgroundslider";
import HighlightCard from "@/components/page/hightlight";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <BackgroundSlider/>
      </div>
      <Sobre/>
      <Frota/>
      
      <HighlightCard/>
      
      
      <Contato/>
      <Footer/>
    </div>
  );
}
