import React from "react";
import logo from "@/images/logo.jpg"
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaSkype,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";

const Topbar: React.FC = () => (
        <div className="w-full text-center items-center">
            <div className="bg-slate-800 text-white">
                <div className="flex flex-col sm:flex-row justify-between mx-4 sm:mx-20">
                    <div className="space-x-14 flex">
                        <Link href="mailto:support@salwaquranacademy.com" className="flex items-center text-xs">
                            <FaEnvelope className="w-7 h-7 text-gray-300 p-[5px]" /> support@salwaquranacademy.com
                        </Link>
                        <Link href="" className="flex items-center">
                            <FaSkype className="mx-2 w-6 h-6 bg-blue-500 p-[5px]  rounded-full" />
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
            <div className="hidden font-sans lg:flex flex-1 bg-white">
                <div className="flex items-center justify-between">
                    <div className="flex items-center py-4">
                        <Link href="/">
                            <Image src={logo} alt="logo" className="bg-transparent" />
                        </Link>
                    </div>
                </div>
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
