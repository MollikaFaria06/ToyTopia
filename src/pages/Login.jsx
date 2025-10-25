import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  useEffect(() => { document.title = "ToyTopia | Login"; }, []);
  const { login, loginWithGoogle, resetPassword } = useContext(AuthContext);
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

  const handleForgot = async () => {
    if (!email) {
      Swal.fire("Enter Email", "Please enter your email above to reset", "info");
      return;
    }
    try {
      await resetPassword(email);
      Swal.fire("Reset Sent", "Check your email to reset password. Redirecting to Gmail.", "success");
      window.open("https://mail.google.com", "_blank");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow">
      <h2 className="text-3xl text-blue-700 font-bold mb-4">Login Here</h2>
      <form onSubmit={handleLogin}>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" className="input w-full mb-2" required />
        <div className="relative mb-2">
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type={showPass ? "text" : "password"} placeholder="Password" className="input w-full" required />
          <button type="button" onClick={()=>setShowPass(s=>!s)} className="absolute right-2 top-2 text-sm">{showPass ? "Hide" : "Show"}</button>
        </div>
        <div className="flex justify-between items-center">
          <button type="submit" className="btn bg-orange-500 py-5 px-8 text-white">Login</button>
          <button type="button" onClick={handleForgot} className="text-sm underline text-blue-800">Forgot password?</button>
        </div>
      </form>
      <div className="text-center mt-4">
        <button onClick={handleGoogle} className="btn btn-outline text-blue-800 bg-yellow-200">Continue with Google</button>
      </div>
      <div className="mt-4 text-sm text-blue-800">Don't have an account? <Link to="/register" className="underline">Register</Link></div>
    </div>
  );
}
