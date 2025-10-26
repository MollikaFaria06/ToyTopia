import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const initialEmail = location.state?.email || "";
  const [email, setEmail] = useState(initialEmail);

  useEffect(() => {
    document.title = "ToyTopia | Forgot Password";
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire("Enter Email", "Please enter your email", "info");
      return;
    }
    try {
      await resetPassword(email);
      Swal.fire(
        "Reset Sent",
        "Check your email to reset password. Redirecting to Gmail.",
        "success"
      );
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div
      className="max-w-md mx-auto bg-white rounded p-6 shadow"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl text-blue-700 font-bold mb-4 text-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Reset Password
      </h2>
      <form className="space-y-4" onSubmit={handleReset}>
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
        <button
          type="submit"
          className="btn bg-orange-500 text-white w-full"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
}
