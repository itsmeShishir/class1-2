import {useState, useEffect} from "react";
import { Header } from "./components/header";
import { Cards } from "./components/Card";
import { Sliders } from "./components/Slider";
function App(){
  let [state, SetState] = useState([]);
  useEffect(()=>{
  let fectchData = async()=>{
    try{
      let response= await fetch("https://fakestoreapi.com/products")
      let data = await response.json()
      return SetState(data)
    }catch(e){
      console.log(e.message)
    }

  }
  fectchData()

  },[])
  
  return (
    <>
    <Header />
    <Sliders />
    <div className="sm:container mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-3 grid-rows-3 ">
    {state.map(items => {
      return(
       
                <div key={items.id}>
                <Cards title={items.title} image={items.image} price = {items.price}/>
              </div>

      )
    }
    )}
        </div>

    </>
  )
}

export default App;