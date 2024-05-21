import React from "react";
import image from '../../public/bg2.jpg';

const Blog = () => {
    return (
        <>
            <section className="bg-white lg:pt-[120px] container mx-auto border-b-2 border-secondary border-gray-200 pb-20 pt-8">
                <div className="container">
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
                            CardTitle="How to Purify Yourself as a Muslim?"
                            CardDescription="Purification is a fundamental aspect of a Muslim's life. In Islam, two primary methods of purification are Wudu (ablution) and Ghusl (full-body purification)."
                            image={image}
                            buttonText="Read More"
                            buttonLink="/blogDetaile"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Tajweed Rules: Enhancing Your Quranic Recitation"
                            CardDescription="Tajweed refers to the set of rules governing the pronunciation of the Quran.It helps us recite the Quran exactly as Prophet Muhammad (PBUH) did."
                            image={image}
                            buttonText="Learn More"
                            buttonLink="/blogDetaile"
                        />
                        <BlogCard
                            date="Dec 22, 2023"
                            CardTitle="Quran Reading for Muslims: A Spiritual Journey"
                            CardDescription="Reading the Quran is a profound spiritual practice for Muslims. It is not just about reading the words but understanding, reflecting, and implementing its teachings..."
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

const BlogCard = ({ image, date, CardTitle, CardDescription, buttonLink }: any) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="max-w-xl shadow-2xl border border-teal-100 transition">
                    <div className="mb-2 overflow-hidden rounded-t-md">
                        <img width={200} 
                        src={image} alt="" className="w-full" />
                    </div>
                    <div className="py-2 px-4 text-base lg:text-xl">
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
                        <p className="inline-block text-xs hover:text-primary dark:text-white lg:text-sm">
                            {CardDescription}
                        </p>
                        {/* Button with different text for each card */}
                        <a href={buttonLink} className="block">
                            <button className="text-white rounded-sm shadow-inner bg-[#008080] text-xs md:text-sm px-6 py-2 justify-center inline-block shrink-0 border border-teal-700 transition-all duration-300 focus:outline-none active:text-teal-700 mt-5">
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

