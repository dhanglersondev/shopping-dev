import { useState, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";

interface ProductsProps {
   id: number;
   title: string;
   description: string;
   price: number;
   cover: string;
}

export function Home() {
   const [products, setProducts] = useState<ProductsProps[]>([])

   useEffect(() => {
      async function getProducts() {
         const response = await api.get("/products")
         setProducts(response.data)
      }

      getProducts();
   }, [])

   return (
      <div className="bg-linear-to-br from-gray-100 to-gray-50 min-h-screen py-10">
         <main className="w-full max-w-7xl px-4 mx-auto">
            <h1
               className="font-bold text-3xl md:text-4xl mb-8 mt-6 text-center text-gray-800 drop-shadow-sm tracking-tight">
               Produtos em destaque
            </h1>

            {/* Ajuste para grid-cols-3 deixar cards maiores,
                nas grids 1 e 2 o card fica um pouco maior com responsividade */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 justify-center">

               {products.map((product) => (
                  <section
                     key={product.id}
                     // Em grid-cols-1 e grid-cols-2, max-w aumenta para ocupar mais espaço; ajusta responsivamente via Tailwind
                     className="
                        bg-white rounded-lg shadow hover:shadow-md transition-all duration-200 p-3 flex flex-col items-center 
                        max-w-80 w-full mx-auto md:mx-0 justify-between border border-gray-100 hover:-translate-y-0.5
                        sm:max-w-96       /* Grid 2: um pouco maior */
                        md:max-w-72       /* Grid 3 em diante: recua tamanho padrão */
                     "
                  >
                     <img
                        src={product.cover}
                        alt={product.title}
                        className="rounded mb-3 w-48 h-48 sm:w-56 sm:h-56 md:w-56 md:h-56 object-cover shadow-sm border border-green-50 cursor-pointer transition-transform hover:scale-105"
                     />
                     <p className="text-base md:text-lg font-semibold text-gray-700 mb-1 text-center line-clamp-2 h-12 md:h-16">
                        {product.title}
                     </p>

                     <div className="flex items-center justify-between w-full mt-2">
                        <span className="text-gray-400 mr-1 text-sm">R$</span>
                        <span className="text-green-700 text-base md:text-lg font-semibold">
                           {product.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
                        </span>
                        <button className="ml-auto group flex items-center justify-center bg-green-600 hover:bg-green-500 transition-colors rounded-full p-2 shadow focus:outline-none focus:ring-1 focus:ring-green-300 cursor-pointer">
                           <BsCartPlus size={18} color="#FFF" className="group-hover:scale-110 transition-transform" />
                        </button>
                     </div>
                  </section>
               ))}

            </div>
         </main>
      </div>
   )
}