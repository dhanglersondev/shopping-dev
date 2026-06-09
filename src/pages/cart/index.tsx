import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

export function Cart() {
   const { cart, addItemCart, removeItemCart, total } = useContext(CartContext);

   return (
      <div className="bg-linear-to-br from-gray-100 to-gray-200 min-h-screen py-8">
         <div className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-bold text-2xl md:text-3xl text-center mb-8">
               Meu carrinho
            </h1>

            {cart.length === 0 && (
               <div className="flex flex-col items-center justify-center py-20 text-center">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                     🛒 Seu carrinho está vazio
                  </h2>

                  <p className="text-gray-500 mb-6">
                     Adicione alguns produtos para continuar suas compras.
                  </p>

                  <Link
                     to="/"
                     className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                     Ver produtos
                  </Link>
               </div>
            )}

            <div className="space-y-4">
               {cart.map((item) => (
                  <section
                     key={item.id}
                     className="
                        bg-white rounded-lg shadow-sm border border-gray-200
                        p-4
                        flex flex-col md:flex-row
                        items-center md:items-center
                        gap-4
                     "
                  >
                     <img
                        src={item.cover}
                        alt={item.title}
                        className="w-28 h-28 md:w-32 md:h-32 object-cover rounded"
                     />

                     <div className="flex-1 text-center md:text-left">
                        <h2 className="font-semibold text-lg text-gray-800">
                           {item.title}
                        </h2>

                        <p className="text-green-700 font-medium mt-1">
                           {item.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                           })}
                        </p>
                     </div>

                     <div className="flex items-center justify-center gap-3">
                        <button
                           onClick={() => removeItemCart(item)}
                           className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer"
                        >
                           -
                        </button>

                        <span className="font-semibold text-lg">
                           {item.amount}
                        </span>

                        <button
                           onClick={() => addItemCart(item)}
                           className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center cursor-pointer"
                        >
                           +
                        </button>
                     </div>

                     <strong className="text-lg text-gray-800">
                        {item.total.toLocaleString("pt-BR", {
                           style: "currency",
                           currency: "BRL",
                        })}
                     </strong>
                  </section>
               ))}
            </div>

            {cart.length > 0 && (
               <p className="font-bold mt-4 text-right text-xl">
                  Total: {total}
               </p>
            )}
         </div>
      </div>
   );
}
