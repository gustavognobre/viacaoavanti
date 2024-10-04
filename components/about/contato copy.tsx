import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaBusAlt } from "react-icons/fa";

const lineDetails = [
  {id: 1,
    name: "Linha 1 - Ida",
    sentido: "SESI - CENTRO",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1tIb1gJyyipQ43HM69LjQfZbaxIP0J_E&ehbc=2E312F",
    semanal:
      "05:45/	06:15/	06:45/	07:15/	07:45/	08:15/	08:45/	09:15/	09:45/	10:15/	10:45/	11:15/	11:45/	12:15/	12:45/	13:15/	13:45/	14:15/	14:45/	15:15/	15:45/	16:15/	16:45/	17:15/	17:45/	18:15/	18:45/	19:15/	20:00/	21:00/	22:00",
    sabado:
      "05:45/	06:15/	06:45/	07:15/	07:45/	08:15/	08:45/	09:15/	09:45/	10:15/	10:45/	11:15/	11:45/	12:15/	12:45/	13:15/	13:45/	14:30/	15:30/	16:30/	17:30/	18:30/	19:30/	20:30/",
    domingo:
      "08:00/	09:00/	10:00/	11:00/	12:00/	13:00/	14:00/	15:00/	16:00/	17:00/	18:00/	19:00",
    icon: <FaBusAlt className="h-12 w-12 text-green-700" />,
  },
  {id: 2,
    name: "Linha 1 - Volta",
    sentido: "CENTRO - SESI",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1Hjg4ZLVwKmXZN92aZ18itt2wh9moVc4&ehbc=2E312F",
    semanal:
      "06:00/	06:30/	07:00/	07:30/	08:00/	08:30/	09:00/	09:30/	10:00/	10:30/	11:00/	11:30/	12:00/	12:30/	13:00/	13:30/	14:00/	14:30/	15:00/	15:30/	16:00/	16:30/	17:00/	17:30/	18:00/	18:30/	19:00/	19:30/	20:30/	21:30",
    sabado:
      "06:00/	06:30/	07:00/	07:30/	08:00/	08:30/	09:00/	09:30/	10:00/	10:30/	11:00/	11:30/	12:00/	12:30/	13:00/	13:30/	14:00/	15:00/	16:00/	17:00/	18:00/	19:00/	20:00",
    domingo:
      "08:30/	09:30/	10:30/	11:30/	12:30/	13:30/	14:30/	15:30/	16:30/	17:30/	18:30",
    icon: <FaBusAlt className="h-12 w-12 text-red-700" />,
  },
  {id: 5,
    name: "Linha 3 - Ida",
    sentido: "BOA ESPERANÇA - CENTRO",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1kc5pjKAygyrmaJ19s0B0s2LId5gysVQ&ehbc=2E312F",
    semanal:
      "05:40/	06:20/	07:00/	07:40/	08:20/	09:00/	09:40/	10:20/	11:00/	11:40/	12:20/	13:00/	13:40/	14:20/	15:00/	15:40/	16:20/	17:00/	17:40/	18:20/	19:00/	19:40/	20:30/	21:30",
    sabado:
      "06:00/	07:00/	08:00/	09:00/	10:00/	11:00/	12:00/	13:00/	14:00/	15:00/	16:00/	17:00/	18:00",
    domingo:
      "07:00/	08:00/	09:00/	10:00/	11:00/	12:00/	13:00/	14:00/	15:00/	16:00/	17:00/	18:00",
    icon: <FaBusAlt className="h-12 w-12 text-green-700" />,
  },
  {id: 6,
    name: "Linha 3 - Volta",
    sentido: "CENTRO - BOA ESPERANÇA",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1T1imW3HvaBzB5qm9K_2C1iyJ08J2kls&ehbc=2E312F",
    semanal:
      "06:00/	06:40/	07:20/	08:00/	08:40/	09:20/	10:00/	10:40/	11:20/	12:00/	12:40/	13:20/	14:00/	14:40/	15:20/	16:00/	16:40/	17:20/	18:00/	18:40/	19:20/	20:00/	21:00",
    sabado:
      "06:30/	07:30/	08:30/	09:30/	10:30/	11:30/	12:30/	13:30/	14:30/	15:30/	16:30/	17:30",
    domingo:
      "07:30/	08:30/	09:30/	10:30/	11:30/	12:30/	13:30/	14:30/	15:30/	16:30/	17:30",
    icon: <FaBusAlt className="h-12 w-12 text-red-700" />,
  },
  {id: 11,
    name: "Linha 6 - Ida",
    sentido: "SANTA EDWIGES - CENTRO",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=10BjYq8qPlycHJRx1fjxW2rRGW59oGhU&ehbc=2E312F",
    semanal:
      "05:40/	06:20/	07:00/	07:40/	08:20/	09:00/	09:40/	10:20/	11:00/	11:40/	12:20/	13:00/	13:40/	14:20/	15:00/	15:40/	16:20/	17:00/	17:40/	18:20/	19:00/	19:40/	20:20/	21:00/	22:00/	23:00",
    sabado:
    "05:40/	06:20/	07:00/	07:40/	08:20/	09:00/	09:40/	10:20/	11:00/	11:40/	12:20/	13:00/	13:40/	14:20/	15:00/	15:40/	16:20/	17:00/	17:40/	18:20/	19:00/	19:40/	20:20/	21:00/	22:00",
    domingo:
      "07:00/	08:00/	09:00/	10:00/	11:00/	12:00/	13:00/	14:00/	15:00/	16:00/	17:00/	18:00",
    icon: <FaBusAlt className="h-12 w-12 text-green-700" />,
  },
  {id: 12,
    name: "Linha 6 - Volta",
    sentido: "CENTRO - SANTA EDWIGES",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1uduKSuHI6jzbhqbbE6CfMy1ZVY23Aos&ehbc=2E312F",
    semanal:
      "06:00/	06:40/	07:20/	08:00/	08:40/	09:20/	10:00/	10:40/	11:20/	12:00/	12:40/	13:20/	14:00/	14:40/	15:20/	16:00/	16:40/	17:20/	18:00/	18:40/	19:20/	20:00/	20:40/	21:30/ 22:30",
    sabado:
    "06:00/ 06:40/ 07:20/ 08:00/ 08:40/ 09:20/ 09:40/ 10:00/ 10:40/ 11:20/ 12:00/ 12:40/ 13:20/ 14:00/ 14:40/ 15:20/ 16:00/	16:40/	17:20/	18:00/	18:40/	19:20/	20:00/	20:40/	21:30",
    domingo:
      "07:30/	08:30/	09:30/	10:30/	11:30/	12:30/	13:30/	14:30/	15:30/	16:30/	17:30",
    icon: <FaBusAlt className="h-12 w-12 text-red-700" />,
  },
  {id: 0,
    name: "CIRCULAR 01",
    sentido: "CIRCULAR 01",
    maps: "https://www.google.com/maps/d/u/0/embed?mid=1XkCOaU0xvY1QL7glu-YoIlbLlseL-hk&ehbc=2E312F",
    semanal:
      "06:15/ 07:15/ 08:55/ 10:35/ 12:05/ 13:35/ 15:15/ 16:35/ 18:05/ 19:50/ 21:05/ 22:20",
    sabado:
      "06:15/ 07:15/	08:55/	10:35/	12:05/	13:35/	15:15/	16:35/	18:05/ 19:50/	21:05/ 22:20",
    domingo:
      "06:15/ 07:15/	08:55/	10:35/	12:05/	13:35/	15:15/	16:35/	18:05/	19:50/	21:05/	22:20	",
    icon: <FaBusAlt className="h-12 w-12 text-avanti-blue" />,
  },
  
];

