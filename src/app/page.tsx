'use client'

import AboutSec from "@/components/AboutSec"
import CourseSec from "@/components/CourseSec"
import FormSec from "@/components/FormSec"
import Hero from "@/components/Hero"
import ReadingMaterial from "@/components/RMaterial"
import Why from "@/components/Why"
import Blog from "@/components/blog"
import FAQsPage from "@/components/FAQ"

export default function Home() {
  return (
    <>    
    <main className='main h-fit'>
      <Hero />
      <div className=''>
        <div className='container mx-auto border-b-2 border-secondary border-gray-200 py-8'>
        <AboutSec />
        </div>
        <div className='container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-4'>
        <CourseSec />
        </div>
        <div className='container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-4'>
        <ReadingMaterial />
        </div>
        <div className='container mx-auto border-b-2 border-secondary border-gray-200 py-12'>
        <Why />
        </div>
        <div className='container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-4'>
        <FAQsPage />
        </div>
        <div className='container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-4'>
        <Blog />
        </div>
      <FormSec />
      </div>
    </main>
    </>
  )
}
