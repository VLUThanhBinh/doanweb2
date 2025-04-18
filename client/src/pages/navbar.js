import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gradient-to-b from-yellow-50 to-orange-50 shadow-md">
      {/* Top navbar section */}
      <div className="mx-[150px] flex items-center justify-between h-20">
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0 transform hover:scale-105 transition-transform"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-14 w-auto drop-shadow-sm"
          />
        </Link>

        {/* SearchGlobal - Improved proportions */}
        <div className="w-[40%] px-6">
          <div className="relative flex items-center">
            <svg
              className="absolute left-3 text-orange-500 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Tìm món ăn yêu thích..."
              className="border border-orange-200 bg-white rounded-full pl-10 pr-4 py-1.5 w-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all duration-200 shadow-sm"
            />
          </div>
        </div>

        {/* Auth and Cart - Better spacing */}
        <div className="flex items-center gap-6">
          <Link to="/auth" className="flex items-center group">
            <div className="relative bg-orange-100 rounded-full p-2 group-hover:bg-orange-200 transition-colors">
              <svg
                className="h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span className="ml-2 text-orange-800 font-medium group-hover:text-orange-900 transition-colors">
              Đăng nhập
            </span>
          </Link>
          <Link to="/giohang" className="flex items-center group">
            <div className="relative bg-orange-100 rounded-full p-2 group-hover:bg-orange-200 transition-colors">
              <svg
                className="h-5 w-5 text-orange-600 group-hover:text-orange-700 transition-colors"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <span className="ml-2 text-orange-800 font-medium group-hover:text-orange-900 transition-colors">
              Giỏ hàng
            </span>
          </Link>
        </div>
      </div>

      {/* Category navigation - Better spacing and proportion */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 shadow-sm">
        <div className="mx-[150px]">
          <nav className="grid grid-cols-9 gap-1 py-2">
            <NavLink
              to="/GaNuong"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 11s.3-2.2-3-4c-3.1 1.8-3 4-3 4m6 4v3c0 1.1-.9 2-2 2H9a2 2 0 01-2-2v-3" />
                <path d="M12 19v4m-2-2h4M3 11h18M5 11V7c0-1.1.9-2 2-2h10a2 2 0 012 2v4" />
              </svg>
              <span className="text-sm whitespace-nowrap">Gà Nướng</span>
            </NavLink>

            {/* Repeat the same structure for other NavLinks */}
            <NavLink
              to="/Salad"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 5a1 1 0 11-2 0 1 1 0 012 0zm3 3a1 1 0 11-2 0 1 1 0 012 0zm-6 2a1 1 0 110-2 1 1 0 010 2zm8 0a1 1 0 110-2 1 1 0 010 2zm-5 3a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
              <span className="text-sm whitespace-nowrap">Salad</span>
            </NavLink>

            <NavLink
              to="/ThitNuong"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 11c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2m-6 4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2m-6-4c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2" />
                <path d="M5 6h14v12H5z" />
              </svg>
              <span className="text-sm whitespace-nowrap">Thịt Nướng</span>
            </NavLink>

            <NavLink
              to="/mon4"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
              <span className="text-sm whitespace-nowrap">Burger</span>
            </NavLink>

            <NavLink
              to="/mon5"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span className="text-sm whitespace-nowrap">Pizza</span>
            </NavLink>

            <NavLink
              to="/mon6"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-sm whitespace-nowrap">Hot Dog</span>
            </NavLink>

            <NavLink
              to="/mon7"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              <span className="text-sm whitespace-nowrap">Đồ Uống</span>
            </NavLink>

            <NavLink
              to="/mon8"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-sm whitespace-nowrap">Combo</span>
            </NavLink>

            <NavLink
              to="/mon9"
              className={({ isActive }) =>
                `flex items-center justify-center px-2 py-1.5 rounded-full transition-all ${
                  isActive
                    ? "bg-white/20 text-white font-medium"
                    : "text-white hover:bg-white/10 font-medium"
                }`
              }
            >
              <svg
                className="h-4 w-4 mr-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <span className="text-sm whitespace-nowrap">Tráng Miệng</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