export default function Rotas() {
  const [selectedService, setSelectedService] = useState<
    null | (typeof lineDetails)[number]
  >(null);

  return (
    <div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto text-left">
  <h2 className="text-3xl font-bold sm:text-4xl mb-8 text-left">Sobre nós</h2>
  <div className="text-lg leading-relaxed mb-8 text-justify">
    <p className="mb-4">
      A AVANTI Três Pontas é responsável pelo transporte urbano que conecta todos os moradores da cidade, oferecendo um serviço essencial para a mobilidade da comunidade. Nossa missão é garantir segurança, pontualidade e conforto em cada viagem, tornando o deslocamento diário mais eficiente, seja para o trabalho, estudos, lazer ou qualquer outra atividade.
    </p>
    <p className="mb-4">
      Com uma frota moderna e motoristas treinados, a AVANTI busca proporcionar uma experiência de viagem acessível e agradável a todos. Mais do que apenas transporte, somos parte do cotidiano de Três Pontas, facilitando a conexão entre pessoas e contribuindo para o desenvolvimento da cidade.
    </p>
    <p className="mb-4">
      Nossa matriz, localizada em Montes Claros, se destaca no transporte corporativo e foi eleita a 5ª maior e melhor empresa do segmento no Brasil. Com uma frota moderna e motoristas qualificados, a AVANTI se compromete a proporcionar uma experiência de viagem acessível e agradável para todos.
    </p>
    <p className="mb-4">
      Mais do que um transporte, somos parte do cotidiano de Três Pontas, conectando pessoas e contribuindo para o desenvolvimento da cidade.
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
            {selectedService.sentido}
          </h3>
          <h3 className="text-lg font-semibold text-avanti-blue mb-4">
            Semanal
          </h3>
          <p className="text-md text-gray-600 leading-relaxed mb-6">
            {selectedService.semanal}
          </p>
          <h3 className="text-lg font-semibold text-avanti-blue mb-4">
            Sábado
          </h3>
          <p className="text-md text-gray-600 leading-relaxed mb-6">
            {selectedService.sabado}
          </p>
          <h3 className="text-lg font-semibold text-avanti-blue mb-4">
            Domingo
          </h3>
          <p className="text-md text-gray-600 leading-relaxed mb-6">
            {selectedService.domingo}
          </p>
        </div>

        {/* Coluna do mapa */}
        <div className="w-full h-96 md:h-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full border-0"
            style={{ minHeight: "100%" }}
            src={selectedService.maps}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Botão Fechar fora do grid */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setSelectedService(null)}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
)}




    </div>
  );
}
