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
                        Na Viação Avanti, nossa visão é ser referência em transporte corporativo de qualidade e inovação. Aspiramos a liderar o setor com soluções de mobilidade que transformam o dia a dia das empresas, sempre com foco na excelência, segurança e sustentabilidade.
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
                        A missão da Viação Avanti é garantir mobilidade com segurança e excelência, fornecendo soluções de transporte que superam as expectativas de nossos clientes. Estamos comprometidos em oferecer o melhor serviço de transporte corporativo, sempre focados em atender as necessidades de mobilidade das empresas com qualidade e eficiência.
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
                        Os valores da Viação Avanti são a base do nosso compromisso com a qualidade e o cliente. Valorizamos integridade, excelência, respeito ao meio ambiente e inovação contínua. Nossa atuação é guiada pela segurança, responsabilidade e foco no cliente, sempre buscando oferecer o melhor em transporte corporativo.
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
                        Com a certificação ISO 9001, a Viação Avanti reafirma seu compromisso com a qualidade e a melhoria contínua de seus serviços. Este selo de qualidade é uma garantia de que seguimos os mais altos padrões de segurança e eficiência, proporcionando tranquilidade e confiança a nossos clientes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
