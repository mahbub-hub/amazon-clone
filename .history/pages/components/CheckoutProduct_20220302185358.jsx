import <Image></Image> from 'react/image'

function CheckoutProduct( { id, title, price, description, category, image, rating, hasPrime}) {
  return (
    <div className='grid grid-cols-5'>
        <Image />
    </div>
  )
}

export default CheckoutProduct