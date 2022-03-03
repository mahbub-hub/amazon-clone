import Image from 'next/image'
import Currency from 'react-currency-formatter';
import ReactStars from "react-rating-stars-component";

function CheckoutProduct({ id, title, price, description, category, image, rating, hasPrime}) {
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={200} height={200} objectFit='contain' />

    <div className='col-span-3 mx-5'>
    <p>{title}</p>
    <div className="flex">
      <ReactStars 
      count={5}
      size={24}
      value={rating.rate}
       />
      </div>
    </div>    
    </div>

  )
}

export default CheckoutProduct