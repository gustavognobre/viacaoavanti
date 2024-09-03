import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const vehicleDetails = [
  {
    id: 1,
    name: "Um pouco sobre nossa frota",
    description: "Cada card apresenta novos detalhes sobre cada veículo, vamos dar uma olhada?",
    image: "/frota.jpg",
  },
  {
    id: 2,
    name: "Ônibus Semi-Rodoviário (45 lugares)",
    description: "Equipado com ar-condicionado e poltronas confortáveis, é a escolha ideal para empresas que precisam realizar trajetos mais longos com total conforto.",
    image: "/frota-semurbano.jpg",
  },
  {
    id: 3,
    name: "Ônibus Lotação: ",
    description: "Com capacidade para 45 funcionários sentados e até 20 em pé, é ideal para rotas com pontos de parada próximos às residências dos funcionários. Garantia de conforto e praticidade para grandes equipes.",
    image: "/bus-one.png",
  },
  {
    id: 4,
    name: "Van Sprinter (15 a 20 lugares):  ",
    description: "Perfeita para rotas personalizadas, com embarque e desembarque diretamente na porta da casa do funcionário. Ideal para equipes que valorizam conforto e agilidade.",
    image: "/frota-sprinter.jpg",
  },
  {
    id: 5,
    name: "Van Scudo (10 lugares): ",
    description: "Compacta e eficiente, ideal para rotas menores ou grupos reduzidos, mantendo a flexibilidade de embarque e desembarque na porta do colaborador.",
    image: "/frota-scudo.jpg",
  },
  {
    id: 6,
    name: "Van Ducato (15 lugares): ",
    description: "Espaçosa e prática, ideal para rotas personalizadas, garantindo que todos os funcionários sejam transportados com conforto e segurança até a porta de casa.",
    image: "/frota-ducato.jpg",
  },
  {
    id: 7,
    name: "Fiat Argo (3 lugares): ",
    description: "Compacto e versátil, perfeito para rotas personalizadas, proporcionando agilidade e facilidade de acesso direto na porta do funcionário.",
    image: "/frota-menor.jpg",
  },
];

export default function Frota() {
  const [selectedVehicle, setSelectedVehicle] = useState<
    null | (typeof vehicleDetails)[number]
  >(null);

  // Função para desativar o scroll quando o modal está aberto
  const handleVehicleSelect = (vehicle) => {
    setSelectedVehicle(vehicle);
    document.body.style.overflow = 'hidden';
  };

  // Função para fechar o modal e restaurar o scroll
  const handleClose = () => {
    setSelectedVehicle(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="font-montserrat flex flex-col items-center text-left justify-center p-6 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl font-bold sm:text-4xl mb-8">Sobre nossa Frota</h2>
        <div className="text-lg leading-relaxed mb-8">
          <p className="mb-4">
            Na Viação Avanti, oferecemos uma ampla gama de veículos para atender às diversas necessidades de transporte corporativo, sempre com foco em segurança, conforto e pontualidade. Conheça nossas opções e escolha a ideal para sua empresa:
          </p>
        </div>
      </div>

      <Carousel className="w-full max-w-screen-2xl">
        <CarouselContent className="flex space-x-4">
          {vehicleDetails.map((vehicle) => (
            <CarouselItem
              key={vehicle.id}
              className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2"
              onClick={() => handleVehicleSelect(vehicle)}
            >
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    layout="responsive"
                    width={1920}
                    height={1080}
                    priority={true}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {selectedVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 transition-opacity duration-300">
          <div className="relative bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full text-left transform transition-transform duration-300 ease-in-out">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-left">
              {selectedVehicle.name}
            </h3>

            <div className="overflow-hidden rounded-lg mb-4">
              <Image
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                width={500}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="text-md text-gray-600 leading-relaxed mb-6">
              {selectedVehicle.description}
            </p>

            <button
              onClick={handleClose}
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
