import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail/idex";
import { useContext } from "react";
import { ShoppingCardContext } from "../../contex";

function Home() {
  const context = useContext(ShoppingCardContext);

  const renderView = () => {
    if (context.search?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map(
          (
            item // enviar informacion de API al componente card
          ) => <Card key={item.id} data={item} />
        );
      } else {
        return (
          <div className="text-center opacity-50 text-lg">Not available</div>
        );
      }
    } else {
      return context.items?.map(
        (
          item // enviar informacion de API al componente card
        ) => <Card key={item.id} data={item} />
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <p className=" text-2xl font-medium mb-4">Home</p>
      <input
        type="text"
        placeholder="Search"
        className="text-center border border-black/35 rounded-lg mb-6"
        onChange={(event) => context.setSearch(event.target.value)}
      />

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg max-sm:grid-cols-1 max-lg:grid-cols-3">
        {renderView()}
      </div>
      <ProductDetail />
    </div>
  );
}

export default Home;
