import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Admin from "./Admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/GaNuong" element={<div>Gà Nướng</div>} />
                <Route path="/Salad" element={<div>Salad</div>} />
                <Route path="/ThitNuong" element={<div>Thịt Nướng</div>} />
                <Route path="/mon4" element={<div>mon4</div>} />
                <Route path="/mon5" element={<div>mon5</div>} />
                <Route path="/mon6" element={<div>mon6</div>} />
                <Route path="/mon7" element={<div>mon7</div>} />
                <Route path="/mon8" element={<div>mon8</div>} />
                <Route path="/mon9" element={<div>mon9</div>} />
                <Route path="/GioHang" element={<div>Giỏ Hàng</div>} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
