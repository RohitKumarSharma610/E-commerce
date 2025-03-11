import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Services from "./components/services.jsx";
import Product from "./components/product.jsx";
import Cart from "./components/Cart.jsx";
import All from "./components/productscompo/all.jsx";
import Electronics from "./components/productscompo/electronics.jsx";
import Jewelery from "./components/productscompo/jewelery.jsx";
import Men from "./components/productscompo/men's clothes.jsx";
import Women from "./components/productscompo/women's clothes.jsx";
import Wishlist from "./components/productscompo/wishlist.jsx";
import Example from "./components/hero message/notfound.jsx";
import Search from "./components/productscompo/search.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";


let routerr = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Navigate to="products/all" replace />} />
       <Route path="products/" element={<Home />}>
        <Route path="all" element={<All />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="jewelery" element={<Jewelery />} />
        <Route path="men's clothing" element={<Men />} />
        <Route path="women's clothing" element={<Women />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="search" element={<Search />} />
      <Route path="services" element={<Services />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="*" element={<Example/>}/>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routerr} />
);
