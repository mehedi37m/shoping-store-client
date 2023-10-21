import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import CardDetails from "../Components/Allbrand/CardDetails";
import Register from "../Account/Register";
import Login from "../Account/Login";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Components/AddProduct/AddProduct";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import MyCart from "../Components/MyCart/MyCart";


const Routes = createBrowserRouter ([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
               path:"/",
               element:<Home></Home>
            },
            {
               path:"/myCart",
               element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path: "/details/:id",
                element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader:() => fetch('https://shoping-store-server-7dx1wqdra.vercel.app/product')
            },
            {
                path: "/addProduct",
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateProduct/:id",
                element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({params}) => fetch(`https://shoping-store-server-7dx1wqdra.vercel.app/product/${params.id}`)
            },
        ]
    }
])

export default Routes;