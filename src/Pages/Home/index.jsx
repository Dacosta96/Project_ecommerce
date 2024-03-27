import { useState,useEffect } from "react"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail/idex"

function Home() {
    const[items,setItems] = useState(null) // Inicializar estado

    useEffect(() =>{  // llamar API y traer datos
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setItems(data))

    },[]) 
  return (
  
      <div className='flex flex-col items-center mt-10'>
        
        <p className='font-medium mb-6'>Home</p>
        
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
        {
          items?.map(item=>( // enviar informacion de API al componente card
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
        <ProductDetail/>
 
      </div>
     
  //    <Layout>
  //    Home
  //  </Layout>
    
  )
}

export default Home
