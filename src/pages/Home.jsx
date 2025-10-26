import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToyCard from "../components/ToyCard/ToyCard";
import toyBanner from "../assets/toyBanner.jpg";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [toys, setToys] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide1, slide2, slide3];

  useEffect(() => {
    document.title = "ToyTopia | Home";
    fetch("/toys.json")
      .then((r) => r.json())
      .then(setToys)
      .catch(console.error);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [currentSlide]);

  const popular = toys.slice(0, 9);

  const events = [
    {
      id: 1,
      name: "Dhaka Kids Toy Fair 2025",
      date: "December 10, 2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Z0sSUE52k5ym1K0iMbljNNaXNaC2HfqVkA&s",
      location: "Bangabandhu International Center, Dhaka",
    },
    {
      id: 2,
      name: "Creative Toy Workshop",
      date: "November 15, 2025",
      image:
        "https://img.freepik.com/premium-vector/creative-workshop-children-applique-draw-make-plasticine-knitting-embroidery-template-banner-educational-courses-children-hand-drawn-illustration-modern-cartoon-flat-style_318237-99.jpg?semt=ais_hybrid&w=740&q=80",
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
    <div className="space-y-12 px-4 md:px-8 lg:px-16">
      {/* Slider Section */}
      <section className="carousel w-full rounded-lg overflow-hidden bg-yellow-200 shadow-lg">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <div
              key={index}
              className="carousel-item relative w-full"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={slide}
                alt={`slide${index + 1}`}
                className="block w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-contain"
              />

              {/* Navigation buttons */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 z-30">
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))
                  }
                  className="btn btn-circle btn-sm sm:btn-md"
                >
                  ❮
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
                  }
                  className="btn btn-circle btn-sm sm:btn-md"
                >
                  ❯
                </button>
              </div>
            </div>
          )
        ))}
      </section>

      {/* Banner Section */}
      <section
        className="mb-8"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="bg-yellow-300 rounded p-6 md:p-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 shadow-lg">
          <div className="md:flex-1 min-w-0" data-aos="fade-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-green-700 font-bold">
              Play, Learn, and Grow with{" "}
              <strong className="text-blue-900">ToyTopia!</strong>
            </h1>
            <p className="mt-4 text-green-700 font-semibold leading-relaxed text-sm sm:text-base md:text-lg">
              ToyTopia is a vibrant online marketplace where fun meets trust! 🎈
              We connect families with local toy sellers, helping parents find
              safe, creative, and affordable toys for their little ones.
            </p>
            <Link
              to="/all-toys"
              className="btn py-2 sm:py-3 px-4 sm:px-6 mt-4 bg-orange-500 text-white text-base sm:text-lg hover:bg-orange-600 transition"
            >
              Explore Toys
            </Link>
          </div>
          <div
            className="md:flex-1 flex justify-center md:justify-end"
            data-aos="fade-left"
          >
            <img
              src={toyBanner}
              alt="toy banner"
              className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[65%] lg:max-w-[600px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Popular Toys Section */}
      <section data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-3xl font-bold text-white mb-4">Popular Toys</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {popular.map((toy) => (
            <div data-aos="zoom-in" key={toy.toyId}>
              <ToyCard toy={toy} />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        className="mt-12 mb-12 p-4 sm:p-6 md:p-8 bg-green-100 rounded shadow"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-3xl font-bold text-black mb-10 text-center">
          🎪 Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 gap-6">
          {events.map((event, idx) => (
            <div
              key={event.id}
              data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-40 sm:h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold text-orange-600 mb-2">
                {event.name}
              </h3>
              <p className="text-gray-700 font-semibold">{event.date}</p>
              <p className="text-gray-600 mb-3">{event.location}</p>
              <Link
                to="/events"
                className="mt-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-center text-sm sm:text-base"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Sellers */}
      <section
        className="mt-12 p-4 sm:p-6 md:p-8 bg-orange-100 rounded shadow"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-6 text-black text-center">
          🏆 Featured Sellers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 md:grid-cols-3 gap-6">
          {sellers.map((seller, idx) => (
            <div
              key={seller.id}
              data-aos={idx % 2 === 0 ? "flip-left" : "flip-right"}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={seller.image}
                alt={seller.name}
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-cover rounded-full mb-3 border-4 border-orange-400"
              />
              <h3 className="text-lg sm:text-xl md:text-xl font-bold text-green-700 mb-1">
                {seller.name}
              </h3>
              <p className="text-gray-600 mb-2">⭐ {seller.rating} / 5</p>
              <p className="text-gray-700 text-sm sm:text-base">
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
