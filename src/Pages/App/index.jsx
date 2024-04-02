import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import {
  ShoppingCardProvider,
  initializeLocalStorage,
  ShoppingCardContext,
} from "../../contex";
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
  const context = useContext(ShoppingCardContext);

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  // sign Out
  const signout = localStorage.getItem("sign-out");
  const pardedSignOut = JSON.parse(signout);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;
  const isUserSignOut = context.signout || pardedSignOut;

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/Clothes",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Clothes />
        ) : (
          <Navigate replace to={"/signin"} />
        ),
    },
    {
      path: "/Electronics",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Electronics />
        ) : (
          <Navigate replace to={"/signin"} />
        ),
    },
    {
      path: "/Jewelery",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Jewelery />
        ) : (
          <Navigate replace to={"/signin"} />
        ),
    },
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
  initializeLocalStorage();
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
