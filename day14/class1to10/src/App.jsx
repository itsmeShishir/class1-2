import {useState, useEffect} from "react";
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
    {state.map(items =>(
      <div key={items.id}>
         <li>{items.title}</li>
      </div>
    )
    )}
    </>
  )
}

export default App;