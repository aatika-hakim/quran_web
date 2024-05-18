import React from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaSkype,
    FaTwitter,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Nav from "./Nav";

const Topbar: React.FC = () => (
        <div className="w-full text-center items-center">
            <div className="bg-slate-800 text-white py-[5px]">
                <div className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-20">
                    <div className="space-x-6 flex flex-wrap sm:flex-nowrap">
                        <Link href="mailto:info@salwaquranacademy.com" className="flex items-center">
                            <FaEnvelope className="mx-2 w-[25px] h-[25px] text-teal-600 p-[5px]  rounded-sm" /> info@quranacademy.com
                        </Link>
                        <Link href="" className="flex items-center">
                            <FaSkype className="mx-2 w-[25px] h-[25px] bg-blue-500 p-[5px]  rounded-full" />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <SocialIcon icon={<FaFacebookF className='bg-blue-600 p-[6px] rounded-full w-6 h-6' />} />
                        <SocialIcon icon={<FaTwitter className='bg-blue-600 p-[6px] rounded-full w-6 h-6' />} />
                        <SocialIcon icon={ <FaInstagram className="w-6 h-6 rounded-full p-[6px] text-white bg-gradient-to-r from-purple-500 to-pink-500" />} />
                        <SocialIcon icon={<FaYoutube className='bg-red-600 p-[6px] rounded-full w-6 h-6' />} />
                    </div>
                </div>
            </div>
            <div className="hidden py-7 font-sans lg:flex flex-1 bg-white">
                <h1 className="text-3xl p-4 text-black ml-4 sm:ml-10">Salwa Quran Academy</h1>
            </div>
            <Nav/>
        </div>
);

interface SocialIconProps {
    icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
    <a href="#" className="text-white m-1 mx-2">
        {icon}
    </a>
);

export default Topbar;
