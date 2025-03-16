import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Category from "./component/Category";
import Product from "./component/Product";
import Aboutus from "./component/Aboutus";
import Contactus from "./component/Contactus";
import Login from "./component/Login";
import Registor from "./component/Registor";
import ForgotPassword from "./component/ForgotPassword";
import OTPVerification from "./component/OTPVerification";
import Account from "./component/Account";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";
import OrderHistory from "./component/OrderHistory";
import AdCategory from "./component/Admin/AdCategory";
import AdPro from "./component/Admin/AdPro";
import SinglePro from "./component/SinglePro";
import AdUser from "./component/Admin/AdUser";
import Rating_Review from "./component/Rating_Review";
import CheckOut from "./component/CheckOut";
import Offer from "./component/Offer";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* User Panel */}
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
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registor" element={<Registor />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />
        <Route path="/Rating_Review" element={<Rating_Review />} />
        <Route path="/Admin/AdCategory" element={<AdCategory />} />
        <Route path="/Admin/AdPro" element={<AdPro />} />
        <Route path="/SinglePro" element={<SinglePro />} />
        <Route path="/Admin/AdUser" element={<AdUser />} />
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
