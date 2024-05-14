import Image from "next/image";
import React from "react";
import Buttons from "./Button";

const AboutSec = () => {
    return (
            <div className="mx-auto max-w-screen-2xl px-4 py-10 sm:py-8 lg:px-8 lg:py-16">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Lorem ipsum, dolor sit amet
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <Image alt="about" src="/bg2.jpg" className="absolute inset-0 h-full w-full object-cover" width={696} height={378} />
                    </div>

                    <div className="lg:py-4">
                        <article className="space-y-6 text-gray-600">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae
                                eius quidem quam repellat.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem
                                voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa
                                dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates
                                aliquid, ducimus tempore incidunt quas. Veritatis molestias tempora distinctio
                                voluptates sint! Itaque quasi corrupti, sequi quo odit illum impedit!
                            </p>
                            <Buttons text="Read More" properties="" links="/about" />
                        </article>
                    </div>
                </div>
            </div>
    );
};

export default AboutSec;
