import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/navbar";
import Admin from "./Admin/Admin";
import Home from "./pages/Home";
import GaNuong from "./components/navbar/GaNuong";
import Salad from "./components/navbar/Salad";
import ThitNuong from "./components/navbar/ThitNuong";
import Mon4 from "./components/navbar/zmon4";
import Mon5 from "./components/navbar/zmon5";
import Mon6 from "./components/navbar/zmon6";
import Mon7 from "./components/navbar/zmon7";
import Mon8 from "./components/navbar/zmon8";
import Mon9 from "./components/navbar/zmon9";
import GioHang from "./pages/GioHang";

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
              <Route path="/GaNuong" element={<GaNuong />} />
              <Route path="/Salad" element={<Salad />} />
              <Route path="/ThitNuong" element={<ThitNuong />} />
              <Route path="/mon4" element={<Mon4 />} />
              <Route path="/mon5" element={<Mon5 />} />
              <Route path="/mon6" element={<Mon6 />} />
              <Route path="/mon7" element={<Mon7 />} />
              <Route path="/mon8" element={<Mon8 />} />
              <Route path="/mon9" element={<Mon9 />} />
              <Route path="/GioHang" element={<GioHang />} />
            </Routes>
          </>
        }
      />
    </Routes>
  );
};

export default App;
