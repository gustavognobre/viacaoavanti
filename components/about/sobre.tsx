import { FaUsers, FaChalkboardTeacher, FaCertificate, FaBusAlt, FaCoins, FaEye } from 'react-icons/fa';    
import { PiTargetBold } from "react-icons/pi";

export default function Sobre() {
    return (
        <div>
            <div className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-8">
                        Sobre nós
                    </h2>
                    <div className="text-lg leading-relaxed mb-4 text-justify">
                        <p className="mb-4">
                            Na Avanti Transporte Corporativo, não oferecemos apenas um serviço de transporte — oferecemos uma experiência que transforma o deslocamento de seus colaboradores. Se você procura um transporte corporativo que realmente faça a diferença, você encontrou.
                        </p>
                        <p className="mb-4">
                            Personalizamos cada detalhe para atender exatamente às necessidades de sua empresa, garantindo que seus colaboradores cheguem ao destino com conforto e segurança. E para deixar tudo ainda mais fácil, temos um aplicativo exclusivo onde seus colaboradores podem acompanhar, em tempo real, cada etapa da trajetória.
                        </p>
                        <p className="mb-4">
                            Nossa busca incansável pela excelência nos rendeu, em 2024, o certificado <span className="font-semibold">ISO 9001</span>, uma prova de que estamos sempre entregando o melhor. Na Avanti, você não escolhe apenas um transporte, você escolhe qualidade, inovação e tranquilidade para sua equipe.
                        </p>
                        <p className="mb-6">
                            Transforme a maneira como sua empresa se desloca. Escolha a Avanti Transporte Corporativo e experimente um serviço que vai além das expectativas.
                        </p>
                    </div>                      
                </div>
            </div>
            
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
