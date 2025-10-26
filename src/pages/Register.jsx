import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Register() {
  useEffect(() => {
    document.title = "ToyTopia | Register";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { register, loginWithGoogle } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const passwordValid = (pwd) => {
    return /[A-Z]/.test(pwd) && /[a-z]/.test(pwd) && pwd.length >= 6;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!passwordValid(password)) {
      Swal.fire(
        "Weak Password",
        "Password must have uppercase, lowercase and at least 6 characters.",
        "error"
      );
      return;
    }
    try {
      await register(email, password, name, photoURL);
      Swal.fire("Registered", "Account created successfully", "success");
      navigate("/");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogle = async () => {
    try {
      await loginWithGoogle();
      Swal.fire("Success", "Logged in with Google", "success");
      navigate("/");
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
        className="text-2xl font-bold text-blue-800 mb-4 text-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Register Here
      </h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="input w-full"
          required
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <input
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
          className="input w-full"
          data-aos="fade-left"
          data-aos-delay="300"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="input w-full"
          required
          data-aos="fade-right"
          data-aos-delay="400"
        />

        <div
          className="relative"
          data-aos="fade-left"
          data-aos-delay="500"
        >
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

        <div
          className="text-sm text-gray-600"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Must include uppercase, lowercase and be at least 6 characters
        </div>

        <button
          type="submit"
          className="btn bg-orange-500 text-white w-full"
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          Register
        </button>
      </form>

      <div
        className="text-center mt-4"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <button
          onClick={handleGoogle}
          className="btn btn-outline text-blue-800 bg-yellow-400"
        >
          Continue with Google
        </button>
      </div>

      <div
        className="mt-4 text-sm text-blue-800 text-center"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        Already have an account?{" "}
        <Link to="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}
