import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import ConferencePage from "./modules/ConferencePage";
import ProgramPage from "./modules/ProgramPage";
import RegistrationPage from "./modules/RegistrationPage";
import InformationsPage from "./modules/InformationsPage";
import SponsorsPage from "./modules/SponsorsPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Navigate to="konferencja" replace />,
        },
        {
          path: "konferencja",
          element: <ConferencePage />,
        },
        {
          path: "program",
          element: <ProgramPage />,
        },
        {
          path: "rejestracja",
          element: <RegistrationPage />,
        },
        {
          path: "informacje",
          element: <InformationsPage />,
        },
        {
          path: "sponsorzy",
          element: <SponsorsPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/katowice-conf-web/" }
);

export default router;
