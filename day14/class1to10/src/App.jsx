import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import { Login } from "./Pages/login"
import { Register } from "./Pages/Register"
import Contact from "./Pages/Contact"
import Dummy from "./Pages/Dummy"
import { Header } from "./components/header"
import SingleProduct from "./Pages/SingleProduct"


const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/product" element={<Dummy />}/>
        <Route path="/singleProduct" element={<SingleProduct />}/>
        <Route path="/category" element="category"/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/blog" element="blog"/>

        <Route path="*" element="404"/>
      </Routes>
    </>
  )
}

export default App
