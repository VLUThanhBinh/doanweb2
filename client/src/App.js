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

const App = () => {
  return (
    <Routes>
      <Route path="/Admin" element={<Admin />} />
      <Route
        path="*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Foods" element={<Foods />} />
              <Route path="/Drinks" element={<Drinks />} />
              <Route path="/Desserts" element={<Desserts />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
};

export default App;
