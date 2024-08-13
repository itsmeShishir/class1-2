import {useCallback, useRef } from "react";
import { Header } from "../components/header";
import { Cards } from "../components/Card";
import { CategoryCards } from "../components/category";
import Slider from "../components/Slider/slider";
import A from "../components/A";

function Home(){
  const pic = [
    "https://images.unsplash.com/photo-1719937050814-72892488f741?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1723200799114-358266b94a5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
  ]
  
  const refs = useRef();
  const goback = useCallback(()=>(
    refs.current.scrollIntoView({behavior:'smooth'})
  ),[])

  return (
    <>
      <div ref={refs}></div>
      <Header />
      <A />
      <Slider images={pic}/>
      <CategoryCards />
      <Cards />

      <button onClick={goback}>Go back To Top</button>
    </>
  )
}

export default Home;