import { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import axios from "axios";

export function CategoryCards() {
  let [state, SetState] = useState([]);
  useEffect(()=>{
  let fectchData = async()=>{
    try{
      let response= await axios.get("https://fakestoreapi.com/products/categories")
      // let data = await response.json()
      console.log(response.data)
      return SetState(response.data)
    }catch(e){
      console.log(e.message)
    }

  }
  fectchData()
  },[])

  return (
    <>

    <div className="sm:container mx-auto grid gap-4
     sm:grid-cols-1 md:grid-cols-3 grid-rows-3 ">
    {state.map((items, index) => {
      return(
       
                <div key={index}>
                 <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {items}
      </h5>
    </Card>
              </div>
              )}
    )}
        </div>

    
    </>
  );
}
