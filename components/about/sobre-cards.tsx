import { FaUsers, FaChalkboardTeacher, FaCertificate, FaBusAlt, FaCoins, FaEye } from 'react-icons/fa';    
import { PiTargetBold } from "react-icons/pi";

export default function Sobre_cards() {
    return (
        <div>         
            <div className="bg-slate-100 py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <PiTargetBold className="h-8 w-8"/>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Nossa Missão
                        </h3>
                        <p className="text-gray-600">
                        Oferecer serviços de transporte empresarial e fretamento, com soluções personalizadas, inteligentes e inovadoras.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaEye className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Nossa Visão
                        </h3>
                        <p className="text-gray-600">
                            Expandir nossos serviços no mercado de transporte empresarial, aprimorando a Qualidade de nossos produtos, serviços e relacionamento com os nossos clientes.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaCoins className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Nosso Valores
                        </h3>
                        <p className="text-gray-600">
                            Nossos motoristas são contratados sob o regime CLT, garantindo direitos trabalhistas e maior segurança.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                        <div className="mb-2 text-blue-500">
                            <FaCertificate className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Certificação ISO 9001
                        </h3>
                        <p className="text-gray-600">
                            Todos os nossos serviços são certificados pela ISO 9001, garantindo qualidade e eficiência.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
