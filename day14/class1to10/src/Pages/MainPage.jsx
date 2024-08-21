import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
const MainPage = () => {
  const [mode, SetMode] = useState(false);
  const clicked = () => {
      SetMode(!mode);
  }
  
  return (
    <div>
        <Header />
        <button onClick={clicked} className={mode? 'bg-black text-white' : 
          "text-black bg-white border-1 border-red-500"}>
          Click</button>
          {mode && <Outlet />}
    </div>
  )
}

export default MainPage
