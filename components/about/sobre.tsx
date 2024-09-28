import { FaUsers, FaChalkboardTeacher, FaCertificate, FaBusAlt, FaCoins, FaEye } from 'react-icons/fa';
import { PiTargetBold } from "react-icons/pi";
import { ReactNode } from 'react';

function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-3xl font-bold sm:text-4xl mb-8">
            {children}
        </h2>
    );
}

function Paragraph({ children }: { children: ReactNode }) {
    return (
        <p className="mb-4">
            {children}
        </p>
    );
}

export default function Sobre() {
    return (
        <div className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <SectionTitle>Sobre nós</SectionTitle>
                <div className="text-lg leading-relaxed mb-4 text-justify space-y-4">
                    <Paragraph>
                        Na Avanti Transporte Corporativo, não oferecemos apenas um serviço de transporte — oferecemos uma experiência que transforma o deslocamento de seus colaboradores. Se você procura um transporte corporativo que realmente faça a diferença, você encontrou. Fundada com o compromisso de oferecer soluções de transporte de alta qualidade, a Viação Avanti tem se destacado em Montes Claros e região ao prestar serviços de mobilidade corporativa e fretamento personalizado. Contamos com uma frota diversificada de veículos de pequeno e grande porte, atendendo às necessidades específicas de cada cliente. Com cerca de 100 colaboradores altamente capacitados, nossa empresa se dedica a garantir uma experiência de transporte segura, eficiente e confortável.
                    </Paragraph>
                    <Paragraph>
                        Ao longo dos anos, a Viação Avanti conquistou a confiança de inúmeras organizações, incluindo grandes multinacionais. Essa credibilidade é resultado de nosso foco contínuo em excelência operacional e atendimento ao cliente. Em reconhecimento ao nosso desempenho e qualidade, em 2023, fomos eleitos a 5ª maior e melhor empresa no segmento de transporte corporativo do Brasil. Este título reflete nosso compromisso com a inovação e a melhoria constante de nossos serviços.
                    </Paragraph>
                    <Paragraph>
                        Em 2024, ampliamos nossa atuação para o transporte público, assumindo a responsabilidade pelo transporte urbano na cidade de Três Pontas, Minas Gerais. Esse novo desafio reforça nosso compromisso com a mobilidade acessível e de qualidade para todas as comunidades que servimos. Estamos investindo em infraestrutura moderna e em tecnologias avançadas para garantir que o transporte público seja uma alternativa confiável e eficiente para todos os passageiros.
                    </Paragraph>
                    <Paragraph>
                        Na Viação Avanti, acreditamos que a mobilidade é um elemento-chave para o desenvolvimento social e econômico. Por isso, continuamos a expandir nossos serviços e melhorar nossas operações para atender melhor às necessidades de nossos clientes e comunidades. Nossa trajetória é guiada por valores sólidos de integridade, respeito e responsabilidade, e seguimos dedicados a proporcionar experiências de transporte excepcionais para todos.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
}
