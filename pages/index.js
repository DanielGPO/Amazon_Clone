import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import ProductsFeed from '../components/ProductsFeed';

export default function Home({ products }) {

  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Amazon</title>
      </Head>

      <Header/>

    <main className='mx-auto max-w-screen-xl'>
    <Banner/>
    <ProductsFeed products={products}/>
    </main>

    </div>
  )
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  
  return { 
    props: {
    products: products,
  },
};
}
