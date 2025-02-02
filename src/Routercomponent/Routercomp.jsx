import { Route, Router, Routes } from "react-router-dom"
import { Homesection } from "../Homesection/Herosection"
import { Layout } from "./Layout"
import { Product } from "../Product/Product"
import {About} from "../About/About"
import { Contact } from "../Contact/Contact"
import { Login } from "../Login/Login"
import { Productdetails } from "../Product/Productdetails"
import { Cartsection } from "../Cart/Cartsection"
import { Payment } from "../Payment/Payment"
import { ScrollToTop } from "../ScrollToTop"

export const Routercomponent = () => {
    return (
      <>
      
        <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Homesection/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/productdetails/:id" element={<Productdetails/>}/>
          <Route path="/Cartsection" element={<Cartsection/>}/>
          <Route path="/Cartsection/:id" element={<Cartsection/>}/>
          <Route path="/Payment" element={<Payment/>}/>
       </Route>
       <Route path="/login" element={<Login/>}/>
  
        </Routes>
        
      </>
    )
  }
  