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
      "Analisamos a melhor rota para o seu trajeto, com a finalidade de economizar tempo e custos.",
    icon: <FaBusAlt className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 2,
    name: "Adequação do cliente",
    description:
      "Serviço adicional onde recebemos diretamente as solicitações dos funcionários da sua empresa.",
    icon: <FaUsers className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 3,
    name: "Fretamento empresarial",
    description:
      "Serviço de transporte exclusivo para empresas, garantindo segurança e conforto para os funcionários.",
    icon: <FaBusinessTime className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 4,
    name: "Transporte corporativo empresarial",
    description:
      "Soluções personalizadas para o transporte de colaboradores com eficiência e pontualidade.",
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 transition-opacity duration-300">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full text-center transform transition-transform duration-300 ease-in-out">
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
