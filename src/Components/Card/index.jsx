import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCardContext } from "../../contex"



function Card(data){

const context = useContext(ShoppingCardContext)

const productShow=(detail) =>{
    context.openProductDetail()
    context.setProductShow(detail)
}

const addProductsCart=(dataProduct)=>{
    context.setCount(context.count +1)
    context.setAddProducts([...context.addProducts, dataProduct])

}
console.log(context.addProducts)

    return(

        <div className='bg-white cursor-pointer w-56 h-60 '
        onClick={()=>
            productShow(data.data)
        } >
            <figure className='relative mb-4 w-full h-4/5 '>
                <span className='text-xs absolute bottom-0 left-0 bg-white/65 rounded-lg text-black m-2 px-3'>{data.data.category}</span>
                <img 
                src={data.data.image} 
                alt="camara" className='w-ful h-full object-cover rounded-lg'/>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white/65 w-6 h-6 rounded-full m-2'
                onClick={()=> 
                    addProductsCart(data.data)
                    }>
                    <PlusCircleIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
                </div>
            </figure>
            <p className="flex justify-between text-lg  bg-black/10 rounded-lg">
                <span className='text-sm font-light truncate'>{data.data.title}</span>
                <span className='text-lg font-semibold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card