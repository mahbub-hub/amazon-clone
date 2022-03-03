import Image from "next/image"
import { useState } from "react";
import {useRe}
import Currency from 'react-currency-formatter';
import ReactStars from "react-rating-stars-component";


function Product({ id, title, price, description, category, rating, image}) {

  const [hasPrime] = useState(rating.rate > 3.5);
  const addItemToCart = () =>{

  }
  return (
    <div className="relative flex flex-col m-5 bg-white p-5 z-30 rounded-md"key={id}>
      <p className="absolute top-2 right-3 text-xs italic text-gray-400">{category}</p>
      
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
      <ReactStars 
      count={5}
      size={24}
      value={rating.rate}
       />
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className="text-xs">FREE Next-day Delivery </p>
          </div>
          )}
      <button onClick={addItemToCart} className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product