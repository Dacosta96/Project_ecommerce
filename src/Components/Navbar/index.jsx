import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Bars4Icon } from "@heroicons/react/24/solid";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/solid";

import { ShoppingCardContext } from "../../contex";

function Navbar() {
  const activeStyle = "underline";
  const context = useContext(ShoppingCardContext);

  // sign Out
  const signout = localStorage.getItem("sign-out");
  const pardedSignOut = JSON.parse(signout);
  const isUserSignOut = context.signout || pardedSignOut;

  // Account
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);

  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true;
  const noAccountInLocalState = context.account
    ? Object.keys(context.account).length === 0
    : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  const handleSingOut = () => {
    const stringifedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifedSignOut);
    context.setSignout(true);

    context.setSearch(null);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="text-white/60 max-md:hidden">{parsedAccount?.email}</li>
          <li>
            <NavLink
              to="/MyOrders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearch(null)}
            >
              My Orders
            </NavLink>
          </li>
          <div className="max-md:hidden">
          <li>
            <NavLink
              to="/MyAccount"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearch(null)}
            >
              My account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SignIn"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSingOut()}
            >
              Sign-Out
            </NavLink>
          </li>
          </div>

          <div className=" hidden max-md:flex">
        <AdjustmentsVerticalIcon className="h-6 w-6 text-black-500 cursor-pointer" />
      </div>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSingOut()}
          >
            Sign-In
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 first-line: bg-black/90 text-white">
      <ul className="flex items-center gap-5">
      <div className=" hidden max-md:flex">
        <Bars4Icon className="h-6 w-6 text-black-500 cursor-pointer" />
      </div>
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserSignOut ? "/SignIn" : "/"}`}>Shopi</NavLink>
        </li>
        <div className="flex items-center gap-5 max-md:hidden"> 
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearch(null)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearch(null)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setSearch(null)}
          >
            Jewelery
          </NavLink>
        </li>
        </div>
       
      </ul>
      

      <ul className="flex items-center gap-5">
        {renderView()}
        <li className="flex" onClick={() => context.openCheckoutMenu()}>
          <ShoppingCartIcon className="h-6 w-6 text-black-500 cursor-pointer" />
          <div>{context.addProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
