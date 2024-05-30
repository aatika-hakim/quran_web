'use client'

import React, { useEffect } from "react";
import Head from '@/components/Head';
import backgroundImageUrl from '../../../public/bg2.jpg';
import '../../../src/contact.css'
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";

const Page = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement>(".input");

    const focusFunc = function (this: HTMLInputElement) {
      let parent = this.parentNode as HTMLElement;
      parent.classList.add("focus");
    };

    const blurFunc = function (this: HTMLInputElement) {
      let parent = this.parentNode as HTMLElement;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);
  return (
    <>
      <Head backgroundImage={backgroundImageUrl} heading='Get in Touch' />
      <div className="container h-screen">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Salwa Quran Academy</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
              <div className="information">
                <FaEnvelope />
                <p className="text-[#1abc9c]">info@salwaquranacademy.com</p>
              </div>
              <div className="information">
                <FaPhoneAlt />
                <p className="text-[#1abc9c]">123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons gap-2">
                <FaFacebookF className='bg-blue-600 p-2 text-white rounded-full w-7 h-7' />
                <FaTwitter className='bg-blue-600 p-2 text-white rounded-full w-7 h-7' />
                <FaInstagram className="w-7 h-7 rounded-full p-2 text-white bg-gradient-to-r from-purple-500 to-pink-500" />
                <FaYoutube className='bg-red-600 p-2 text-white rounded-full w-7 h-7' />
              </div>
            </div>
          </div>

          <div className="contact-form md:p-1">
            <span className="circle two" />

            <form action="index.html" autoComplete="off">
              <h3 className="title">Send Request</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label htmlFor="">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label htmlFor="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label htmlFor="">Whatsapp Number</label>
                <span>Whatsapp Number</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input" />
                <label htmlFor="">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;