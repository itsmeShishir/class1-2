import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CustomButton from '../components/Button';

export default function SingleProduct() {

  const [data, setData] = useState({})
  const {id} = useParams();

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                let response= await fetch(`https://fakestoreapi.com/products/${id}`)
                let data = await response.json()
                return setData(data)
            }catch(e){
                console.log(e.message)
            }
        }
            fetchData();
    },[id])
  return (
    <div>
      <h1>{data.title}</h1>
        <p>{data.price}</p>
        <CustomButton />
    </div>
  )
}
