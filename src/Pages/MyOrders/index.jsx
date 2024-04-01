import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../../contex";
import OrdersCart from "../../Components/OrdersCart";

function MyOrders() {
  const context = useContext(ShoppingCardContext);

  return (
    <>
      <h1 className=" p-3 text-2xl"> My Orders</h1>

      <div className="w-72 ">
        {context.order.map((order, index) => (
          <Link key={index} to={`/MyOrders/${index}`}>
            <OrdersCart
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MyOrders;
