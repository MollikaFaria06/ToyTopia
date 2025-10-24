import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.toyId === id);
        setToy(found);
      });
  }, [id]);

  if (!toy) return <div className="text-center mt-20">Loading...</div>;

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire("Success!", "Your request was sent successfully!", "success");
  };

  return (
    <div className="max-w-3xl mx-auto card bg-base-100 shadow-xl p-8">
      <img src={toy.pictureURL} alt={toy.toyName} className="h-64 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-orange-600 mb-2">{toy.toyName}</h2>
      <p className="text-gray-700 mb-2">{toy.description}</p>
      <p><strong>Price:</strong> ${toy.price}</p>
      <p><strong>Rating:</strong> {toy.rating}</p>
      <p><strong>Available:</strong> {toy.availableQuantity}</p>

      <form onSubmit={handleTryNow} className="mt-6 space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Try Now
        </button>
      </form>
    </div>
  );
};

export default ToyDetails;
