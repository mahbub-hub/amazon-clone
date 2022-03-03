import Image from 'next/image'
import {MenuIcon, SearchIcon, ShoppingCartIcon} 
from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import Google from 'next-auth/providers/google'

function Header() {
  const [session] = useSession();

  return (
   
    <header>
<div className='flex items-center, bg-[#131921] p-1, flex-grow py-2'>
<div className='mt-2 pr-10 flex items-center, flex-grow sm:flex-grow-0'>
<Image 
src='https://links.papareact.com/f90'
width={150}
height={40}
objectFit="contain"
className='cursor-pointer'
/>
</div>
{/* search */}
<div className=' hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-600'>
<input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-2' type="text" />
<SearchIcon className='h-12 p-4' />
</div>
{/* right nav */}
<div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
  <div onClick={signIn} className='cursor-pointer link'>
<p> 
  { session ? `Hello, ${session.user.name}`} 
</p>
<p className='font-extrabold md:text-sm'>Account & Lists</p>
  </div>
<div className='cursor-pointer link'>  
  <p>Return</p>
  <p className='font-extrabold md:text-sm'>& Orders</p>
  </div>
  <div className='relative link flex items-center'>
    <span className='absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-extrabold'>0</span>
<ShoppingCartIcon className='h-10' />
<p className='hidden md:inline font-extrabold md:text-sm mt-3'>Cart</p>
  </div>
  </div>
</div>
{/* botton nav */}
<div className='flex items-center space-x-3 p-2 pl-6 bg-slate-800 text-white'>
<p className='link flex items-center'>
<MenuIcon className='w-6 mr-2' />All </p>
<p className='link'>Prime video</p>
<p className='link '>Business</p>
<p className='link '>Today's Deals</p>
<p className='link hidden lg:inline-flex'>Electronics</p>
<p className='link hidden lg:inline-flex'>Prime</p>
<p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
<p className='link hidden lg:inline-flex'>Health & Personal Care</p>
</div>

</header>
    
  )}

export default Header