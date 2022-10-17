import React from 'react'
import  Header from '../components/Header'
import Image from 'next/image'
import { useSelector} from 'react-redux'
import { selectItems, selectTotal} from './slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'


function checkout() {
const items = useSelector(selectItems)
const total = useSelector(selectTotal)


  return (
    <div className='bg-gray-100'>
     <Header/>
     
     <main className='lg:flex max-w-screen-xl mx-auto'>
    <div className='flex-row mr-5 shadow-sm'>
        <Image src='https://links.papareact.com/ikj'
            objectFit='contain'
            width={1020}
            height={250} 
            />
            <div className='flex flex-col p-5 space-y-10 bg-white'>
                <p className='text-3xl border-b pb-4'>
                { items.length === 0 ? "Your Shopping Basket is empty" : "Shopping Basket" }
                </p>
            {items.map((item, i) => (
                <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                category={item.category}
                image={item.image}
                description={item.description}
                
                />
            ))}
            </div>
    </div>
    <div className={items.length === 0 ? 'hidden' :'flex flex-col bg-white p-10 shadow-md'}>
          {items.length > 0 && (
            <>
            <h2 className='whitespace-nowrap'>Subtotal ({items.length} items):{" "}
            <span className='font-bold'>
            {total}
            </span>
            </h2>
            <button
            role='link' className='button mt-2'>
              Proceed To Checkout
            </button>
            </>
          )}
        </div>
     </main>
      
    </div>
  )
}

export default checkout
