import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  useEffect(() => { document.title = "ToyTopia | Register"; }, []);
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
      Swal.fire("Weak Password", "Password must have uppercase, lowercase and at least 6 characters.", "error");
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
    <div className="max-w-md mx-auto bg-white rounded p-6 shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={onSubmit}>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="input w-full mb-2" required />
        <input value={photoURL} onChange={e=>setPhotoURL(e.target.value)} placeholder="Photo URL" className="input w-full mb-2" />
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="input w-full mb-2" required />
        <div className="relative mb-2">
          <input value={password} onChange={e=>setPassword(e.target.value)} type={showPass ? "text" : "password"} placeholder="Password" className="input w-full" required />
          <button type="button" onClick={()=>setShowPass(s=>!s)} className="absolute right-2 top-2 text-sm">{showPass ? "Hide" : "Show"}</button>
        </div>
        <div className="text-sm text-gray-600 mb-2">
          Must include uppercase, lowercase and be at least 6 characters
        </div>
        <button type="submit" className="btn bg-orange-500 text-white w-full">Register</button>
      </form>
      <div className="text-center mt-4">
        <button onClick={handleGoogle} className="btn btn-outline">Continue with Google</button>
      </div>
      <div className="mt-4 text-sm">Already have an account? <Link to="/login" className="underline">Login</Link></div>
    </div>
  );
}
