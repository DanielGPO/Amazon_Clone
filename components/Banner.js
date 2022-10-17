import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Banner() {
  return (
    <main className='relative'>
        <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
        <div>
            <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >
                <div>
                    <img loading='lazy' src='https://m.media-amazon.com/images/I/71aAUH97PPL._SX3000_.jpg' />
                </div>

                <div>
                    <img loading='lazy' src='https://m.media-amazon.com/images/I/71jgmKE3vLL._SX3000_.jpg' />
                </div>

                <div>
                    <img loading='lazy' src='https://m.media-amazon.com/images/I/81vQBfpSh0L._SX3000_.png' />
                </div>
            </Carousel>
        </div>
      
    </main>
  )
}

export default Banner
