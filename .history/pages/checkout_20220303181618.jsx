import Header from "./components/Header";
import { useSelector } from 'react-redux';
import { useSession} from "next-auth/react"
import { selectItems, selectTotal } from '../slices/cartSlice';
import CheckoutProduct from "./components/CheckoutProduct";
import Currency from "react-currency-formatter";

function Checkout() {
  const {data: session} = useSession();
 const items = useSelector(selectItems);
 const total = useSelector(selectTotal); 

  return (
    <div className="bg-gray-200">
     <Header />   
    <main className="lg:flex max-w-screen-2xl mx-auto">
       {/* left */}
        <div className="flex-grow m-3 shadow-sm">
            
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
       <div className="flex flex-col bg-white m- p-10 shadow-md">
         {items.length > 0 && (
           <>
           <h2 className="whitespace-nowrap">Subtotal ({items.length} items): {" "} 
           <span className="font-bold">
             <Currency quantity={total} currency="USD" />

           </span>
           </h2>

           <button className={`button mt-5 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
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