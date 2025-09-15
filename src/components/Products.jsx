import React from 'react';
import { RxStarFilled } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { addToCart } from '../redux/AppSlice';

const Products = () => {
  const data = useLoaderData();
  const products = data.data;

  const dispatch = useDispatch()

  return (
    <div className="container mx-auto px-3 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
<div
  key={item.id}
  className="border rounded-lg shadow-md p-4 flex flex-col bg-white hover:shadow-2xl transition duration-500 h-full"
>
  <p className="text-sm text-[#333] font-medium mb-2 text-end">{item.category}</p>

  <img
    src={item.image}
    alt={item.title}
    className="w-40 h-40 object-contain mb-4 mx-auto"
  />

  <div className="text-center mb-2">
    <h2 className="text-md font-semibold text-gray-800 mb-1 line-clamp-2">{item.title}</h2>
    <p className="text-green-600 font-bold text-lg">${item.price}</p>
  </div>

  <p className="text-gray-600 text-sm mb-3 line-clamp-3 text-center">{item.description}</p>

  <div className="flex items-center justify-center mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <RxStarFilled
        key={i}
        className={`w-5 h-5 ${
          i < Math.round(item.rating?.rate || 0)
            ? 'text-yellow-600'
            : 'text-gray-300'
        }`}
      />
    ))}
    <span className="text-sm text-gray-500 ml-2">({item.rating?.count || 0})</span>
  </div>

  <div className="flex-grow"></div>

  <button
  onClick={() => dispatch( addToCart ({
    id : item.id ,
    title : item.title ,
    decs : item.description ,
    img : item.image ,
    category : item.category ,
    price : item.price,
    quantity : 1
  }))}
  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded transition duration-500 mt-2">
    Add to Card
  </button>
</div>
      ))}
    </div>
  );
};

export default Products;
