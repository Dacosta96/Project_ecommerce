import { XCircleIcon } from "@heroicons/react/24/solid";

function OrderCart(props) {
  // eslint-disable-next-line react/prop-types
  const { id, title, image, price, handleDelete } = props;

  let renderXCircleIcon;

  if (handleDelete) {
    renderXCircleIcon = (
      <XCircleIcon
        className="h-4 w-4 text-black-500 cursor-pointer"
        onClick={() => handleDelete(id)}
      />
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full object-cover" src={image} alt="img" />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex item-center gap-2">
        <p className="font-medium text-sm">{price}</p>
        {renderXCircleIcon}
      </div>
    </div>
  );
}

export default OrderCart;
