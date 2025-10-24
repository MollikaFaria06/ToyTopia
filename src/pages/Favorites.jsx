import React, { useEffect, useState } from "react";

export default function Favorites() {
  useEffect(()=>{ document.title = "ToyTopia | Favorites"; }, []);
  const [toys, setToys] = useState([]);
  useEffect(()=>{
    fetch("/toys.json")
      .then(r=>r.json())
      .then(setToys);
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Favorite Toys</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {toys.map(t => (
          <div key={t.toyId} className="bg-white p-3 rounded shadow">
            <img src={t.pictureURL} alt={t.toyName} className="w-full h-48 object-cover rounded" />
            <div className="font-semibold mt-2">{t.toyName}</div>
            <div>${t.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
