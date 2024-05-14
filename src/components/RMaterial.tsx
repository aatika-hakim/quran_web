import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FcRight } from "react-icons/fc";

const readingMaterials = [
    { title: "Noorani Qaida", imageUrl: "/bg2.jpg" },
    { title: "15 lines Quran", imageUrl: "/bg2.jpg" },
    { title: "16 lines Quran", imageUrl: "/bg2.jpg" },
    { title: "Kalima and Dua", imageUrl: "/bg2.jpg" },
    { title: "Quran Translation", imageUrl: "/bg2.jpg" },
];

const ReadingMaterial = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl p-8 font-bold text-center">Reading material</h1>

                        <div className='items-center flex flex-col min-w-full'>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {readingMaterials.map((material, index) => (
                    <Link key={index} href="/">
                                <div className="w-[220px] h-[200px] relative">
                                    <Image
                                        src={material.imageUrl}
                                        alt={material.title}
                                        fill
                                        className="rounded-sm"
                                    />
                                </div>

                                <h3 className="mt-2 text-center">{material.title}</h3>
                    </Link>
                ))}
                <FcRight className="rounded-full bg-teal-600 w-20 h-20 p-2 text-gray-100"/>
            </div>
        </div>
        </div>
    );
};

export default ReadingMaterial;

