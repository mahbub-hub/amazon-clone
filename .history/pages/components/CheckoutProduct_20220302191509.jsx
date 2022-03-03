import { useState } from 'react';
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import ReactStars from "react-rating-stars-component";

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime}) {
    const [Prime] = useState(rating > 3.5);
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={150} height={150} objectFit='contain' />

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
       <button>Add to Cart</button>
       <button>Remove from</button>
    </div>

  )
}

export default CheckoutProduct