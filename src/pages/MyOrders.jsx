import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import AOS from "aos";
import "aos/dist/aos.css";

export default function MyOrders() {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (user?.email) {
      setOrders(storedOrders.filter((o) => o.userEmail === user.email));
    }
  }, [user]);

  if (!user) return null;

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-yellow-200 rounded shadow"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-blue-800 mb-6 text-center"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        My Orders
      </h2>
      {orders.length === 0 ? (
        <p className="text-gray-700 text-center" data-aos="fade-in" data-aos-delay="200">
          You have no orders yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {orders.map((order, idx) => (
            <li
              key={order.id}
              className="p-4 border border-gray-600 rounded flex justify-between items-center"
              data-aos="fade-right"
              data-aos-delay={100 + idx * 80} 
            >
              <div>
                <p className="font-semibold text-orange-400">{order.toyName}</p>
                <p className="text-green-600">Quantity: {order.quantity}</p>
              </div>
              <p className="font-bold text-green-700">${order.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
