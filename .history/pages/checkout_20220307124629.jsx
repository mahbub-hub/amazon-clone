import Header from './components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { selectItems, selectTotal } from '../slices/cartSlice';
import CheckoutProduct from './components/CheckoutProduct';
import Currency from 'react-currency-formatter';

function Checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div className="bg-gray-200">
      <Header />
      <main className="mx-auto max-w-screen-2xl lg:flex">
        {/* left */}
        <div className="m-5 flex-grow shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectfit="contain"
          />

          <div className="flex flex-col space-y-10 bg-white p-5">
            <h1 className="border-b pb-3 text-2xl">
              {items.length === 0 ? 'Your cart is Empty' : 'Shopping Cart'}
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
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{' '}
                <span className="font-bold">
                  <p>
                    <strong>${price} </strong>
                  </p>
                </span>
              </h2>

              <button
                className={`button mt-5 ${
                  !session &&
                  'cursor-not-allowed border-gray-200 from-gray-300 to-gray-500 text-gray-300'
                }`}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
