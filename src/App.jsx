import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';
import TokenContextProvider, { TokenContext } from './Context/Token';
import { useContext, useEffect } from 'react';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import Details from './Components/Details/Details';
import Checkout from './Components/Checkout/Checkout';
import AllOrders from './Components/AllOrders/AllOrders'


function App() {

  let {setToken} = useContext(TokenContext)

  const routes = createBrowserRouter([
    {path: "", element: <Layout /> , children: [
      {path: "/", element: <ProtectedRoutes> <Home /> </ProtectedRoutes>},
      {path: "home", element:<ProtectedRoutes><Home /></ProtectedRoutes>},
      {path: "products", element:<ProtectedRoutes> <Products /></ProtectedRoutes>},
      {path: "categories", element:<ProtectedRoutes> <Categories /></ProtectedRoutes>},
      {path: "brands", element:<ProtectedRoutes> <Brands /></ProtectedRoutes>},
      {path: "cart", element:<ProtectedRoutes> <Cart /></ProtectedRoutes>},
      {path: "details/:id", element:<ProtectedRoutes> <Details /></ProtectedRoutes>},
      {path: "checkout", element:<ProtectedRoutes> <Checkout /></ProtectedRoutes>},
      {path: "allorders", element:<ProtectedRoutes> <AllOrders /></ProtectedRoutes>},

  
      {path: "login", element: <Login />},
      {path: "register", element: <Register />},
  
  
      {path: "*", element: <Notfound />},
    ]},
  ])

  useEffect(()=>{
    if(localStorage.getItem("userToken") != null) {
    setToken(localStorage.getItem("userToken"))
    }
  }, [] )

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
