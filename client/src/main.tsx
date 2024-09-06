import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Valorant from "./pages/Valorant.tsx";
import ViewAgent from "./pages/ViewAgent.tsx";

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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
