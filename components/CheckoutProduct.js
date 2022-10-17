import { StarIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../pages/slices/basketSlice'

function CheckoutProduct({ id, title, price, rating, description, category, image, hasPrime,}) {
 const dispatch = useDispatch()

 const removeItemFromBaskt = () => {
    dispatch(removeFromBasket({ id }))
 }

 const addItemToBaskt = () => {
    const product = {
        id,
        title,
        price,
        image,
        rating,
        category,
        description,
    };
    dispatch(addToBasket(product))
 }
  
    return (
        <div className='grid grid-cols-5'>
          <Image src={image} height={200} width={200} objectFit='contain' />
       
        <div className='col-span-3 mx-5'>
        <p>{title}</p>
        
        <p className='flex'>
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon className='h-5 text-yellow-500'/>
            ))
            }
          </p>
    
        <p className=' text-black text-xs mt-2 mb-2 line-clamp-3'
        >{description}</p>
        
        <p>
        {price}
        </p>
        </div>
    
        <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBaskt} className='mt-auto button'
        >Add to Basket
        </button>
    
        <button onClick={removeItemFromBaskt} className='mt-auto button'
        >Remove from Basket</button>
    
        </div>
    
        </div>
      )
}

export default CheckoutProduct
