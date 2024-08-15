import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HighlightCard() {
    return (
        <div className="relative bg-blue-500 text-white py-12 px-6 flex flex-col items-center justify-center">
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
                    Por Que Escolher a Viação Avanti?
                </h2>
                <p className="text-lg mb-6">
                    Descubra o que faz da nossa empresa a melhor escolha para suas viagens:
                </p>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-xl mb-2">🚍 Frota Moderna e Confortável</li>
                    <li className="text-xl mb-2">🔒 Segurança e Confiabilidade</li>
                    <li className="text-xl mb-2">📈 Pontualidade e Eficiência</li>
                    <li className="text-xl mb-2">🌍 Atendimento Personalizado</li>
                </ul>
                <a
                    href="#contato"
                    className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                    Saiba Mais
                </a>
            </div>
        </div>
    );
}