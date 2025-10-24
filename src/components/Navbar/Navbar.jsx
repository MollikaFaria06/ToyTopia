import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-yellow-400 py-5 px-4 shadow">
      <div className="container mx-auto flex items-center px-4">
        
      
        <div className="flex items-center gap-6">
          <Link to="/" className="text-4xl font-bold text-indigo-700">
            ToyTopia
          </Link>
        </div>

        <div className="flex-1 flex justify-center gap-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold text-lg  px-3 py-2"
                : "text-white font-normal text-lg  px-3 py-2"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold text-lg px-3 py-2"
                : "text-white font-normal text-lg  px-3 py-2"
            }
          >
            Favorites
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${user.displayName || "User"}`
                  }
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                />
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow hidden group-hover:block">
                  <span className="text-sm">{user.displayName || "No Name"}</span>
                </div>
              </div>
              <button onClick={onLogout} className="btn btn-sm btn-ghost">
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm bg-orange-500 px-8 py-5 text-white text-lg font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
