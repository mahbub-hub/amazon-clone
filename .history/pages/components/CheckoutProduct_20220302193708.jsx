import { useState } from 'react';
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import Currency from 'react-currency-formatter';
import ReactStars from "react-rating-stars-component";

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime}) {
    const dispatch = useDispatch();
  const addItemToCart = () =>{
  const product = {
    id, title, price, description, category, rating, image, hasPrime
  };
  dispatch(addToCart(product))
  }
    const [Prime] = useState(rating > 3.5);
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={50} height={50} objectFit='contain' />

    <div className='col-span-3 mx-5'>
    <p>{title}</p>
    <div className="flex">
      <ReactStars 
      count={5}
      size={24}
      value={rating}
       />
      </div>
      <div className="mb-2">
        <Currency quantity={price} currency="USD" />
      </div>
       <p className="text-xs mb-5 line-clamp-2">{description}</p>
       {Prime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery </p>
          </div>
          )}
    </div> 
       {/* right add/remove button */}
       <div className='flex flex-col space-y-2 my-auto justify-self-end'>
       <button className='button' onClick={addItemToCart}>Add to Cart</button>
       <button className='button'>Remove from Cart</button>
       </div>
    </div>

  )
}

export default CheckoutProduct