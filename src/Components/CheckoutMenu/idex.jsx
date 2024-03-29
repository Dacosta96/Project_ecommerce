import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { useContext } from "react"
import { ShoppingCardContext } from "../../contex"
import './styles.css';
import OrderCart from '../OrderCart';
import{totalPrice} from '../../Utils'



function CheckoutMenu() {
  
  const context = useContext(ShoppingCardContext)

  const handleDelete =(id)=>{
    const filterProducts = context.addProducts.filter(product=> product.id != id)
    context.setAddProducts(filterProducts)
  }

  const handleCheckout =() =>{
    const orderAdd ={
      date: '01.04.24',
      products: context.addProducts,
      totalProducts: context.addProducts.length,
      totalPrice: totalPrice(context.addProducts)
    }
    context.setOrder([...context.order, orderAdd])
    context.setAddProducts([])
    context.closeCheckoutMenu()

    context.setSearch(null)
   
  }
 

  return (

    <aside className={`${context.isCheckoutMenu ? 'flex' : 'hidden'} product-checkout flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-2'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={()=> context.closeCheckoutMenu()}> 
        <ArchiveBoxXMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>

      <div className='px-2 overflow-y-scroll'>
      {
        context.addProducts.map(product=>(
  
          <OrderCart 
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          handleDelete={handleDelete}

          />
        ))
      }
      </div>

      <div className='px-6 flex justify-between flex-1 mb-4'>
        <p className='font-medium text-xl'>Total:</p>
        <p className='font-medium text-xl'>$ {totalPrice(context.addProducts)}</p>
      </div>
      
      <Link to='MyOrders/last'>
        <button className='bg-black py-3 w-11/12 text-white rounded-lg mb-4 mx-4 ' onClick={()=>handleCheckout()}>Checkout</button>
      </Link>
      
    </aside>
  )
}

export default CheckoutMenu;


