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
import AboutSection from "@/components/AboutSec"

const SectionWrapper = ({ children }:any) => (
  <div className="container mx-auto border-b-2 border-gray-200 py-8">
    {children}
  </div>
);

export default function Home() {
  return (
    <main className="main h-fit min-w-full">
      <Hero />
      <div>
        <SectionWrapper>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper>
          <CourseSec />
        </SectionWrapper>
        <SectionWrapper>
          <ReadingMaterial />
        </SectionWrapper>
        <SectionWrapper>
          <Why />
        </SectionWrapper>
        <SectionWrapper>
          <FAQsPage />
        </SectionWrapper>
        <div className="container mx-auto pt-4">
          <Section />
        </div>
        <SectionWrapper>
          <Blog />
        </SectionWrapper>
        <FormSec />
      </div>
    </main>
  );
}