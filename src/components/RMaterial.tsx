import React from "react";
import Link from "next/link";
import Image from "next/image";

const readingMaterials = [
    { title: "Noorani Qaida", imageUrl: "/about.png" },
    { title: "16 lines Quran", imageUrl: "/about.png" },
    { title: "15 lines Quran", imageUrl: "/about.png" },
    { title: "Kalima and Dua", imageUrl: "/about.png" },
    { title: "Quran Translation", imageUrl: "/about.png" },
];

const ReadingMaterial = () => {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl p-8 font-bold text-center">Learning material</h1>

                        <div className='items-center flex flex-col min-w-full'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-20">
                {readingMaterials.map((material, index) => (
                    <Link key={index} href="/" className="hover:translate-y-1 duration-200 hover:text-teal-500">
                                <div className="w-[200px] h-[200px] relative">
                                    <Image
                                        src={material.imageUrl}
                                        alt={material.title}
                                        fill
                                        className="rounded-full mb-2"
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

