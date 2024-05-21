'use client'
import AboutSec from "@/components/AboutSec"
import CourseSec from "@/components/CourseSec"
import FormSec from "@/components/FormSec"
import Hero from "@/components/Hero"
import ReadingMaterial from "@/components/RMaterial"
import Why from "@/components/Why"
import Blog from "@/components/blog"
import FAQsPage from "@/components/FAQ"
import Section from "@/components/Section"

export default function Home() {
  return (
    <>    
    <main className='main h-fit min-w-full'>
      <Hero />
        <AboutSec />
        <CourseSec />
        <ReadingMaterial />
        <Why />
        <FAQsPage />
        <Section/>
        <Blog />
      <FormSec />
    </main>
    </>
  )
}