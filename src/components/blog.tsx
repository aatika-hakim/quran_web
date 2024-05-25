import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[80px] border-b-2 border-secondary border-gray-200">
        <div className="container">
        <h2 className="text-3xl text-gray-900 text-center pb-16">Recent News</h2>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <BlogCard
          image = "/images/bg2.jpg"
          date = "22 Dec 2024"
          CardTitle = "How to purify yourself as a Muslim?"
          CardDescription = "Purification is a fundamental aspect of a Muslim's life. In Islam, two primary methods of purification are Wudu (ablution) and Ghusl (full-body purification)."
          Button = "View Details"
          btnHref = "/blogDetaile"
          titleHref = "/blogDetaile"
          />


            <BlogCard
              image="/images/bg2.jpg"
              date = "22 Dec 2024"
              CardTitle="Tajweed Rules"
              CardDescription="Tajweed refers to the set of rules governing the pronunciation of the Quran.It helps us recite the Quran exactly as Prophet Muhammad (PBUH) did."
              Button="View Details"
            />
            <BlogCard
              image="/images/bg2.jpg"
              date = "22 Dec 2024"
              CardTitle="Quran Reading for Muslims"
              CardDescription="Reading the Quran is a profound spiritual practice for Muslims. It is not just about reading the words but understanding and implementing its teachings..."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;


const BlogCard = ({
    image,
    Button,
    CardDescription,
    CardTitle,
    titleHref,
    btnHref,
    date
  }:any) => {
    return (
      <>
        {/*  */}
        <div className="mb-10 overflow-hidden rounded-t-sm bg-white shadow-2xl duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 ">
          <Image src={image} alt="" className="w-full" width={200} height={150}/>
          <div className="p-8 sm:p-9 md:p-7 xl:p-9">
            <h5 className="mb-4 block text-xs text-dark hover:text-primary dark:text-white sm:text-base xl:text-sm">{date}</h5>
            <h3>
              <Link
                href={titleHref ? titleHref : "/blogDetaile"}
                className="mb-4 nowrap block text-smfont-semibold text-dark hover:text-primary dark:text-white sm:text-sm md:text-sm lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {CardTitle}
              </Link>
            </h3>
            <p className="mb-7 text-xs lg:text-base leading-relaxed text-gray-700 dark:text-dark-6">
              {CardDescription}
            </p>
  
            {Button && (
              <Link
                href={btnHref ? btnHref : "/blogDetaile"}
                className="inline-block border border-gray-3 px-7 py-2.5 transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6 text-white rounded-sm shadow-inner bg-[#008080] md:text-sm justify-center shrink-0 border-teal-700 duration-300 focus:outline-none active:text-teal-700"
              >
                {Button}
              </Link>
            )}
          </div>
        </div>
        {/*  */}
      </>
    );
  };

