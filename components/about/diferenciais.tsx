import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaCertificate,
  FaBusAlt,
  FaTrafficLight,
  FaBusinessTime,
  FaHandshake,
  FaClock,
  FaTree,
  FaBus,
} from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";

const serviceDetails = [
  {
    id: 1,
    name: "Frota Moderna e Confortável",
    description:
      "Nossa frota moderna e confortável é um dos diferenciais da Viação Avanti. Equipados com os mais recentes avanços tecnológicos, nossos veículos oferecem uma experiência de viagem superior, garantindo conforto e segurança para todos os passageiros. Com veículos novos e bem mantidos, proporcionamos uma viagem tranquila e agradável, sempre priorizando o bem-estar dos nossos clientes.",
    icon: <FaBus className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 2,
    name: "Adequação aos requisitos do cliente",
    description:
      "Nosso compromisso é com a excelência e a satisfação do cliente. A Viação Avanti adapta seus serviços para atender aos requisitos específicos de cada empresa, garantindo flexibilidade total para ajustar nossas operações às suas necessidades. Seja qual for a demanda, estamos prontos para oferecer soluções de transporte personalizadas que atendem às suas exigências.",
    icon: <FaPeopleLine className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 3,
    name: "Segurança em Primeiro Lugar",
    description:
      "Na Viação Avanti, a segurança é nossa prioridade máxima. Cada detalhe de nossa operação é cuidadosamente planejado para garantir a proteção de todos os passageiros. Seguimos protocolos rigorosos de segurança em todas as viagens, assegurando que você e sua equipe possam viajar com tranquilidade e confiança em nossos serviços.",
    icon: <FaBusinessTime className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 4,
    name: "Pontualidade e Eficiência",
    description:
      "Valorizamos o seu tempo e entendemos a importância da pontualidade. Na Viação Avanti, nos comprometemos a cumprir rigorosamente os horários, oferecendo um transporte eficiente que garante tranquilidade e confiança em cada trajeto. Nossa prioridade é proporcionar uma experiência sem atrasos, assegurando que sua equipe chegue sempre no horário certo.",
    icon: <FaTrafficLight className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 5,
    name: "Atendimento Personalizado",
    description:
      "Oferecemos soluções de transporte sob medida para atender às necessidades específicas de cada empresa. Nosso atendimento é focado em entender e superar as expectativas dos nossos clientes.",
    icon: <FaHandshake className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 6,
    name: "Pontualidade e Eficiência",
    description:
      "Entendemos a importância da pontualidade no transporte empresarial. Nossos serviços são planejados para garantir que os passageiros cheguem a seus destinos no horário, sem comprometer a segurança.",
    icon: <FaClock className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 7,
    name: "Certificações de Qualidade",
    description:
      'A certificação ISO 9001 da Viação Avanti reflete nosso compromisso com a qualidade e a melhoria contínua em todos os nossos serviços. Como uma empresa certificada, asseguramos a excelência em cada transporte, cumprindo rigorosamente os padrões internacionais de qualidade para proporcionar um serviço seguro e confiável.',
    icon: <FaCertificate className="h-12 w-12 text-blue-500" />,
  },
  {
    id: 8,
    name: "Responsabilidade e Sustentabilidade Ambiental",
    description:
      'A Viação Avanti atua com responsabilidade ambiental e compromisso com a sustentabilidade. Nossas práticas de transporte são projetadas para minimizar os impactos ambientais, promovendo um futuro mais verde. Investimos em uma frota moderna e em estratégias de operação que respeitam o meio ambiente, reforçando nosso compromisso com um transporte sustentável.',
    icon: <FaTree className="h-12 w-12 text-blue-500" />,
  },
];

export default function Diferenciais() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof serviceDetails)[number]
  >(null);

  return (
    <div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold sm:text-4xl mb-8 text-left">
          Por que escolher a Viação Avanti para o seu transporte empresarial?
        </h2>
        <div className="text-lg leading-relaxed mb-8">
          <p className="mb-4">
            A Viação Avanti é a escolha ideal para quem busca um serviço de transporte empresarial de alta qualidade no norte de Minas Gerais. Com uma frota moderna e bem equipada, priorizamos a segurança, o conforto e a pontualidade em cada viagem. Nosso compromisso é proporcionar uma experiência de transporte eficiente e confiável para todas as empresas que atendemos.
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

      <div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-left">
          <div className="text-lg leading-relaxed mb-8">
            <p className="mb-4">
              Ao escolher a Viação Avanti, você está optando por um parceiro de transporte que coloca a segurança, o conforto e a satisfação dos clientes em primeiro lugar. Confie em quem é referência no mercado e faça a escolha certa para a sua empresa!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
