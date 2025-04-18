import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchGlobal from "./searchGlobal";
import Auth from "../components/auth/auth";

const navbar = () => {
  return (
    <div className="bg-gray-100 shadow-md">
      <div className="flex items-center justify-between px-[150px] py-4">
        <Link to="/Home">
          <img src="/images/logo.png" alt="Logo" className="h-16 w-auto" />
        </Link>

        <div className="flex items-center gap-8">
          <SearchGlobal />
          <Auth />
          <Link
            to="/GioHang"
            className="text-blue-600 font-semibold hover:underline"
          >
            Giỏ Hàng
          </Link>
        </div>
      </div>

      <div className="bg-white px-[150px] py-2">
        <nav className="flex justify-between">
          <NavLink
            to="/GaNuong"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            Gà Nướng
          </NavLink>
          <NavLink
            to="/Salad"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            Salad
          </NavLink>
          <NavLink
            to="/ThitNuong"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            Thịt Nướng
          </NavLink>
          <NavLink
            to="/mon4"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            mon4
          </NavLink>
          <NavLink
            to="/mon5"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            mon5
          </NavLink>
          <NavLink
            to="/mon6"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            mon6
          </NavLink>
          <NavLink
            to="/mon7"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            mon7
          </NavLink>
          <NavLink
            to="/mon8"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            mon8
          </NavLink>
          <NavLink
            to="/mon9"
            className="text-gray-700 font-medium hover:text-blue-500"
          >
            mon9
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default navbar;
