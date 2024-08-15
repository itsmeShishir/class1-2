import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { Login } from "./Pages/login"
import { Register } from "./Pages/Register"
import Contact from "./Pages/Contact"
import Dummy from "./Pages/Dummy"
import { Header } from "./components/header"
import SingleProduct from "./Pages/SingleProduct"
import MainPage from "./Pages/MainPage"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route index element={<Home />}/>
          <Route path="product" element={<Dummy />}/>
          <Route path="singleProduct" element={<SingleProduct />}/>
          <Route path="category" element="category"/>
          <Route path="register" element={<Register />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="blog" element="blog"/>
          <Route path="*" element="404"/>
        </Route>
        <Route path="/admin" element="admin Dashbiaord"/>
        <Route path="login" element={<Login />}/>


      </Routes>
    </>
  )
}

export default App
