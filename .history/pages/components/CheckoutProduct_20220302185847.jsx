import Image from 'next/image'

function CheckoutProduct( { id, title, price, description, category, image, rating, hasPrime}) {
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={200} height={200} objectFit='contain' />

    <div className='col-span-3 mx'>
    
    </div>    
    </div>

  )
}

export default CheckoutProduct