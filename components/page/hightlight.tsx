import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HighlightCard() {
    return (
        <div className="relative bg-avanti-blue text-white py-12 px-6 flex flex-col items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-[-1]">
                <Image
                    src="/banner-background.png" // Substitua pelo caminho da imagem de fundo
                    alt="Fundo do Banner"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-50"
                />
            </div>

            <div className="relative z-10 text-center">
                <h2 className="text-4xl font-extrabold mb-4">
                Na Viação Avanti, não oferecemos apenas transporte, oferecemos uma experiência de excelência. 
                </h2>
                <a
                    href="#contato"
                    className="inline-block px-6 py-3 bg-avanti-neongreen text-black rounded-lg shadow-lg hover:bg-avanti-limegreen transition-colors duration-300"
                >
                    Saiba Mais
                </a>
            </div>
        </div>
    );
}