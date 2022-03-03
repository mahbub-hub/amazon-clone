import Header from "./components/Header";
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSession} from "next-auth/react"
import { selectItems } from '../slices/cartSlice';
import CheckoutProduct from "./components/CheckoutProduct";
import Currency from "react-currency-formatter";

function Checkout() {
  const {data: session} = useSession();
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
             <Currency quantity={selectTotal} currency="USD" />

           </span>
           </h2>

           <button className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allow'}`}>
             {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>

           </>

         )}
       </div>
    </main>    
    </div>
  )
}

export default Checkout