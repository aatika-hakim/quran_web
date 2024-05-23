import Image from "next/image";
import React from "react";
import '../../app/globals.css'
interface CardProps {
    title: string;
    text: string;
}

const ImageCards: React.FC<CardProps> = ({ title, text }) => {
    return (
        <div className="p-4 h-[300px] overflow-hidden">
            <div className="flex flex-col bg-white border border-gray-200 rounded-sm shadow md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className="w-1/3">
                    <Image className="object-cover w-full h-full rounded-sm sm:rounded-none md:rounded-sm" src="/bg2.jpg" alt="" width={200} height={200} />
                </div>
                <div className="w-1/2">
                    <div className="flex flex-col px-8 py-2 h-[300px] w-full">
                        <h5 className="mb-2 text-2xl font-bold text-gray-900">{title}</h5>
                        <p className="mb-3 font-normal text-gray-700">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCards;