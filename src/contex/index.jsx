import { createContext, useState} from "react";

 export const ShoppingCardContext = createContext()

// eslint-disable-next-line react/prop-types
export const ShoppingCardProvider =({children}) =>{

    const[count,setCount] = useState(0) // contador compras

    const[isProductDetailopen, setIsProductDetailopen ] = useState(false)
    const openProductDetail =()=>  setIsProductDetailopen(true)
    const closeProductDetail =()=> setIsProductDetailopen(false)
    
    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            isProductDetailopen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}