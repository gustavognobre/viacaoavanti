import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaCertificate,
  FaBusAlt,
  FaTrafficLight,
  FaBusinessTime,
} from "react-icons/fa";

const serviceDetails = [
  {
    id: 1,
    name: "Roteirização",
    description:
      "Na Viação Avanti, oferecemos um serviço de roteirização eficiente para otimizar cada trajeto, garantindo uma viagem ágil e segura. Planejamos rotas inteligentes que reduzem custos e atendem às necessidades específicas do seu negócio. Com nossa roteirização estratégica, adaptamos cada rota para proporcionar um transporte corporativo que maximize a eficiência e minimize o tempo de deslocamento.",
    icon: <FaBusAlt className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 2,
    name: "Adequação do cliente",
    description:
      "Nossos serviços são totalmente personalizados para atender às demandas específicas de cada cliente. Na Viação Avanti, ajustamos nossas operações para se adequar a cada detalhe de sua necessidade, oferecendo um transporte customizado que garante a total satisfação de sua empresa. Nossa flexibilidade nos permite moldar nossos serviços às exigências do seu negócio, sempre com o objetivo de superar suas expectativas.",
    icon: <FaUsers className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 3,
    name: "Fretamento empresarial",
    description:
      "A Viação Avanti é especialista em fretamento empresarial, oferecendo soluções que proporcionam conforto e praticidade para sua equipe. Nossos serviços de fretamento são projetados com flexibilidade e alta qualidade para atender às diversas necessidades de sua empresa. Estamos comprometidos em fornecer o melhor em transporte corporativo, garantindo que seus colaboradores cheguem com segurança e pontualidade aos seus destinos.",
    icon: <FaBusinessTime className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 4,
    name: "Transporte corporativo empresarial",
    description:
      "Com expertise em transporte corporativo, a Viação Avanti oferece serviços dedicados a empresas que valorizam eficiência e conforto. Fornecemos transporte de alta qualidade, adaptado ao mundo dos negócios, para garantir que sua equipe esteja sempre onde precisa, de forma segura e pontual. Nossa missão é levar sua empresa mais longe com soluções de mobilidade superiores.",
    icon: <FaTrafficLight className="h-12 w-12 text-blue-500" />,
  },
];

export default function Servico() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof serviceDetails)[number]
  >(null);

  return (
    <div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold  sm:text-4xl mb-8 text-left">
          Sobre nossos Serviços
        </h2>
        <div className="text-lg  leading-relaxed mb-8">
          <p className="mb-4">
            Oferecemos serviços de fretamento empresarial personalizados, garantindo transporte seguro, confortável e eficiente para empresas de diversos setores no norte de Minas, sempre com pontualidade e qualidade.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceDetails.map((service) => (
          <Card
            key={service.id}
            className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
            onClick={() => setSelectedService(service)}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 transition-opacity duration-300 z-50">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center transform transition-transform duration-300 ease-in-out z-50">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="mb-4">
              <div className="bg-blue-100 p-4 rounded-full inline-block">
                {selectedService.icon}
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedService.name}
            </h3>

            <p className="text-md text-gray-600 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <button
              onClick={() => setSelectedService(null)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
