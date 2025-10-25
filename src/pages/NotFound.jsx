import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(()=>{ document.title = "ToyTopia | 404 Not Found"; }, []);
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl">Oops! Page not found.</p>
      <Link to="/" className="btn bg-orange-500 text-white mt-6">Go Home</Link>
    </div>
  );
}
