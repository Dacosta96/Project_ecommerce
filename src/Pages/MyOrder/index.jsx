import { useContext } from "react"
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { ShoppingCardContext } from "../../contex"
import OrderCart from '../../Components/OrderCart';

function MyOrder() {
  const context = useContext(ShoppingCardContext)
  const currenPath = window.location.pathname // identificar enlace para tomarlo como ID
  let index = currenPath.substring(currenPath.lastIndexOf('/')+1)  // extraer ultimo componente enlace

  if(index === "last") index = context.order?.length -1 

  return (
    <>
    <div className='flex items-center justify-center relative w-80 mb-8'>
     <Link to="/MyOrders" className='absolute left-0'>
      <ArrowLeftEndOnRectangleIcon className='h-6 w-6 text-black cursor-pointer' />
    </Link>
      <h1> My Order</h1>
      </div>
  
    <div className='flex flex-col w-80'>
      {
        context.order?.[index]?.products.map(product => (
          <OrderCart
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))
      }
      </div>

      </>
  )
}

export default MyOrder
