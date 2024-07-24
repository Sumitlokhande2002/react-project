import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet, Form } from "react-router-dom";
import About from "./src/components/about";
import Contact from "./src/components/contact";
import Error from "./src/components/error";
// import Grocerys from "./src/components/Grocery";
import RestaurantMenu from "./src/components/RestaurantMenu";
import React,{lazy,Suspense} from "react";
// const Grocerys=lazy(()=>import("./src/components/Grocery"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";



import Cart from "./src/components/cart";
const Applayout = () => {
  return (  
    <Provider store={appStore}>
       <div className="App">
      <Header />
      {<Outlet />}
    </div>
    </Provider>
 
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> }, 
      { path: "/about", element: <About/> },
      { path: "/cart", element: <Cart/> },
      { path: "/contact", element: <Contact/> },
      // { path: "/grocerys", element: <Suspense><Grocerys/></Suspense> },
      {path: "/restaurant/:resId", element: <RestaurantMenu/> }
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
