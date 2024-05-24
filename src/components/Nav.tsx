'use client'
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from 'react-icons/io5';
import Buttons from './Button';
import Image from 'next/image';

const Nav = () => {
    const [navbar, setNavbar] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [DropdownOpen, setsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Explicitly define the type of dropdownRef

    const handleButtonClick = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleDocumentClick = (event: any) => {
        if (!dropdownRef.current?.contains(event.target)) { // Use contains on dropdownRef.current
            setDropdownOpen(false);
        }
    };

    const handleDropdownLeave = () => {
        setDropdownOpen(false);
    };

    // courses dropdown

    const handleClick = () => {
        setsDropdownOpen(!DropdownOpen);
    };

    const DocumentClick = (event: any) => {
        if (!dropdownRef.current?.contains(event.target)) { // Use contains on dropdownRef.current
            setsDropdownOpen(false);
        }
    };
    const DropdownLeave = () => {
        setsDropdownOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    useEffect(() => {
        document.addEventListener('click', DocumentClick);

        return () => {
            document.removeEventListener('click', DocumentClick);
        };
    }, []);

    return (
        <div>
            <nav className="w-full p-2 bg-slate-900 top-0 z-10">
                <div className="justify-center px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">

                    <div className="flex items-center justify-between py-1 md:py-2 md:block">
                        <div className="flex lg:hidden md:hidden text-sm text-white text-center">
                            <Link href="/" onClick={() => setNavbar(!navbar)} className="text-sm text-white py-1 md:px-6 text-center hover:text-teal-700  transition-all duration-300">
                            <Image src='/images/logo.jpg' alt="logo" className="bg-transparent" width={100} height={4}/>
                        </Link>
                    </div>


                        {/* BUTTON FOR MOBILE */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-[#008080] rounded-md outline-none focus:border-[#008080] focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <RxCross2 className='w-8 h-8 text-white' />
                                ) : (
                                    <IoMenu className='w-8 h-8 text-white' />
                                )}
                            </button>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex-1 justify-self-center mt-8 md:block md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex md:space-x-9 lg:space-x-16">
                                <li className=" text-md text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#008080]  border-[#008080] hover:border-b-2  md:hover:text-[#008080] md:hover:bg-transparent transition-all duration-300">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <div className="relative inline-block" ref={dropdownRef} onMouseLeave={DropdownLeave}>
                                    <button onMouseOver={handleClick} className="text-md text-white py-2 md:px-2 justify-self-center text-center border-b-2 md:border-b-0 hover:bg-[#008080] border-[#008080] md:hover:text-[#008080] md:hover:bg-transparent transition-all duration-300">
                                        Courses
                                    </button>
                                    {DropdownOpen && (
                                        <div className="absolute z-50 w-48 bg-white border border-[#008080] shadow-md text-sm divide-dashed divide-y-2 divide-teal-400" onMouseLeave={DropdownLeave}>
                                            {/* Dropdown content  */}
                                            <Link href="/qaida" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 1 clicked')}>Noorani Qaida Course</Link>
                                            <Link href="/para" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 2 clicked')}>Quran Reading Course</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Quran Hifz Course</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Quran Translation Course</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Tajweed Course</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Islamic Books Course</Link>
                                        </div>
                                    )}
                                </div>
                                <div className="relative inline-block" ref={dropdownRef} onMouseLeave={handleDropdownLeave}>
                                    <button onMouseOver={handleButtonClick} className="text-md text-white py-2 md:px-2 text-center border-b-2 md:border-b-0 hover:bg-[#008080] border-[#008080] md:hover:text-[#008080] md:hover:bg-transparent transition-all duration-300">
                                        Reading
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute z-50 w-40 bg-white border border-[#008080] shadow-md text-sm divide-dashed divide-y-2 divide-teal-400" onMouseLeave={handleDropdownLeave}>
                                            {/* Dropdown content  */}
                                            <Link href="/qaida" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 1 clicked')}>Noorani Qaida</Link>
                                            <Link href="/para" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 2 clicked')}>16 lines Quran</Link>
                                            <Link href="/para" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 2 clicked')}>15 lines Quran</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Kalima and Dua</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Salah</Link>
                                            <Link href="/quran" className="block px-4 py-2 text-[#008080] hover:bg-[#008080] hover:text-white" onClick={() => console.log('Option 3 clicked')}>Quran Translation</Link>
                                        </div>
                                    )}
                                </div>
                                <li className=" text-md text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#008080]  border-[#008080]  md:hover:text-[#008080] md:hover:bg-transparent hover:border-b-2 transition-all duration-300">
                                    <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className=" text-md text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#008080]  border-[#008080]  md:hover:text-[#008080] md:hover:bg-transparent hover:border-b-2 translate-x-1 transition-all duration-300">
                                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="hidden lg:flex justify-center">
                                    <Buttons text='Register Now' properties='text-sm' links='/contact' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
