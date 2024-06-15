import React from "react";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";



const Footer = () => {
    return (
    <footer className="bg-teal-700">
                <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-start text-3xl text-white">
                            <Link href="/">
                            <Image src='/images/logo.jpg' alt="logo" className="bg-transparent h-16" height={64} width={200}/>
                        </Link>
                            </div>

                            <p className="mt-6 max-w-lg leading-relaxed text-white sm:max-w-xs text-left">
                            Salwa Quran Academy is dedicated to spreading the light of the Quran and fostering Link deep understanding of its teachings. Our commitment goes beyond imparting knowledge; we strive to instill Link love for learning, nurturing Link generation of individuals who carry the teachings of the Quran with compassion, wisdom, and Link sense of community.{' '}
                            <Link className="text-white" href="/about">Read More...</Link>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                            <div className="text-left">
                                <p className="text-lg font-semibold text-white hover:text-white/75">Quick Links</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/about">
                                        About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/materials">
                                            Downloads
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/plans">
                                            Fee Structure
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/contact"> Quran Course Registration </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-left">
                                <p className="text-lg font-semibold text-white hover:text-white/75">Courses</p>
                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/courses/qaida">
                                            Noorani Qaida Course
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/courses/hifz">Quran Hifz Program </Link>
                                    </li>

                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/courses/tajweed"> Tajweed Course </Link>
                                    </li>

                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/courses/arabic"> Arabic Grammer </Link>
                                    </li>
                                    <li>
                                        <Link className="text-white transition hover:text-white/75" href="/courses/translation"> Quran Translation </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-left">
                                <p className="text-lg font-semibold text-white hover:text-white/75">Get in Touch</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                    <Link href="mailto:support@salwaquranacademy.com" className="flex gap-1.5 justify-start text-white transition hover:text-white/75">
                            <FaEnvelope className="w-4 h-4 shrink-0 rounded-sm" /> support@salwaquranacademy.com
                        </Link>
                                    </li>

                                    <li>
                                    <span className="flex  gap-1.5 justify-start text-white transition hover:text-white/75">
                            <FaPhoneAlt className="w-4 h-4 shrink-0 rounded-sm" /> +92 01234567
                        </span>
                                    
                                    </li>

                                    <li
                                        className="flex items-start gap-1.5"
                                    >
                                        <ul className="flex gap-2 justify-start md:gap-4">
                                            <Link href='https://www.facebook.com'>
                                            <FaFacebookF className='bg-blue-600 p-[6px] shrink-0 text-white rounded-full w-7 h-7' />
                                            </Link>

                                            <Link href='https://www.facebook.com'>
                                            <FaTwitter className='bg-blue-600 p-[6px] shrink-0 text-white rounded-full w-7 h-7' />
                                            </Link>

                                            <Link href='https://www.facebook.com'>
                                            <FaInstagram className="w-7 h-7 shrink-0 rounded-full p-[6px] text-white bg-gradient-to-r from-purple-500 to-pink-500" />
                                            </Link>
                                            <Link href='https://www.facebook.com'>
                                            <FaYoutube className='bg-red-600 p-[6px] shrink-0 text-white rounded-full w-7 h-7' />
                                            </Link>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-2 text-sm sm:text-base">
                    <div className="container mx-auto text-center text-white">
                        <span>&copy; 2024</span>
                        <Link href="#" className="ml-2">
                            Salwa Quran Academy
                        </Link>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
