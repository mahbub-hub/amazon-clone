import Header from "./components/Header";
import Image from 'next/image';
function Checkout() {

  return (
    <div className="bg-gray-200">
     <Header />   
    <div className="md:flex max-w-screen-2xl mx-auto">
       {/* left */}
        <div>
    <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectfit="contain" />
        </div>
       {/* right */}
       <div>
    <h1>Your Shopping Cart</h1>
      </div>
    </div>    
    </div>
  )
}

export default Checkout