import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const { user } = useContext(AuthContext); 

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.toyId === id);
        setToy(found);
      })
      .catch(console.error);
  }, [id]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (!toy) return <div className="text-center mt-20">Loading...</div>;

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire("Success!", "Your request was sent successfully!", "success");
  };

  const handleOrder = () => {
    if (!user) {
      Swal.fire("Login Required", "Please login to place an order.", "info");
      return;
    }

    const order = {
      id: Date.now(), 
      toyId: toy.toyId,
      toyName: toy.toyName,
      quantity: 1,
      price: toy.price,
      userEmail: user.email,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...existingOrders, order]));

    Swal.fire("Ordered!", "Your order has been placed.", "success");
  };

  return (
    <div className="space-y-8 px-4 md:px-8 lg:px-16">
      <h2
        className="text-3xl max-w-3xl mx-auto text-white font-bold mb-4"
        data-aos="fade-down"
      >
        Toy Details
      </h2>

      <div
        className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-lg"
        data-aos="fade-up"
      >
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="h-64 mx-auto mb-4 object-contain"
          data-aos="zoom-in"
        />
        <h2 className="text-3xl font-bold text-orange-600 mb-2" data-aos="fade-right">
          {toy.toyName}
        </h2>
        <p className="text-green-800 mb-2" data-aos="fade-left">
          {toy.description}
        </p>
        <p className="text-yellow-600" data-aos="fade-right">
          <strong>Price:</strong> ${toy.price}
        </p>
        <p className="text-yellow-600" data-aos="fade-left">
          <strong>Rating:</strong> {toy.rating}
        </p>
        <p className="text-yellow-600" data-aos="fade-right">
          <strong>Available:</strong> {toy.availableQuantity}
        </p>

        {/* Order Now Button */}
        <button
          onClick={handleOrder}
          className="btn bg-orange-500 text-white w-full mt-4"
          data-aos="zoom-in"
        >
          Order Now
        </button>

        {/* Try Now Form */}
        <form
          onSubmit={handleTryNow}
          className="mt-6 space-y-3"
          data-aos="fade-up"
        >
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
    </div>
  );
};

export default ToyDetails;
