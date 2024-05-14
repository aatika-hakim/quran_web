import React from 'react';
import Card from './Card';

const cardsData = [
    {
        title: "Noorani Qaida Course",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s."
    },
    {
        title: "Quran Reading Course",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s."
    },
    {
        title: "Quran Translation Course",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s."
    },
    {
        title: "Quran Memorization Course",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s."
    },
    {
        title: "Tajweed Course",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s."
    },
    {
        title: "Islamic Studies Course",
        text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s."
    }
];
const CourseSec = () => {

    return (
        <section className="">
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
