import React from 'react';
import { FaClock } from 'react-icons/fa';

function Card({ icon, title, description }:any) {
  return (
    <div className="flex gap-4">
      <div className='justify-center text-center'>
        <span className="flex shrink-0 mb-4 justify-center rounded-full">
          {icon}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm lg:text-lg text-gray-700">{description}</p>
      </div>
    </div>
  );
}

function Section() {
  const cards = [
    {
      icon: <FaClock className='w-12 h-12' />,
      title: "Support",
      description: "Reach out to our support team anytime for help with your inquiries."
    },
    {
      icon: <FaClock className='w-12 h-12' />,
      title: "Diverse Tutoring Options",
      description: "Highly qualified tutors, including females for teaching children and women."
    },
    {
      icon: <FaClock className='w-12 h-12' />,
      title: "Flexible Scheduling",
      description: "Select class timings that fit your, your child's, or your work schedules best."
    },
    {
      icon: <FaClock className='w-12 h-12' />,
      title: "Budget-Friendly and Easy",
      description: "Cost-effective plans with family discounts available, making learning convenient and affordable."
    }
  ];

  return (
    <section className="container mx-auto border-b-2 border-secondary border-gray-200 py-10 lg:py-16">
      <h2 className="text-4xl text-center">What makes us special</h2>
      <div className="mt-8 grid smid-cols-1 gap-8 md:mt-16 md:gsmd-cols-2 md:gap-12 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Section;
