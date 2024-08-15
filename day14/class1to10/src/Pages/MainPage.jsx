import { Outlet } from "react-router-dom"
import { Header } from "../components/header"
const MainPage = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default MainPage
