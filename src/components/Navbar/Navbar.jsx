import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="navbar bg-yellow-400 shadow-md px-4 md:px-8">
     
      <div className="navbar-start">
        <NavLink to="/" className="text-3xl lg:ml-10 md:ml-5 sm:ml-0 md:text-3xl font-bold text-blue-700 hover:text-blue-800">
          🧸ToyTopia
        </NavLink>
      </div>

     
      <div className="navbar-end">
       
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-400 rounded-box w-52 right-0"
          >
            <li>
              <NavLink to="/" className="hover:bg-yellow-300">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-orders" className="hover:bg-yellow-300">
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className="hover:bg-yellow-300 flex items-center gap-2">
                Profile
                <div className="relative group">
                  <img
                    src={
                      user?.photoURL ||
                      "https://citizensadvicecbg.org.uk/wp-content/uploads/citizens-advice-placeholder-female.jpg"
                    }
                    alt="Profile"
                    className="w-6 h-6 rounded-full object-cover border-2 border-white shadow"
                  />
                  
                  {user && (
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded shadow-md whitespace-nowrap hidden group-hover:inline-block">
                      {user.displayName || "No Name"}
                    </span>
                  )}
                </div>
              </NavLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm bg-orange-500 hover:bg-orange-600 w-full text-white"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="btn btn-sm bg-orange-500 hover:bg-orange-600 w-full text-white"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>

    
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold border-b-2 border-blue-700 pb-1"
                : "text-white hover:text-blue-200 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/my-orders"
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold border-b-2 border-blue-700 pb-1"
                : "text-white hover:text-blue-200 transition"
            }
          >
            My Orders
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center gap-2 text-blue-700 font-bold border-b-2 border-blue-700 pb-1"
                : "flex items-center gap-2 text-white hover:text-blue-200 transition"
            }
          >
            <div className="relative group flex items-center gap-2">
              Profile
              <img
                src={
                  user?.photoURL ||
                  "https://citizensadvicecbg.org.uk/wp-content/uploads/citizens-advice-placeholder-female.jpg"
                }
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-white shadow"
              />
             
              {user && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {user.displayName || "No Name"}
                </span>
              )}
            </div>
          </NavLink>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-sm w-[120px] h-[35px] lg:mr-10 md:mr-5 sm:mr-0 text-lg bg-orange-500 hover:bg-orange-600 text-white"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm w-[120px] h-[35px] text-lg bg-orange-500 hover:bg-orange-600 text-white"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
