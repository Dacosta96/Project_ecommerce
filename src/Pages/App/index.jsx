import { useRoutes, BrowserRouter } from "react-router-dom";
import {ShoppingCardProvider} from "../../contex";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import "./App.css";
import CheckoutMenu from "../../Components/CheckoutMenu/idex";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "MyAccount", element: <MyAccount /> },
    { path: "MyOrder", element: <MyOrder /> },
    { path: "MyOrders", element: <MyOrders /> },
    { path: "SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutMenu/>
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
}

export default App;
