import React from "react";

const Contato: React.FC = () => {
  return (
    <div className="bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-7xl mx-auto ">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Entre em contato conosco
            </h3>
            <p className="text-gray-600 mb-6">
              Estamos aqui para ajudar. Entre em contato conosco através das seguintes informações:
            </p>
            <ul className="text-gray-600">
              <li className="mb-4">
                <strong>Endereço:</strong> Av. Comendador Antonio Loureiro Ramos, 640 - Distrito Industrial, Montes Claros - MG, 39404-620
              </li>
              <li className="mb-4">
                <strong>Telefone:</strong> (38) 99230-0030
              </li>
              <li className="mb-4">
                <strong>Email:</strong> comercial@viacaoavanti.com.br
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Nossa Localização
            </h3>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.812877479565!2d-43.870386002577675!3d-16.694734241694825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab5538564e029d%3A0x9c8521afcbcbfbbf!2zVmlhw6fDo28gQXZhbnRp!5e0!3m2!1spt-BR!2sbr!4v1723841948591!5m2!1spt-BR!2sbr"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
