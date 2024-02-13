import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import DRoot from "../DashRoot.jsx/DRoot";
import Error from "../Shared/Error";
import Volunteer from "../Pages/Dashboard/DashPage/HunmanAsset/Volunteer";
import Member from "../Pages/Dashboard/DashPage/HunmanAsset/Member";
import StockSummary from "../Pages/Dashboard/DashPage/Stock Managesment/StockSummary";
import StockIntems from "../Pages/Dashboard/DashPage/Stock Managesment/StockIntems";
import Addnewstock from "../Pages/Dashboard/Form/StockManagesment/Addnewstock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },
  {
    path: "/dashboard",
    element: <DRoot />,
    children: [
      {
        path: "/dashboard/home",
        element: <Dashboard />
      },

      // human asset
      {
        path: "/dashboard/member",
        element: <Member/>
      },
      {
        path: "/dashboard/volunteer",
        element: <Volunteer/>
      },

      //  stock managesment
      {
        path: '/dashboard/stocksummary',
        element: <StockSummary/>
      },
      {
        path: '/dashboard/stockinitem',
        element: <StockIntems/>
      },
      {
        path: '/dashboard/addnewstock',
        element: <Addnewstock/>
      }
 

    
      

    ]
  }
]);

export default router;