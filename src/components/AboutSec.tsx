import React from "react";
import Button from "./Button";
import Image from 'next/image'

const AboutSection = () => {
    return (
        <section>
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-secondary border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="mt-12 md:mt-0">
                        <Image
                            src='/bg2.jpg'
                            height={378}
                            objectFit="cover"
                            width={640}
                            alt="about"
                            className="object-cover shadow-md"
                        />
                    </div>
                    <div className="max-w-lg">
                        <h2 className="text-3xl text-gray-900">Know about us</h2>
                        <p className="mt-4 text-gray-600">
                        At Salwa Quran Academy, we are committed to providing a nurturing environment for individuals of all ages to learn and understand the teachings of the Holy Quran. With a team of experienced scholars and educators, we offer structured courses tailored to meet the needs of beginners and advanced learners alike. Our mission is to foster a love for the Quran and empower our students to lead lives guided by its timeless wisdom.
                        
                        </p>
                        <div className="mt-8">
                            <Button text="Learn More" properties="justify-center" links="/about" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
