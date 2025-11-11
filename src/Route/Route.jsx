import { createBrowserRouter } from "react-router";
import Rootlayout from "../Rootlayout/Rootlayout";
import Home from "../Component/Home/Home";
import Login from "../AuthenticationPage/Login/Login";
import Register from "../AuthenticationPage/Registration/Register";
import Allproducts from "../Pages/Allproducts/Allproducts";
import Myprofile from "../Pages/Myprofile/Myprofile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/allproducts",
        Component: Allproducts,
      },
      {
        path: "/profile",
        Component: Myprofile,
      },
    ],
  },
]);

export default router;
