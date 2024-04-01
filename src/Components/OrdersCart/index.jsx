import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

function OrdersCart(props) {
  // eslint-disable-next-line react/prop-types
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 p-3 w-auto border border-black/30 rounded-lg">
      <div>
        <div className="flex items-center font-light text-sm">
          <CalendarDaysIcon className="h-4 w-4 mr-1" /> 29/03/2024{" "}
        </div>

        <div className="flex items-center font-light text-sm">
          <ShoppingBagIcon className="h-4 w-4 mr-1" />
          {totalProducts} Aticles
        </div>
      </div>
      <div className="flex items-center font-medium text-xl">
        $ {totalPrice} <ChevronDoubleRightIcon className="h-4 w-4 ml-1" />
      </div>
    </div>
  );
}

export default OrdersCart;
