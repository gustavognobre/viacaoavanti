import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaBusAlt } from "react-icons/fa";

const lineDetails = [
  {
    id: 1,
    name: "Linha 1 - Ida",
    sentido: "CENTRO ARISTIDES VIEIRA DE MENDONÇA  SESI",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1tIb1gJyyipQ43HM69LjQfZbaxIP0J_E&ehbc=2E312F",
    description:
      "05:45 / 06:15 / 06:45 / 07:15 / 07:45 / 08:15 / 08:45 / 09:15 / 09:45 / 10:15 / 10:45 / 11:15 / 11:45 / 12:15 / 12:45 / 13:15 / 13:45",
    icon: <FaBusAlt className="h-12 w-12 text-green-700" />,
  },
  {
    id: 2,
    name: "Linha 1",
    sentido: "Volta",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1Hjg4ZLVwKmXZN92aZ18itt2wh9moVc4&ehbc=2E312F",
    description:
      "06:00 /06:30	/07:00	/07:30	/08:00	/08:30	/09:00	/09:30	/10:00	/10:30	/11:00	/11:30	/12:00	/12:30	/13:00	/13:30",
    icon: <FaBusAlt className="h-12 w-12 text-red-700" />,
  },
  
];

export default function Rotas() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof lineDetails)[number]
  >(null);

  return (
    <div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold sm:text-4xl mb-8 text-left">
          Sobre nossos Serviços
        </h2>
        <div className="text-lg leading-relaxed mb-8">
          <p className="mb-4">
            Oferecemos serviços de fretamento empresarial personalizados,
            garantindo transporte seguro, confortável e eficiente para empresas
            de diversos setores no norte de Minas, sempre com pontualidade e
            qualidade.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {lineDetails.map((service) => (
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.sentido}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl h-auto max-h-[80vh] overflow-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Coluna de informações */}
              <div className="flex flex-col justify-center">
                <div className="mb-4">
                  <div className="bg-gray-100 p-4 rounded-full inline-block">
                    {selectedService.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {selectedService.name}
                </h3>
                <p className="text-md text-gray-600 leading-relaxed mb-6">
                  {selectedService.description}
                </p>
              </div>

              {/* Coluna do mapa */}
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full border-0"
                  src={selectedService.maps}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <button
              onClick={() => setSelectedService(null)}
              className=" absolute bottom-0  mb-5 mt-8 px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
