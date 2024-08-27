export default function Footer(){
    return(
        <footer className="bg-avanti-naveblue text-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                <div>
                <h3 className="text-2xl font-bold mb-4">Viação Avanti</h3>
                <p className="text-gray-400">
                    Com a missão de transportar com segurança e pontualidade, a Viação Avanti se destaca pela sua capacidade operacional e pela qualidade de seus serviços, certificados pela ISO 9001.
                </p>
                </div>
                

                

                <div>
                <h4 className="text-xl font-semibold mb-4">Contato</h4>
                <ul className="text-gray-400 space-y-2">
                    <li><strong>Endereço:</strong> Av. Comendador Antonio Loureiro Ramos, 640 - Distrito Industrial, Montes Claros - MG</li>
                    <li><strong>Telefone:</strong> (38) 99230-0030</li>
                    <li><strong>Email:</strong> comercial@viacaoavanti.com.br</li>
                </ul>
                <div className="mt-4 flex space-x-4">
                    <a href="https://www.instagram.com/viacaoavanti/" className="text-gray-400 hover:text-white">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.267-.058 1.647-.07 4.85-.07M12 0C8.741 0 8.332.012 7.053.07 5.675.128 4.402.374 3.255 1.52 2.108 2.667 1.862 3.94 1.804 5.318.746 8.578.746 12 .746 15.259c0 3.204.012 3.584.07 4.85.062 1.366.333 2.633 1.308 3.608.975.975 2.242 1.246 3.608 1.308 1.267.058 1.647.07 4.85.07s3.584-.012 4.85-.07c1.366-.062 2.633-.333 3.608-1.308.975-.975 1.246-2.242 1.308-3.608.058-1.267.07-1.647.07-4.85s-.012-3.584-.07-4.85c-.062-1.366-.333-2.633-1.308-3.608-.975-.975-2.242-1.246-3.608-1.308-1.267-.058-1.647-.07-4.85-.07zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61555333199881&locale=pt_BR" className="text-gray-400 hover:text-white">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.676 0H1.324C.595 0 0 .595 0 1.324v21.352C0 23.405.595 24 1.324 24h11.495v-9.294H9.678v-3.622h3.141V8.414c0-3.104 1.895-4.791 4.663-4.791 1.324 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.793.714-1.793 1.76v2.308h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.405 24 22.676V1.324C24 .595 23.405 0 22.676 0z" />
                        </svg>
                    </a>
                    <a href="https://br.linkedin.com/company/via-oavanti" className="text-gray-400 hover:text-white">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.006 3H4.994A1.993 1.993 0 003 4.994v14.012C3 20.107 3.893 21 4.994 21h14.012c1.101 0 1.994-.893 1.994-1.994V4.994A1.993 1.993 0 0019.006 3zM8.337 18.669H5.896V10.56h2.441v8.109zm-1.22-9.195a1.418 1.418 0 110-2.837 1.418 1.418 0 010 2.837zm10.552 9.195h-2.441v-4.399c0-1.049-.372-1.765-1.301-1.765-.711 0-1.135.479-1.322.94-.068.166-.085.396-.085.627v4.597h-2.441s.032-7.457 0-8.109h2.441v1.147c.323-.499.902-1.209 2.194-1.209 1.602 0 2.803 1.045 2.803 3.293v4.878z" />
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