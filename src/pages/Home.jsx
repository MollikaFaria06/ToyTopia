import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyCard from "../components/ToyCard/ToyCard";
import toyBanner from "../assets/toyBanner.jpg";

export default function Home() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    document.title = "ToyTopia | Home";
    fetch("/toys.json")
      .then((r) => r.json())
      .then(setToys)
      .catch(console.error);
  }, []);

  const popular = toys.slice(0, 9);

  // Dummy data for events & sellers
  const events = [
    {
      id: 1,
      name: "Dhaka Kids Toy Fair 2025",
      date: "December 10, 2025",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Z0sSUE52k5ym1K0iMbljNNaXNaC2HfqVkA&s",
      location: "Bangabandhu International Center, Dhaka",
    },
    {
      id: 2,
      name: "Creative Toy Workshop",
      date: "November 15, 2025",
      image: "https://img.freepik.com/premium-vector/creative-workshop-children-applique-draw-make-plasticine-knitting-embroidery-template-banner-educational-courses-children-hand-drawn-illustration-modern-cartoon-flat-style_318237-99.jpg?semt=ais_hybrid&w=740&q=80",
      location: "ToyTopia HQ, Lalbagh",
    },
  ];

  const sellers = [
    {
      id: 1,
      name: "HappyTots BD",
      image: "https://i.ebayimg.com/images/g/LsQAAOSw6RpoKmIB/s-l500.jpg",
      rating: 4.8,
    },
    {
      id: 2,
      name: "PlayHouse Corner",
      image: "https://i.ytimg.com/vi/f1ePvS8UYTs/sddefault.jpg",
      rating: 4.7,
    },
    {
      id: 3,
      name: "TinyDreams Toys",
      image: "https://i.ebayimg.com/images/g/~EIAAOSwuc9msnHG/s-l400.jpg",
      rating: 4.9,
    },
  ];

  return (
    <div className="space-y-12">
      {/* Banner Section */}
      <section className="mb-8">
        <div className="bg-yellow-300 rounded p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-5xl text-green-700 font-bold">
              Play, Learn, and Grow with{" "}
              <strong className="text-blue-900">ToyTopia!</strong>
            </h1>
            <p className="mt-4 text-green-700 font-semibold leading-relaxed">
              ToyTopia is a vibrant online marketplace where fun meets trust! 🎈
              We connect families with local toy sellers, helping parents find
              safe, creative, and affordable toys for their little ones. Our
              goal is to make playtime more joyful while supporting small
              businesses that bring imagination to life.
            </p>
            <Link
              to="/all-toys"
              className="btn py-3 px-6 mt-4 bg-orange-500 text-white text-lg"
            >
              Explore Toys
            </Link>
          </div>
          <img
            src={toyBanner}
            alt="toy banner"
            className="w-[600px] h-[300px] object-contain"
          />
        </div>
      </section>

      {/* Popular Toys */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-left text-white">
          Popular Toys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popular.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
<section className="mt-12 p-6 bg-green-100 rounded shadow">
  <h2 className="text-3xl text-black font-bold mb-4 text-center">
    🎪 Upcoming Events
  </h2>
  <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
    Stay tuned for fun-filled events and creative workshops hosted by ToyTopia!  
    Join us to explore new toys, meet local creators, and spark your child’s imagination. 🌈
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {events.map((event) => (
      <div
        key={event.id}
        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
      >
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold text-orange-600 mb-2">
          {event.name}
        </h3>
        <p className="text-gray-700 font-semibold">{event.date}</p>
        <p className="text-gray-600 mb-3">{event.location}</p>
        <Link
          to="/events"
          className="mt-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Learn More
        </Link>
      </div>
    ))}
  </div>
</section>


      {/* Featured Sellers Section */}
<section className="mt-12 p-6 bg-orange-100 rounded shadow">
  <h2 className="text-3xl text-black font-bold mb-6 text-center">
    🏆 Featured Sellers
  </h2>
  <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
    Meet our top-rated local sellers who bring joy, creativity, and quality to every toy they make.
    Each one is trusted by parents and loved by kids across Bangladesh! 💛
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {sellers.map((seller) => (
      <div
        key={seller.id}
        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
      >
        <img
          src={seller.image}
          alt={seller.name}
          className="w-32 h-32 object-cover rounded-full mb-3 border-4 border-orange-400"
        />
        <h3 className="text-xl font-bold text-green-700 mb-1">
          {seller.name}
        </h3>
        <p className="text-gray-600 mb-2">⭐ {seller.rating} / 5</p>
        <p className="text-gray-700 text-sm">
          {seller.id === 1
            ? "Specializes in eco-friendly educational toys for toddlers."
            : seller.id === 2
            ? "Offers creative building blocks and puzzle sets for young explorers."
            : "Known for soft plushies and imaginative play sets that spark creativity."}
        </p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
