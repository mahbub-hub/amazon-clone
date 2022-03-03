import { useState } from 'react';
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import ReactStars from "react-rating-stars-component";

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime}) {
    const [Prime] = useState(rating > 3.5);
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={200} height={200} objectFit='contain' />

    <div className='col-span-3 mx-5'>
    <p>{title}</p>
    <div className="flex">
      <ReactStars 
      count={5}
      size={24}
      value={rating}
       />
      </div>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
  
          <p className="text-xs my-2 line-clamp-2">{description}</p>
    </div>    
    </div>

  )
}

export default CheckoutProduct