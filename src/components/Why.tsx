import Image from "next/image";
import React from "react";
import Buttons from "./Button";

const Why = () => {
    return (
        <section className="">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-secondary border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl text-gray-900">Why Choose Us?</h2>
                <p className="mt-4 text-gray-600 text-lg">Choose Salwa Quran Academy for expert guidance, flexible learning, and a supportive community. Our experienced teachers make learning engaging and easy. With comprehensive courses and personalized plans, we help you grow spiritually and intellectually. Join us to start your Quranic journey today.</p>
                <div className="mt-8">
                    <Buttons text="Join Now" properties="justify-center" links="/contact" />
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img
                            src="/bg2.jpg"
                            height={378}
                            width={640}
                            alt="Why choose us?"
                            className="object-cover shadow-md"
                        />
            </div>
        </div>
    </div>
</section>
    );
};

export default Why;
