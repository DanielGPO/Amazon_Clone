import React from 'react'
import Image from 'next/image'
import {SearchIcon, MenuIcon, ShoppingCartIcon} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import { selectItems } from '../pages/slices/basketSlice'
import { useRouter } from 'next/router'
function Header() {
    const router = useRouter()
    const items = useSelector(selectItems) 

  return (
    <header className='flex flex-col'>
       <div className='bg-gray-800 top-0 items-center flex justify-around px px-4-2'>

        <div onClick={() => router.push('/')} className=' hover:cursor-pointer mt-5'>
            <Image src='https://links.papareact.com/f90'
            width={200}
            height={50}
            objectFit='contain'
            />
        </div>
        <div className='bg-yellow-400 hover:bg-yellow-500 hover:cursor-pointer rounded-l-xl items-center hidden md:flex  w-full h-10'>
            <input className='h-full px-2 flex-grow flex-shrink rounded-l-xl outline-none'
            type="text" />
            <SearchIcon className='px-2 bg-transparent h-8 text-black'/>
        </div>
        
        <div className='flex text-white items-center'>
            
            <div className=' hover:underline hover:cursor-pointer flex flex-col items-center space-x-6 mx-6 whitespace-nowrap '>
                <p>Olá, faça seu login</p>
                <p className='font-semibold'>Conta e Listas</p>
            </div>

            <div className=' hover:underline hover:cursor-pointer flex flex-col px-4'>
                <p>Devoluções</p>
                <p className='font-semibold'>e Pedidos</p>
            </div>

            <div onClick={() => router.push('/checkout')} className='relative hover:underline hover:cursor-pointer flex flex-col px-4'>
                <span className='absolute text-black top-0 right-6 px-1 items-center bg-yellow-400 rounded-full'>{items.length}</span>
                <ShoppingCartIcon className='h-10'/>
                <p className='font-semibold'>Carrinho</p>
            </div>
        </div>
       </div>


        <div className='text-white bg-gray-900  flex-row hidden md:flex  md:py-2'>
           
            <div className='flex   hover:border border hover:border-white border-transparent hover:cursor-pointer'>
                <MenuIcon className='h-8'/>
                <p className='text-semi-bold '>Todos</p>
            </div>
            
            <p className='mx-2 hover:border border hover:border-white border-transparent items-center hover:cursor-pointer'>Mais vendidos</p>
            <p className='mx-2 hover:border border hover:border-white border-transparent items-center hover:cursor-pointer'>Ofertas do dia</p>
            <p className='mx-2 hover:border border hover:border-white border-transparent items-center hover:cursor-pointer'>Atendimento ao Cliente</p>
            <p className='mx-2 hover:border border hover:border-white border-transparent items-center hover:cursor-pointer'>Prime</p>
            <p className='mx-2 hover:border border hover:border-white border-transparent items-center hover:cursor-pointer'>Musica</p>
            <p className='mx-2 hover:border border hover:border-white border-transparent items-center hover:cursor-pointer'>Livros</p>
            <p className=' hidden xl:inline-block text-2xl font-bold ml-[290px]'>Confira os E-readers Kindle</p>
        </div>
      
    </header>
  )
}

export default Header
