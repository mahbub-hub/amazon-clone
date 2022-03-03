import Header from "./components/Header";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/cartSlice';

function Checkout() {
 const items = useSelector(selectItems);

  return (
    <div className="bg-gray-200">
     <Header />   
    <main className="mx-auto">
       {/* left */}
        <div className="flex-grow m-5 shadow-sm">
        <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectfit="cover" />
        </div>
       {/* right */}
       <div className="flex flex-col p-5 space-y-10 bg-white">
       <h1 className="text-2xl border-b pb-3">
         {items.length === 0 
         ? "Your cart is Empty"}
         Your Shopping Cart</h1>
      </div>
    </main>    
    </div>
  )
}

export default Checkout