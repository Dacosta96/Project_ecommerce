import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../contex";
import "./styles1.css";

function MenuResponsive() {
  const activeStyle = "underline";
  const context = useContext(ShoppingCardContext);

  const handleSingOut = () => {
    const stringifedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifedSignOut);
    context.setSignout(true);

    context.setSearch(null);
  };
  return (
    <aside
      className={`${
        context.isMenuResOpen ? "flex" : "hidden"
      } menu flex-col fixed left-0 bg-black/90  text-white`}
    >
      <div className="flex-col items-center gap-5 font-semibold list-none px-2">
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

      <div className="flex-col items-center gap-5 font-semibold list-none px-2 mt-4">
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
    </aside>
  );
}

export default MenuResponsive;
