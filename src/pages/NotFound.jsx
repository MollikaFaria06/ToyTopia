import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "ToyTopia | 404 Not Found";
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="text-center py-20" data-aos="fade-up">
      <h1 className="text-6xl font-bold mb-4" data-aos="zoom-in" data-aos-delay="100">
        404
      </h1>
      <p className="mt-4 text-xl mb-6" data-aos="fade-in" data-aos-delay="200">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="btn bg-orange-500 text-white"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Go Home
      </Link>
    </div>
  );
}
