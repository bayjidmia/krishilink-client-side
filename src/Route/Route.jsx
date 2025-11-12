import { createBrowserRouter } from "react-router";
import Rootlayout from "../Rootlayout/Rootlayout";
import Home from "../Component/Home/Home";
import Login from "../AuthenticationPage/Login/Login";
import Register from "../AuthenticationPage/Registration/Register";
import Allproducts from "../Pages/Allproducts/Allproducts";
import Myprofile from "../Pages/Myprofile/Myprofile";
import PrivateRoute from "../Pages/Privateroute/Privateroute";
import CropsDetails from "../Pages/CropsDetails/CropsDetails";

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
        element: (
          <PrivateRoute>
            <Myprofile></Myprofile>
          </PrivateRoute>
        ),
      },

      {
        path: "/cropsdetails/:id",
        element: (
          <PrivateRoute>
            <CropsDetails></CropsDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
