import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/default/App.tsx";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout.tsx";
import LandingPage from "./pages/default/LandingPage.tsx";
import Valorant from "./pages/default/Valorant.tsx";
import ViewAgent from "./pages/default/ViewAgent.tsx";
import ShopLayout from "./Layouts/ShopLayout.tsx";
import ShopLandingPage from "./pages/shop/ShopLandingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "playground",
        element: <App />,
      },
      {
        path: "valorant",
        element: <Valorant />,
      },
      {
        path: "valorant/agent/:uuid",
        element: <ViewAgent />,
      },
    ],
  },
  {
    path: "/shop",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <ShopLandingPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
