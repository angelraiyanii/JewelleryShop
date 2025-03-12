import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Category from "./component/Category";
import Product from "./component/Product";
import Login from "./component/Login";
import Registor from "./component/Registor";
import Account from "./component/Account";
import SiglePro from "./component/SiglePro";
import Aboutas from "./component/Aboutas";
import Contactas from "./component/Contactas";
import Cart from "./component/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Category />
              <Product />
            </>
          }
        />
        <Route path="/Category" element={<Category />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registor" element={<Registor />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/SiglePro" element={<SiglePro />} />
        <Route path="/Aboutas" element={<Aboutas />} />
        <Route path="/Contactas" element={<Contactas/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
