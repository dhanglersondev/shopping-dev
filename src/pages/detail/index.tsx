import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";
import { type ProductsProps } from "../home";

export function ProductDetail() {
   const { id } = useParams();
   const navigate = useNavigate();
   const { addItemCart } = useContext(CartContext);

   const [product, setProduct] = useState<ProductsProps | null>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function loadProduct() {
         try {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
         } catch (error) {
            console.error("Erro ao carregar produto:", error);
         } finally {
            setLoading(false);
         }
      }

      loadProduct();
   }, [id]);

   if (loading) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <p className="text-lg text-gray-600">Carregando produto...</p>
         </div>
      );
   }

   if (!product) {
      return (
         <div className="flex items-center justify-center min-h-screen">
            <p className="text-lg text-red-500">Produto não encontrado.</p>
         </div>
      );
   }

   return (
      <div className="bg-gray-100 min-h-screen py-10">
         <main className="max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8">

               <div className="flex justify-center">
                  <img
                     src={product.cover}
                     alt={product.title}
                     className="w-full max-w-md rounded-lg object-cover shadow"
                  />
               </div>

               <div className="flex flex-col">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                     {product.title}
                  </h1>

                  <p className="text-gray-600 leading-relaxed mb-6">
                     {product.description}
                  </p>

                  <div className="mb-8">
                     <span className="text-3xl font-bold text-green-700">
                        {product.price.toLocaleString("pt-BR", {
                           style: "currency",
                           currency: "BRL",
                        })}
                     </span>
                  </div>

                  <button
                     onClick={() => {
                        addItemCart(product);
                        navigate("/cart");
                     }}
                     className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 px-6 rounded-lg transition-colors font-semibold cursor-pointer"
                  >
                     <BsCartPlus size={22} />
                     Adicionar ao carrinho
                  </button>
               </div>

            </div>
         </main>
      </div>
   );
}