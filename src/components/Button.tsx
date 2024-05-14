import React from "react";
import Link from "next/link";

interface ButtonsProps {
    properties: string;
    text: string;
    links: string;
    type?: string;
}

const Buttons: React.FC<ButtonsProps> = ({ type, text, links, properties }) => {

    const classNames = `text-white rounded-sm shadow-inner bg-[#008080] text-xs md:text-sm px-9 py-2.5 justify-center inline-block shrink-0 border border-teal-700 transition-all duration-300 focus:outline-none focus:ring active:text-teal-700 ${properties}`;

    return (
        <button className={classNames}>
            <Link href={links} type={type} className={properties}>{text}</Link>
        </button>
    );
};

export default Buttons;
