import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Login() {
  useEffect(() => {
    document.title = "ToyTopia | Login";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { login, loginWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      Swal.fire("Success", "Logged in", "success");
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      Swal.fire("Success", "Logged in with Google", "success");
      navigate(from, { replace: true });
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div
      className="max-w-md mx-auto bg-yellow-200 rounded p-6 shadow"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl text-blue-700 font-bold mb-4 text-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Login Here
      </h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="input w-full"
          required
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <div className="relative" data-aos="fade-left" data-aos-delay="300">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="input w-full"
            required
          />
          <button
            type="button"
            onClick={() => setShowPass((s) => !s)}
            className="absolute right-2 top-2 text-xl text-gray-600"
          >
            {showPass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>

        <div className="flex justify-between items-center" data-aos="fade-up" data-aos-delay="400">
          <button type="submit" className="btn bg-orange-500 py-5 px-8 text-white">
            Login
          </button>
          <button
            type="button"
            onClick={() => navigate("/forgot-password", { state: { email } })}
            className="text-sm underline text-blue-800"
          >
            Forgot password?
          </button>
        </div>
      </form>

      <div className="text-center mt-4" data-aos="zoom-in" data-aos-delay="500">
        <button onClick={handleGoogle} className="btn btn-outline text-blue-800 bg-yellow-400">
          Continue with Google
        </button>
      </div>

      <div className="mt-4 text-sm text-blue-800 text-center" data-aos="fade-up" data-aos-delay="600">
        Don't have an account? <Link to="/register" className="underline">Register</Link>
      </div>
    </div>
  );
}
