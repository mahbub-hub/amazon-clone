import Head from 'next/head'
import Header from './components/Header'
import Banner from './components/Banner';
import ProductFeed from './components/ProductFeed';
import Footer from './components/Footer';

const Home = ({ products }) => {
  return (
    <div className='bg-gray-200'>
      <Head>
        <title>Amazon Clone 2.0</title>
      </Head>
     {/* header goes here */}
     <Header />
   
      {/* product feed */}
     <main className="mx-auto">
      {/* banner goes here */}
      <Banner />
      <ProductFeed products={products} />
     </main>
     <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {products}
  }
}