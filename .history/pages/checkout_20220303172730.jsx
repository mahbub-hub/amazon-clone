import Header from "./components/Header";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/cartSlice';
import CheckoutProduct from "./components/CheckoutProduct";
import Currency from "react-currency-formatter";

function Checkout() {
 const items = useSelector(selectItems);

  return (
    <div className="bg-gray-200">
     <Header />   
    <main className="mx-auto">
       {/* left */}
        <div className="flex-grow m-5 shadow-sm">
        <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectfit="cover" />
        
       <div className="flex flex-col p-5 space-y-10 bg-white">
       <h1 className="text-2xl border-b pb-3">
         {items.length === 0 
         ? "Your cart is Empty"
        : "Shopping Cart"}
         </h1>

         {items.map((item, i) => (
           <CheckoutProduct
           key={i}
           id={item.id}
           title={item.title}
           rating={item.rating}
           price={item.price}
           description={item.description}
           category={item.category}
           image={item.image}
           hasPrime={item.hasPrime}
           
           />
         ))
         }
      </div>
      </div>
       {/* right */}
       <div>
         {items.length > 0 && (
           <>
           <h2 className="whitespace-nowrap">Subtotal ({items.length} items): 
           <span className="font-bold">
             <Currency quantity={selectTotal} currency="U" />

           </span>


           </h2>
           </>

         )}
       </div>
    </main>    
    </div>
  )
}

export default Checkout