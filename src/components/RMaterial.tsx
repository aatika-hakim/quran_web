import React from "react";
import Link from "next/link";
import Image from "next/image";

const readingMaterials = [
    { title: "Noorani Qaida", imageUrl: "/images/about.png" },
    { title: "16 lines Quran", imageUrl: "/images/about.png" },
    { title: "15 lines Quran", imageUrl: "/images/about.png" },
    { title: "Kalima and Dua", imageUrl: "/images/about.png" },
    { title: "Quran Translation", imageUrl: "/images/about.png" },
];

const ReadingMaterial = () => {
    return (
        <div className="container mx-auto py-10 border-b-2 border-secondary border-gray-200">
            <h1 className="text-3xl p-8 text-center">Learning material</h1>

                        <div className='items-center flex flex-col'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {readingMaterials.map((material, index) => (
                    <Link key={index} href="/" className="hover:translate-y-1 duration-200 hover:text-teal-500">
                                <div className="w-[200px] h-[200px] mb-4 relative">
                                    <Image
                                        src={material.imageUrl}
                                        alt={material.title}
                                        width={200}
                                        height={100}
                                        className="rounded-sm w-[200px] h-[200px] "
                                    />
                                </div>

                                <h3 className="mt-2 text-center">{material.title}</h3>
                    </Link>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ReadingMaterial;

