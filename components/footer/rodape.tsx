export default function Footer(){
    return(
        <footer className="bg-gray-800 text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                <h3 className="text-2xl font-bold mb-4">Viação Avanti</h3>
                <p className="text-gray-400">
                    Com a missão de transportar com segurança e pontualidade, a Viação Avanti se destaca pela sua capacidade operacional e pela qualidade de seus serviços, certificados pela ISO 9001.
                </p>
                </div>
                

                <div>
                <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
                <ul className="space-y-2">
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white">Home</a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white">Sobre Nós</a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white">Serviços</a>
                    </li>
                    <li>
                    <a href="#" className="text-gray-400 hover:text-white">Contato</a>
                    </li>
                </ul>
                </div>
                

                <div>
                <h4 className="text-xl font-semibold mb-4">Contato</h4>
                <ul className="text-gray-400 space-y-2">
                    <li><strong>Endereço:</strong> Rua Exemplo, 123, Montes Claros, MG</li>
                    <li><strong>Telefone:</strong> (38) 1234-5678</li>
                    <li><strong>Email:</strong> contato@viacaoavanti.com.br</li>
                </ul>
                <div className="mt-4 flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

                        <path d="M22 12.07c0-5.51-4.49-9.99-9.99-9.99S2.01 6.56 2.01 12.07c0 5.01 3.67 9.14 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.22c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.89h-2.34v6.99c4.77-.74 8.44-4.87 8.44-9.88z"/>
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

                        <path d="M23.44 4.83c-.81.36-1.67.61-2.58.72.93-.56 1.63-1.45 1.97-2.5-.87.52-1.83.89-2.85 1.1a4.4 4.4 0 00-7.5 4.02A12.4 12.4 0 011.64 3.16a4.4 4.4 0 001.36 5.87c-.75-.02-1.46-.23-2.08-.57v.06a4.4 4.4 0 003.52 4.31c-.7.19-1.43.21-2.14.08a4.41 4.41 0 004.1 3.06A8.83 8.83 0 010 19.54 12.45 12.45 0 006.75 21c8.07 0 12.5-6.68 12.5-12.5 0-.19 0-.38-.01-.57a8.88 8.88 0 002.2-2.27z"/>
                    </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">

                        <path d="M19.48 3H4.52A1.48 1.48 0 003 4.48v15.04A1.48 1.48 0 004.52 21h14.96A1.48 1.48 0 0021 19.52V4.48A1.48 1.48 0 0019.48 3zm-9.9 14h-3v-8h3v8zm-1.5-9a1.75 1.75 0 01-1.75-1.75c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.75-1.75 1.75zm10.5 9h-3v-4.5c0-1.1-.9-2-2-2s-2 .9-2 2V17h-3v-8h3v1.13c.57-.84 1.5-1.38 2.5-1.38 2 0 3.5 1.5 3.5 3.5V17z"/>
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            

            <div className="mt-8 border-t border-gray-700 pt-4">
                <p className="text-gray-400 text-center">
                &copy; {new Date().getFullYear()} Viação Avanti. Todos os direitos reservados.
                </p>
            </div>
            </footer>

    )
}