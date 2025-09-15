import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, delateall, delateitem, increment } from "../redux/appSlice";
import { Link } from "react-router";

const Card = () => {
  const products = useSelector((state) => state.Shop.products);
  const dispatch = useDispatch();

  return (
<div className="container mx-auto px-3 p-4 pt-24 sm:pt-28 md:pt-14 lg:pt-10">
      {products.length > 0 ? (
        <div className=" relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
          {products.map((item) => (
<div
  key={item.id}
  className="bg-white shadow-md rounded-lg p-4 flex flex-col text-center h-full"
>
  <img
    src={item.img}
    alt={item.title}
    className="w-40 h-40 object-cover mx-auto mb-4"
  />
  <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
  <p className="text-gray-600 mb-1">{item.decs}</p>
  <p className="text-lg font-bold text-green-600 mb-3">${item.price}</p>

  <div className="flex items-center justify-center gap-2 mb-3">
    <button
      onClick={() => dispatch(increment(item.id))}
      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
    >
      +
    </button>
    <span className="text-md font-medium">
      {item.quantity * item.price}
    </span>
    <button
      onClick={() => dispatch(decrement(item.id))}
      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
    >
      -
    </button>
  </div>

  <div className="flex-grow" />

  <button
    onClick={() => dispatch(delateitem(item.id))}
    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-auto"
  >
    Delete Item
  </button>
</div>
          ))}

          <div className="col-span-full flex justify-center mt-8">
            <button
              onClick={() => dispatch(delateall())}
              className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded"
            >
              Clear All
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-16">
          <p className="text-xl font-semibold mb-4">No Products Available</p>
          <Link
            to="/"
            className="text-blue-600 hover:underline text-lg"
          >
            Go back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
