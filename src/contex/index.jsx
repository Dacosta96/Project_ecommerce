import { createContext, useState, useEffect } from "react";

export const ShoppingCardContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCardProvider = ({ children }) => {
  // couter shopping
  const [count, setCount] = useState(0);

  // open - close card detail
  const [isProductDetailopen, setIsProductDetailopen] = useState(false);
  const openProductDetail = () => setIsProductDetailopen(true);
  const closeProductDetail = () => setIsProductDetailopen(false);

  // product show card
  const [productShow, setProductShow] = useState({});

  // add products
  const [addProducts, setAddProducts] = useState([]);

  // open - close card checkout menu
  const [isCheckoutMenu, setIsCheckoutMenu] = useState(false);
  const openCheckoutMenu = () => setIsCheckoutMenu(true);
  const closeCheckoutMenu = () => setIsCheckoutMenu(false);

  // shopping order
  const [order, setOrder] = useState([]);

  // get API
  const [items, setItems] = useState(null); // Inicializar estado
  const [filteredItems, setFilteredItems] = useState(null); // filtrado

  // get Search
  const [search, setSearch] = useState(null);

  useEffect(() => {
    // llamar API y traer datos
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, search) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    // llamar API con filtro
    if (search) setFilteredItems(filteredItemsByTitle(items, search));
  }, [items, search]);

  return (
    <ShoppingCardContext.Provider
      value={{
        count,
        setCount,
        isProductDetailopen,
        openProductDetail,
        closeProductDetail,
        productShow,
        setProductShow,
        addProducts,
        setAddProducts,
        isCheckoutMenu,
        openCheckoutMenu,
        closeCheckoutMenu,
        order,
        setOrder,
        items,
        setItems,
        search,
        setSearch,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
