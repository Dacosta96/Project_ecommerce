
import { useContext } from "react"
import { Link } from 'react-router-dom';
import { ShoppingCardContext } from "../../contex"
import OrdersCart from '../../Components/OrdersCart';

function MyOrders() {

  const context = useContext(ShoppingCardContext)

  return (
    <>
   
      <h1 className="bg-red-200"> My Orders</h1>
     
      { 
        context.order.map((order,index) =>(
      <Link key={index} to={`/MyOrders/${index}`}> 
         <OrdersCart
          totalPrice={order.totalPrice}
          totalProducts={order.totalProducts}
         
         /> 
         </Link>
        ))
      }

      
    </>
  )
}

export default MyOrders
