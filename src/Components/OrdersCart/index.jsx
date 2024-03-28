

function OrdersCart(props){
 
    // eslint-disable-next-line react/prop-types
    const{totalPrice, totalProducts }=props
  
   

    return(

       <div className='flex justify-between items-center mb-3'>
            
                <div> fecha </div>
                <div>{totalProducts}</div>
                <div>{totalPrice}</div>
            
       </div>
    )
}

export default OrdersCart