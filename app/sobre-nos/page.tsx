"use client";

import Sobre from "@/components/about/sobre";
import Sobre_cards from "@/components/about/sobre-cards";
import Contato from "@/components/about/contato";
import Footer from "@/components/header/rodape";
import Navbar from "@/components/header/navbar";
import BackgroundSlider from "@/components/page/backgroundslider";


export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <BackgroundSlider/>
      </div>
      <Sobre/>
      <Sobre_cards/>

      
      <Contato/>
      <Footer/>
    </div>
  );
}
