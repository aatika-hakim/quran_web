import React from 'react';
import Card from './Card';

const cardsData = [
    {
        title: "Noorani Qaida Course",
        text: "Learn the basics of reading the Quran with our Noorani Qaida Course. Start with the alphabet and move step by step to reading sentences. Our teachers will guide you through each stage."
    },
    {
        title: "Quran Reading Course",
        text: "Join our Quran Reading Course to understand the Quran better. We'll help you learn what each verse means and how to read them properly. Our classes are fun and easy to follow."
    },
    {
        title: "Quran Translation Course",
        text: "Discover the meaning of the Quran with our Translation Course. We'll explain the verses in simple language so you can understand them easily. Our teachers are here to help you every step of the way."
    },
    {
        title: "Quran Hifz Course",
        text: "Memorize the Quran with our Hifz Course. Our teachers will help you learn by heart, so you can recite it anytime, anywhere. With our support, you'll achieve your goal of memorizing the Quran."
    },
    {
        title: "Tajweed Course",
        text: "Improve your Quran recitation with our Tajweed Course. Learn how to pronounce the words correctly and make your recitation beautiful and correct. Our teachers will guide you patiently."
    },
    {
        title: "Islamic Studies Course",
        text: "Explore Islam with our Islamic Studies Course. Learn about its history, beliefs, and practices in simple terms. Our course covers everything you need to know about Islam."
    }
];

const CourseSec = () => {

    return (
        <section className="container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-4">
  <div className="mx-auto max-w-screen-2xl py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl sm:text-4xl">Our Courses</h2>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {cardsData.map((card, index) => (
                        <Card key={index} title={card.title} text={card.text} />
                    ))}
    </div>
    </div>
    </section>
    );
};

export default CourseSec;
