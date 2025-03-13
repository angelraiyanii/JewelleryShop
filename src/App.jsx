import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Slider from "./component/Slider";
import Footer from "./component/Footer";
import Category from "./component/Category";
import Product from "./component/Product";
import Login from "./component/Login";
import Registor from "./component/Registor";
import Account from "./component/Account";
import Cart from "./component/Cart";
import Wishlist from "./component/Wishlist";
import ForgotPassword from "./component/ForgotPassword";
import OTPVerification from "./component/OTPVerification";
function App() {
  return (
    <Router>
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
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registor" element={<Registor />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/OTPVerification" element={<OTPVerification />} />
      </Routes>
    </Router>
  );
}

export default App;