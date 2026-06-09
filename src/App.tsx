import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Cart } from "./pages/cart";
import { ProductDetail } from "./pages/detail";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

export { router };