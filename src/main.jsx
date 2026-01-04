import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Route/Route.jsx";
import { RouterProvider } from "react-router";
import Authprovider from "./Authprovider/providerr/Authprovider.jsx";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        {" "}
        <RouterProvider router={router} />
        <ToastContainer></ToastContainer>
      </Authprovider>
    </QueryClientProvider>
  </StrictMode>
);
