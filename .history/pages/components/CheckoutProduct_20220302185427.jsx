import Image from 'react/image'

function CheckoutProduct( { id, title, price, description, category, image, rating, hasPrime}) {
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width=={} />
    </div>
  )
}

export default CheckoutProduct