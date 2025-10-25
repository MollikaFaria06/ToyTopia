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
    <nav className="bg-yellow-400 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-indigo-700 hover:text-indigo-800 transition"
        >
          ToyTopia
        </NavLink>

        <div className="flex items-center gap-12">
          <NavLink
            to="/"
            end
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
            My Profile
            <div className="relative group">
              <img
                src={
                  user?.photoURL ||
                  "https://citizensadvicecbg.org.uk/wp-content/uploads/citizens-advice-placeholder-female.jpg"
                }
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover border-2 border-white shadow cursor-pointer"
              />
              {user && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow-md text-sm text-gray-700 hidden group-hover:block whitespace-nowrap">
                  {user.displayName || "No Name"}
                </div>
              )}
            </div>
          </NavLink>



          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 w-[120px]  text-white text-lg py-5 font-semibold"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 w-[120px] text-white text-lg py-5 font-semibold px-6"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
