import React from "react";
import Link from "next/link";
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
    <footer className="bg-gray-900">
                <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-10 sm:px-6 lg:px-8 lg:pt-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-3xl text-teal-600 sm:justify-start">
                                Slawa Quran Academy
                            </div>

                            <p className="mt-6 max-w-md leading-relaxed text-white sm:max-w-xs text-left">
                            Salwa Quran Academy is dedicated to spreading the light of the Quran and fostering a deep understanding of its teachings. Our commitment goes beyond imparting knowledge; we strive to instill a love for learning, nurturing a generation of individuals who carry the teachings of the Quran with compassion, wisdom, and a sense of community.{' '}
                            <Link className="text-teal-600" href="/about">Read More...</Link>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                            <div className="text-left">
                                <p className="text-lg font-semibold text-teal-600 hover:text-teal-600/75">Quick Links</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                        About Us
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                            Downloads
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                            Fee Structure
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Quran Course Registration </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-left">
                                <p className="text-lg font-semibold text-teal-600 hover:text-teal-600/75">Courses</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">
                                            Noorani Qaida
                                        </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#">Quran Hifz Program </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Tajweed Course </a>
                                    </li>

                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Arabic Grammer </a>
                                    </li>
                                    <li>
                                        <a className="text-white transition hover:text-white/75" href="#"> Quran Translation </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-left">
                                <p className="text-lg font-semibold text-teal-600 hover:text-teal-600/75">Get in Touch</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                    <Link href="mailto:info@salwaquranacademy.com" className="flex gap-1.5 justify-start text-white transition hover:text-teal-600/75">
                            <FaEnvelope className="w-4 h-4 shrink-0 rounded-sm" /> info@salwaquranacademy.com
                        </Link>
                                    </li>

                                    <li>
                                    <span className="flex  gap-1.5 justify-start text-white transition hover:text-teal-600/75">
                            <FaPhoneAlt className="w-4 h-4 shrink-0 rounded-sm" /> +92 01234567
                        </span>
                                    
                                    </li>

                                    <li
                                        className="flex items-start gap-1.5"
                                    >
                                        <ul className="flex gap-2 justify-start md:gap-4">
                                            <li>
                                            <FaFacebookF className='bg-blue-600 p-[6px] shrink-0 text-white rounded-full w-7 h-7' />
                                            </li>

                                            <li>
                                            <FaTwitter className='bg-blue-600 p-[6px] shrink-0 text-white rounded-full w-7 h-7' />
                                            </li>

                                            <li>
                                            <FaInstagram className="w-7 h-7 shrink-0 rounded-full p-[6px] text-white bg-gradient-to-r from-purple-500 to-pink-500" />
                                            </li>
                                            <li>
                                            <FaYoutube className='bg-red-600 p-[6px] shrink-0 text-white rounded-full w-7 h-7' />
                                            </li>
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
