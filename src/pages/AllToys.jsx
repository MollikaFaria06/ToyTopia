import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard/ToyCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AllToys() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    document.title = "ToyTopia | All Toys";
    fetch("/toys.json")
      .then((r) => r.json())
      .then(setToys)
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-6">
      <h2
        className="text-3xl font-bold mb-6"
        data-aos="fade-down"
      >
        Explore All Toys Here
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toys.map((toy, idx) => (
          <div
            key={toy.toyId}
            data-aos="fade-up"
            data-aos-delay={idx * 80} 
          >
            <ToyCard toy={toy} />
          </div>
        ))}
      </div>
    </div>
  );
}
