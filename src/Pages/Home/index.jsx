import { useState,useEffect } from "react"
import Card from "../../Components/Card"

function Home() {
    const[items,setItems] = useState(null) // Inicializar estado

    useEffect(() =>{  // llamar API y traer datos
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setItems(data))

    },[]) 
    console.log(items)
  return (
  
      <div>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg '>
        {
          items?.map(item=>( // enviar informacion de API al componente card
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
      </div>
     
  //    <Layout>
  //    Home
  //  </Layout>
    
  )
}

export default Home
