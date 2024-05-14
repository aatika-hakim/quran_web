import React from 'react'
import Topbar from '@/components/Topbar'
import backgroundImageUrl from '../../../public/bg2.jpg';
import Footer from '@/components/Footer';
import Head from '@/components/Head';
import '@/app/globals.css'
import Blog from '@/components/blog';

const books = () => {
  return (
    <>
    <div className='h-[300vh] w-full overflow-hidden'>
            <div>
            <Head backgroundImage={backgroundImageUrl} heading='Read Books to know more About Islam' />
        </div>
        <Blog />
        </div>
        </>
  )
}

export default books