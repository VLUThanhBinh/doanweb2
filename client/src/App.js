import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Admin from "./Admin/Admin";
import Home from "./pages/Home";
import Foods from "./components/navbar/Foods";
import Drinks from "./components/navbar/Drinks";
import Desserts from "./components/navbar/Desserts";
import Cart from "./pages/Cart";
import Auth from "./components/auth/auth";
import About from "./pages/Footer/aboutUs";
import Contact from "./pages/Footer/Contact";
import TermsOfService from "./pages/Footer/TermsOfService";
import PrivacyPolicy from "./pages/Footer/PrivacyPolicy";
import Footer from "./pages/Footer/footer";
import DessertDetail from "./components/FoodDetail/DessertDetail";
import EditFood from "./edit/editFood";
const App = () => {
  return (
    <Routes>
      <Route path="/Admin" element={<Admin />} />
      <Route
        className="flex"
        path="*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Foods" element={<Foods />} />
              <Route path="/Drinks" element={<Drinks />} />
              <Route path="/Desserts" element={<Desserts />} />
              <Route path="/Desserts/:id" element={<DessertDetail />} /> {/* Route chi tiết món tráng miệng */}
              <Route path="/Desserts/edit/:id" element={<EditFood />} /> {/* Route sửa món ăn */}
              <Route path="/Cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default App;