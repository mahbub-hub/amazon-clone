import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import ReactStars from 'react-rating-stars-component';

function Product({ id, title, price, description, category, rating, image }) {
  const dispatch = useDispatch();

  const [hasPrime] = useState(rating.rate > 3.5);
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      rating,
      image,
    };
    dispatch(addToCart(product));
  };
  return (
    <div
      className="relative z-30 m-5 flex flex-col rounded-md bg-white p-5"
      key={id}
    >
      <p className="absolute top-2 right-3 text-xs italic text-gray-400">
        {category}
      </p>

      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        <ReactStars count={5} size={24} value={rating.rate} />
      </div>

      <p className="my-2 text-xs line-clamp-2">{description}</p>

      <div className="mb-5">
      <p>
            <strong>${price} </strong>
          </p>
      </div>
      {hasPrime && (
        <div className="-mt-5 flex items-center space-x-2">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs">FREE Next-day Delivery </p>
        </div>
      )}
      <button onClick={addItemToCart} className="button mt-auto">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
