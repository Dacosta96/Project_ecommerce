import { createContext, useState} from "react";

 export const ShoppingCardContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCardProvider =({children}) =>{

    // couter shopping
    const[count,setCount] = useState(0) 

    // open - close card detail
    const[isProductDetailopen, setIsProductDetailopen ] = useState(false)
    const openProductDetail =()=>  setIsProductDetailopen(true)
    const closeProductDetail =()=> setIsProductDetailopen(false)

    // product show card
    const [productShow, setProductShow] =useState({})

    // add products
    const[addProducts , setAddProducts] = useState([])

    // open - close card checkout menu
    const[isCheckoutMenu, setIsCheckoutMenu ] = useState(false)
    const openCheckoutMenu =()=>  setIsCheckoutMenu(true)
    const closeCheckoutMenu =()=> setIsCheckoutMenu(false)

    // shopping order
    const[order , setOrder] = useState([])

    
    return (
        <ShoppingCardContext.Provider value={{
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
            setOrder
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}