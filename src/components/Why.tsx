import Image from "next/image";
import React from "react";
import Buttons from "./Button";

const Why = () => {
    return (
        <section className="">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl text-gray-900">Why Choose Us?</h2>
                <p className="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                    eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                    Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                    malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                <div className="mt-8">
                    <Buttons text="Learn More" properties="justify-center" links="/about" />
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image
                            src="/bg2.jpg"
                            objectFit="cover"
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
