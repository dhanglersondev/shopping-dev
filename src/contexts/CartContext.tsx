import { createContext, useState, type ReactNode } from "react";
import type { ProductsProps } from "../pages/home";

interface CartContextData {
   cart: CartProps[];
   cartAmount: number;
   addItemCart: (newItem: ProductsProps) => void;
   removeItemCart: (product: CartProps) => void;
   total: string;
}

interface CartProps {
   id: number;
   title: string;
   description: string;
   price: number;
   cover: string;
   amount: number;
   total: number;
}

interface CartProviderProps {
   children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
   const [cart, setCart] = useState<CartProps[]>([]);
   const [total, setTotal] = useState("");

   function addItemCart(newItem: ProductsProps) {
      setCart((prevCart) => {
         const indexItem = prevCart.findIndex((item) => item.id === newItem.id);

         if (indexItem !== -1) {
            const updatedCart = prevCart.map((item, index) =>
               index === indexItem
                  ? {
                     ...item,
                     amount: item.amount + 1,
                     total: (item.amount + 1) * item.price,
                  }
                  : item
            );
            totalResultCart(updatedCart);
            return updatedCart;
         }

         const data = {
            ...newItem,
            amount: 1,
            total: newItem.price,
         };

         const updatedCart = [...prevCart, data];
         totalResultCart(updatedCart);
         return updatedCart;
      });
   }

   function removeItemCart(product: CartProps) {
      setCart((prevCart) => {
         const indexItem = prevCart.findIndex((item) => item.id === product.id);

         if (prevCart[indexItem]?.amount > 1) {
            const updatedCart = prevCart.map((item, index) =>
               index === indexItem
                  ? {
                     ...item,
                     amount: item.amount - 1,
                     total: item.total - item.price,
                  }
                  : item
            );
            totalResultCart(updatedCart);
            return updatedCart;
         }

         const updatedCart = prevCart.filter((item) => item.id !== product.id);
         totalResultCart(updatedCart);
         return updatedCart;
      });
   }

   function totalResultCart(items: CartProps[]) {
      let myCart = items;
      let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)
      const resultFormated = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

      setTotal(resultFormated);
   }

   return (
      <CartContext.Provider
         value={{
            cart,
            cartAmount: cart.reduce((acc, item) => acc + item.amount, 0),
            addItemCart,
            removeItemCart,
            total
         }}
      >
         {children}
      </CartContext.Provider>
   )
}

export default CartProvider;