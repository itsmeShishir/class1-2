import {useState, useEffect} from 'react'

export default function SingleProduct() {
    const [data, setData] = useState({})

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                let response= await fetch("https://fakestoreapi.com/products/1")
                let data = await response.json()
                return setData(data)
            }catch(e){
                console.log(e.message)
            }
        }
            fetchData();
    },[])
  return (
    <div>
      <h1>{data.title}</h1>
        <p>{data.price}</p>
    </div>
  )
}
