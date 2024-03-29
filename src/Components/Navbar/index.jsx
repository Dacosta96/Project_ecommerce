import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from "../../contex"

function Navbar() {
const activeStyle = 'underline'
const context = useContext(ShoppingCardContext)

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 bg-black/90 text-white'>
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
          <NavLink to="/jewelery" className={({isActive}) => isActive?activeStyle:undefined}>Jewelery</NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-5'>
        <li className='text-black/60'>
          correo
        </li>
        <li>
          <NavLink to="/MyOrders" className={({isActive}) => isActive?activeStyle:undefined}>My Orders</NavLink>
        </li>
        <li>
          <NavLink to="/MyAccount" className={({isActive}) => isActive?activeStyle:undefined}>My account</NavLink>
        </li>
      
        <li>
          <NavLink to="/SignIn" className={({isActive}) => isActive?activeStyle:undefined}>SignIn</NavLink>
        </li>
        <li className='flex'>
          <ShoppingCartIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
          <div>{context.addProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
