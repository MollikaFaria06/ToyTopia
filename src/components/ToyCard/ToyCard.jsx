import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;

  return (
    <div className="card bg-base-500 rounded-lg shadow-xl hover:shadow-2xl transition-all flex flex-col items-center">
      <figure className="bg-white p-4 w-full flex justify-center">
        <img
          src={pictureURL}
          alt={toyName}
          className="h-48 w-full object-contain"
        />
      </figure>

      <div className="card-body w-full bg-amber-200 flex flex-col items-center text-center">
        <h3 className="card-title text-2xl font-bold text-orange-600">{toyName}</h3>
        <p className="text-sm text-gray-900">💰 Price: ${price}</p>
        <p className="text-sm text-gray-900">⭐ Rating: {rating}</p>
        <p className="text-sm text-gray-900">Available: {availableQuantity}</p>

        <div className="card-actions justify-center mt-3">
          <Link to={`/toy/${toyId}`}>
            <button className="btn btn-primary btn-sm">View More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
