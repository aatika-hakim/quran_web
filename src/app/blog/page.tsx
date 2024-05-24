import React from 'react'
import backgroundImageUrl from '@../../../public/bg2.jpg';
import Head from '@/components/Head';
import '@/app/globals.css'
import Blog from '@/components/blog';

const books = () => {
  return (
    <>
    <div className='h-[300vh] w-full overflow-hidden'>
            <div>
            <Head backgroundImage={backgroundImageUrl} heading='Read Books to know more' />
        </div>
        <Blog />
        </div>
        </>
  )
}

export default books