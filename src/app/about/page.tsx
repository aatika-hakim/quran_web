import Image from 'next/image';
import React from 'react';
import backgroundImageUrl from '../../../public/bg2.jpg';
import img from '../../../public/about.png'
import Buttons from '@/components/Button';
import Head from '@/components/Head';
import Sidebar from '@/components/Sidebar';


const About = () => {
  return (
    <>
        <Head backgroundImage={backgroundImageUrl} heading='About Us' />
    <section className="container mx-auto px-4 py-20 lg:px-0 flex">
    <div className="items-center">
            <div className="content-column lg:w-3/4">
                <div className="inner-column">
                    <div className="sec-title mb-5">
                    <span className="title text-teal-500">Know about us</span>
                        <h2 className="text-3xl font-semibold">Lorem ipsum dolor sit amet</h2>
                    </div>
                    <div className="text text-gray-600 mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui beatae consequatur atque culpa porro aperiam, reiciendis distinctio, exercitationem eum modi ipsum aspernatur veniam itaque. Molestias aperiam ipsum consequuntur ratione!
                    </div>
                    <div className="text text-gray-600 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, commodi debitis molestias iure natus beatae necessitatibus vero voluptas rem eum laboriosam ut nesciunt numquam quis corrupti reprehenderit sunt recusandae ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae fuga ipsum suscipit sed, deserunt accusamus veritatis illo cumque facilis hic, et amet voluptate? Necessitatibus dolorem eos ipsam autem aliquid.
                    </div>
                    <div className="btn-box">
                        <Buttons text='Contact Us' links='/contact' properties='shrink-0'/>
                    </div>
                </div>
            </div>
        
        <div className="inner-column  relative">
                    <figure className="image-1 mt-10">
                        <a href="#" className="lightbox-image">
                        <Image alt="about" src={img} className="w-[700px] h-[400px]" width={300} height={200} />
                        </a>
                    </figure>
                </div>
                <div className="mt-10 lg:w-3/4">
        <div className="sec-title mb-10">
            <span className="title text-teal-500">Our Goal</span>
            <h2 className="text-3xl font-semibold">
                is to provide the best possible service
            </h2>
        </div>
        <div className="text text-gray-600 mb-5">
            We aim at creating
            a community where everyone can feel welcome and valued,
            regardless of their background or professional status. To
            achieve this, we offer various services such as
            consulting, training, and recruitment
            that help individuals and businesses in achieving
            their goals and aspirations.
        </div>
        <div className="text text-gray-600 mb-5">
            To achieve this goal, we are committed to
            providing high quality services that meet the needs
            of our clients in an efficient manner. We
            strive to maintain open communication with all
            our clients so as to understand their requirements
            and cater to them accordingly.  of our clients in an efficient manner.            
        </div>
        <div className="text text-gray-600 mb-5">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita natus dolore nostrum assumenda provident, rem maxime! Veritatis, at. Libero repellendus soluta, tempore quis officia qui ab nesciunt laboriosam corporis!
        </div>
        <div className="text text-gray-600 mb-5">
        Corporis placeat doloribus esse. Molestias aliquid ipsum quibusdam aperiam doloribus impedit numquam ratione alias velit esse, error quo quaerat qui eius quod?
        </div>
        <div className="text text-gray-600">
        Corporis placeat doloribus esse. Molestias aliquid ipsum quibusdam aperiam doloribus impedit numquam ratione alias velit.
        </div>
    </div>
    </div>
    <div className='hidden lg:flex lg:w-3/4'>
    <Sidebar />
    </div>
</section>
</>
  )};

  export default About;