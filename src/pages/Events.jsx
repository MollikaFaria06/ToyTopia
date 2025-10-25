import React, { useEffect } from "react";

export default function Events() {
  useEffect(() => {
    document.title = "ToyTopia | Events";
  }, []);

  return (
    <div className="p-10 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        🎪 ToyTopia Events
      </h1>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
        Discover exciting events and creative workshops for kids across Bangladesh!  
        From toy fairs to learning sessions — ToyTopia brings fun for every little explorer. 🌈
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-600 mb-2">
            Dhaka Kids Toy Fair 2025
          </h3>
          <p className="text-gray-600 mb-1">📅 December 10, 2025</p>
          <p className="text-gray-600 mb-3">📍 Bangabandhu International Center, Dhaka</p>
          <p className="text-gray-700">
            A grand celebration of toys, fun, and creativity! Meet top sellers, 
            discover new educational toys, and enjoy games and shows for all ages.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-orange-600 mb-2">
            Creative Toy Workshop
          </h3>
          <p className="text-gray-600 mb-1">📅 November 15, 2025</p>
          <p className="text-gray-600 mb-3">📍 ToyTopia HQ, Lalbagh</p>
          <p className="text-gray-700">
            A hands-on workshop where kids can design, color, and craft their own toys.  
            Perfect for boosting creativity and learning through play!
          </p>
        </div>
      </div>
    </div>
  );
}
