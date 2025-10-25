import React, { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard/ToyCard";

export default function AllToys() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    document.title = "ToyTopia | All Toys";
    fetch("/toys.json")
      .then((r) => r.json())
      .then(setToys)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6">Explore Our All Toys Here</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
}
