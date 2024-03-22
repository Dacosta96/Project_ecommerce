import { NavLink } from "react-router-dom";

function Navbar() {
const activeStyle = 'underline'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8'>
      <ul className='flex items-center gap-5'>
      <li className='font-semibold text-lg'>
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" className={({isActive}) => isActive?activeStyle:undefined}>All</NavLink>
        </li>
        <li>
          <NavLink to="/clothes" className={({isActive}) => isActive?activeStyle:undefined}>Clothes</NavLink>
        </li>
        <li>
          <NavLink to="/electronics" className={({isActive}) => isActive?activeStyle:undefined}>Electronics</NavLink>
        </li>
        <li>
          <NavLink to="/furnitures" className={({isActive}) => isActive?activeStyle:undefined}>Furnitures</NavLink>
        </li>
        <li>
          <NavLink to="/toys" className={({isActive}) => isActive?activeStyle:undefined}>Toys</NavLink>
        </li>
        <li>
          <NavLink to="/others" className={({isActive}) => isActive?activeStyle:undefined}>Others</NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-5'>
        <li className='text-black/60'>
          correo
        </li>
        <li>
          <NavLink to="/MyAccount" className={({isActive}) => isActive?activeStyle:undefined}>My account</NavLink>
        </li>
        <li>
          <NavLink to="/SignIn" className={({isActive}) => isActive?activeStyle:undefined}>SignIn</NavLink>
        </li>
        <li>
          🛒 0
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
