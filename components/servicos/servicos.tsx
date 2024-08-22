import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FaUsers, FaChalkboardTeacher, FaCertificate, FaBusAlt } from 'react-icons/fa';    
export default function Servico() {
    return (
<div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaBusAlt className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Roteirização
                        </h3>
                        <p className="text-gray-600">
                            Analisamos a melhor rota para o seu trajeto, com a finalidade de economizar tempo e custos.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaUsers className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Administração dos funcionários que utilizam o transporte
                        </h3>
                        <p className="text-gray-600">
                            Serviço adicional onde recebemos diretamente as solicitações dos funcionários da sua empresa
                        </p>
                    </div>
                    
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaCertificate className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Fretamento empresarial
                        </h3>
                        <p className="text-gray-600">
                            ...
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaCertificate className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Transporte corporativo empresarial
                        </h3>
                        <p className="text-gray-600">
                            ...
                        </p>
                    </div>
                </div>
            </div>
    );
}