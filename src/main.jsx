import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import router from "./Route/Route.jsx";
import { RouterProvider } from "react-router";
import Authprovider from "./Authprovider/providerr/Authprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      {" "}
      <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>
);
