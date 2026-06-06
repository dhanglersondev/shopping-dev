
export function Cart() {
   return (
      <div className="bg-linear-to-br from-gray-100 to-gray-200 min-h-screen py-12">
         <div className="w-full max-w-7xl px-4 mx-auto">
            <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300 py-2 px-2">
               <img
                  src="https://m.media-amazon.com/images/I/61gVL56Z5cL._AC_SX679_.jpg"
                  alt="Logo produto"
                  className="w-32"
               />

               <strong>Preço: R$ 3.500,00</strong>

               <div className="flex items-center justify-center gap-3">
                  <button
                     className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                  >
                     -
                  </button>

                  1

                  <button
                     className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
                  >
                     +
                  </button>
               </div>


               <strong className="float-right">
                  SubTotal: R$ 3.500,00
               </strong>
            </section>

            <p className="font-bold mt-4">Total: R$1.000</p>
         </div>
      </div>
   )
}