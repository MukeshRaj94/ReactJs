import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Errors from "./components/Errors";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const Grocery = lazy(() => import("./components/Grocery"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Errors />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
