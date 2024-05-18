import Image from "next/image";
import React from "react";
import image from '../../public/bg2.jpg';

const Blog = () => {
    return (
        <>
            <section className="container mx-auto px-8 py-8 lg:py-10">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] text-center lg:mb-20">
                            <h2 className="mb-4 text-3xl sm:text-4xl md:text-[40px]">
                                Recent News
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-y-4">
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image={image}
                            buttonText="Read More"
                            buttonLink="/blogDetaile"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image={image}
                            buttonText="Learn More"
                            buttonLink="/blogDetaile"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Meet AutoManage, the best AI management tools"
                            CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            image={image}
                            buttonText="Explore"
                            buttonLink="/blogDetaile"
                        />


                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription, buttonText, buttonLink }: any) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="max-w-xl shadow-xl">
                    <div className="mb-2 overflow-hidden rounded-t-md">
                        <Image height={200} width={200} src={image} alt="" className="w-full" />
                    </div>
                    <div className="p-2 text-base lg:text-xl">
                        {date && (
                            <span className="mb-3 inline-block rounded bg-primary py-1 text-center text-xs font-light leading-loose dark:text-white">
                                {date}
                            </span>
                        )}
                        <h3>
                            <a
                                href="/#"
                                className="mb-4 inline-block text-lg font-semibold text-dark hover:text-primary dark:text-white sm:text-lg lg:text-xl xl:text-2xl"
                            >
                                {CardTitle}
                            </a>
                        </h3>
                        <p className="inline-block text-sm hover:text-primary dark:text-white lg:text-lg">
                            {CardDescription}
                        </p>
                        {/* Button with different text for each card */}
                        <a href={buttonLink} className="block">
                            <button className="text-white rounded-sm shadow-inner bg-[#008080] text-xs md:text-sm px-9 py-2.5 justify-center inline-block shrink-0 border border-teal-700 transition-all duration-300 focus:outline-none active:text-teal-700 mt-5">
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

