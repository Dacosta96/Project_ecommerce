import React from 'react';
import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFount from "../NotFount"
import SignIn from "../SignIn"
import "./App.css"

const appRouters =() =>{
  let routes = useRoutes(
    {path:"/", element:<Home />}
  )

    return routes
}

function App() {
  


  return (
  
      <BrowserRouter>
        <appRouters />
      </BrowserRouter>
   
  )
}

export default App
