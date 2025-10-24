import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ToyCard from "../components/ToyCard/ToyCard";
import toyBanner from "../assets/toyBanner.jpg"

export default function Home() {
  useEffect(() => { document.title = "ToyTopia | Home"; }, []);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((r) => r.json())
      .then(setToys)
      .catch((err) => console.error(err));
  }, []);

  const popular = toys.slice(0, 6);

  return (
    <div>
      <section className="mb-8">
        <Swiper slidesPerView={1} loop>
          <SwiperSlide>
            <div className="bg-yellow-300 rounded p-10 flex  items-center justify-between gap-6">
              <div>
                <h1 className="text-5xl text-green-700  font-bold">Play, Learn, and Grow with <strong className="text-blue-900">ToyTopia!</strong></h1>
                <p className="mt-4  text-green-700 font-semibold">Support local sellers & find safe toys.</p>
                <Link to="/" className="btn py-6 px-8 mt-4 bg-orange-500 text-white text-lg">Explore Toys</Link>
              </div>
              <img src={toyBanner} alt="kid" className="w-200 h-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-200 rounded p-10">
              <h2 className="text-3xl font-bold">Local sellers, trusted toys</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-pink-200 rounded p-10">
              <h2 className="text-3xl font-bold">New Arrivals — Check them out!</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Toys</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popular.map((toy) => <ToyCard key={toy.toyId} toy={toy} />)}
        </div>
      </section>
    </div>
  );
}
