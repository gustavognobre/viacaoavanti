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
        name: "Veículo 3",
        description: "Detalhes sobre o Veículo 3",
        image: "/frota.jpg",
    },
    {
        id: 2,
        name: "Veículo 1",
        description: "Detalhes sobre o Veículo 1",
        image: "/bus-one.png",
    },
    {
        id: 3,
        name: "Veículo 2",
        description: "Detalhes sobre o Veículo 2",
        image: "/frota-media.jpg",
    },
    {
        id: 4,
        name: "Veículo 3",
        description: "Detalhes sobre o Veículo 3",
        image: "/frota-menor.jpg",
    },

];

export default function Frota() {
    const [selectedVehicle, setSelectedVehicle] = useState<null | typeof vehicleDetails[number]>(null);

    return (
        <div className="font-montserrat flex flex-col items-center justify-center p-6 bg-slate-100 relative">
            <div className="max-w-7xl mx-auto text-left">
                <h2 className="text-3xl font-bold  sm:text-4xl mb-8 text-left">
                    Sobre nossa Frota
                </h2>
                <div className="text-lg  leading-relaxed mb-8">
                    <p className="mb-4">
                        {/*AQUI COLOCAR TEXTO DE FROTA*/}
                    </p>
                </div>
            </div>

            <Carousel className="w-full max-w-screen-2xl">
                <CarouselContent className="flex space-x-4">
                    {vehicleDetails.map(vehicle => (
                        <CarouselItem
                            key={vehicle.id}
                            className="flex-none w-full sm:w-1/2 lg:w-1/3 p-2"
                            onClick={() => setSelectedVehicle(vehicle)}
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
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-left">
                        <h3 className="text-2xl font-bold mb-4">{selectedVehicle.name}</h3>
                        <Image
                            src={selectedVehicle.image}
                            alt={selectedVehicle.name}
                            width={500}
                            height={300}
                            className="mb-4 rounded-lg"
                        />
                        <p className="text-lg text-gray-700">{selectedVehicle.description}</p>
                        <button
                            onClick={() => setSelectedVehicle(null)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
