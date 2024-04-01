import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCardProvider } from "../../contex";
import Home from "../Home";
import Clothes from "../Clothes";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar";
import "./App.css";
import CheckoutMenu from "../../Components/CheckoutMenu/idex";
import Electronics from "../Electronics";
import Jewelery from "../Jewelery";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "Clothes", element: <Clothes /> },
    { path: "Electronics", element: <Electronics /> },
    { path: "Jewelery", element: <Jewelery /> },
    { path: "MyAccount", element: <MyAccount /> },
    { path: "MyOrder", element: <MyOrder /> },
    { path: "MyOrders", element: <MyOrders /> },
    { path: "MyOrders/last", element: <MyOrder /> },
    { path: "MyOrders/:id", element: <MyOrder /> },
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
        <CheckoutMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCardProvider>
  );
}

export default App;
