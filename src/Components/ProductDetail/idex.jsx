import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { ShoppingCardContext } from "../../contex"
import './styles.css';


function ProductDetail() {
  const context = useContext(ShoppingCardContext)

  return (

    <aside className={`${context.isProductDetailopen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={()=> context.closeProductDetail()}> 
        <ArchiveBoxXMarkIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
        </div>
      </div>
 
    </aside>
  )
}

export default ProductDetail;


