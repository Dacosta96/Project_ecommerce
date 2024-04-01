import Card from "../../Components/Card";
import { useContext } from "react";
import { ShoppingCardContext } from "../../contex";

function Clothes() {
  const context = useContext(ShoppingCardContext);

  const filterClothes = context.items.filter((product) =>
    product.category.includes("clothing")
  );

  return (
    <div className=" text-2xl font-medium mb-4">
      <div className=" text-2xl font-medium mb-4">Clothes</div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
        {filterClothes?.map(
          (
            item // Envía información de la API al componente Card
          ) => (
            <Card key={item.id} data={item} />
          )
        )}
      </div>
    </div>
  );
}

export default Clothes;
