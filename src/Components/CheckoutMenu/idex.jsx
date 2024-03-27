import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
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

      <div className='px-6 flex justify-between'>
        <p className='font-medium text-xl'>Total:</p>
        <p className='font-medium text-xl'>$ {totalPrice(context.addProducts)}</p>
      </div>
    </aside>
  )
}

export default CheckoutMenu;


