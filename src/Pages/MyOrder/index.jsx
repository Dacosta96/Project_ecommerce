import { useContext } from "react"
import { ShoppingCardContext } from "../../contex"
import OrderCart from '../../Components/OrderCart';

function MyOrder() {
  const context = useContext(ShoppingCardContext)

  return (
    <>
    <h1 className="bg-red-200">
      MyOrder 
    </h1>
  
    <div className='flex flex-col w-80'>
      {
        context.order?.slice(-1)[0].products.map(product => (
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
