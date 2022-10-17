import Image from 'next/image'
import React, { useState } from 'react'
import {StarIcon} from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../pages/slices/basketSlice'


function Product({title, id, image, price, description, category }) {
const MAX_RATING = 5;
const MIN_RATING = 1;

const dispatch = useDispatch()

  const [rating] = useState(
  Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
 )

 const addToCart = () => {
  const product = {
    id,
    title,
    price,
    description,
    category,
    image,
    rating,
  };
  dispatch(addToBasket(product))
}

  return (
    <div className='bg-white z-30 relative flex flex-col m-5 p-10'>
      
      <p className='absolute top-0 right-0 mr-2 text-xs italic text-gray-400'>{category}</p>
      <Image src={image} 
      height={200}
      width={200}
      objectFit='contain'/>

        <h4 className='my-3'>{title}</h4>
     
        <p className='flex'>
        {Array(rating)
        .fill()
        .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500'/>
        ))
        }
      </p>

        <p className='text-xs line-clamp-2'>{description}</p>

      <div className='mb-5'>
        <p >R$: {price}</p>
      </div>

 
     

      <button onClick={addToCart} className='mt-auto button'>Add to Basket</button>
      
    </div>
  )
}

export default Product
