import { BsCartPlus } from "react-icons/bs";

export function Home() {
   return (
      <div className="bg-linear-to-br from-gray-100 to-gray-200 min-h-screen py-12">
         <main className="w-full max-w-7xl px-4 mx-auto">
            <h1
               className="font-extrabold text-4xl md:text-5xl mb-12 mt-7 text-center text-gray-900 drop-shadow-lg tracking-tight">
               Produtos em destaque
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
               {/* Produto 1 */}
               <section className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-200 p-7 flex flex-col items-center max-w-80 mx-auto md:mx-0">
                  <img
                     src="https://m.media-amazon.com/images/I/61gVL56Z5cL._AC_SX679_.jpg"
                     alt="Imagem Pc Gamer"
                     className="rounded-xl mb-6 w-64 h-44 object-cover shadow-md border-2 border-green-100 cursor-pointer"
                  />
                  <p className="text-xl font-semibold text-gray-800 mb-1 text-center">
                     Pc Gamer
                  </p>

                  <div className="flex items-center justify-between w-full mt-2">
                     <strong className="text-2xl font-bold flex items-baseline">
                        <span className="text-gray-500 mr-1">R$</span>
                        <span className="text-green-600">3.500,00</span>
                     </strong>
                     <button className="ml-4 group flex items-center justify-center bg-green-700 hover:bg-green-400 transition-colors rounded-full p-2.5 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer">
                        <BsCartPlus size={22} color="#FFF" className="group-hover:scale-110 transition-transform" />
                     </button>
                  </div>
               </section>
               {/* Adicione outros produtos duplicando o <section> acima e alterando o conteúdo conforme necessário */}
            </div>
         </main>
      </div>
   )
}