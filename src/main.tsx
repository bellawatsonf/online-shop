import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

import Profile from "./Pages/Profile/page.tsx";
import Contact from "./Pages/Contact/pages.tsx";
import Typography from "./Pages/Typgraphy/page.tsx";
import Home from "./Pages/Home/page.tsx";
import Navbar from "./components/Navbar.tsx";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/typography",
        element: <Typography />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
