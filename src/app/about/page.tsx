import Image from 'next/image';
import React from 'react';
import img from '../../../public/about.png'
import Buttons from '@/components/Button';


const About = () => {
  return (
    <section className="about-section py-20">
    <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
            <div className="content-column w-full lg:w-1/2 order-2 lg:order-1">
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
                        <Buttons text='Contact Us' links='/contact' properties=''/>
                    </div>
                </div>
            </div>

            { /* Image Column */ }
            <div className="image-column w-full lg:w-1/2 order-1 lg:order-2">
                <div className="inner-column  relative">
                    <figure className="image-1 mt-10">
                        <a href="#" className="lightbox-image">
                        <Image alt="about" src={img} className="" width={390} height={500} />
                        </a>
                    </figure>
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto mt-10">
        <div className="sec-title mb-10">
            <span className="title text-teal-500">Our Goal</span>
            <h2 className="text-3xl font-semibold">
                is to provide the best possible service
            </h2>
        </div>
        <div className="text text-gray-600 mb-5">
            Our goal is to provide the best possible
            service for our customers. We aim at creating
            a community where everyone can feel welcome and valued,
            regardless of their background or professional status. To
            achieve this, we offer various services such as
            consulting, training, and recruitment
            that help individuals and businesses in achieving
            their goals and aspirations. We are
            committed to providing quality services with
            integrity, reliability, and professionalism.
            The 
            success of each client is our ultimate objective
            and we strive to exceed expectations every
            time.
            So, 
            if you have any questions about our services,
            please don’t hesitate to contact us
            and let&apos;s work together towards your success
            today!
        </div>
        <div className="text text-gray-600 mb-5">
            To achieve this goal, we are committed to
            providing high quality services that meet the needs
            of our clients in an efficient manner. We
            strive to maintain open communication with all
            our clients so as to understand their requirements
            and cater to them accordingly.  of our clients in an efficient manner. We
            strive to maintain open communication with all
            our clients so as to understand their requirements
            and cater to them accordingly.  of our clients in an efficient manner. We
            strive to maintain open communication with all
            our clients so as to understand their requirements
            and cater to them accordingly.
            
        </div>
        <div className="text text-gray-600 mb-5">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem expedita natus dolore nostrum assumenda provident, rem maxime! Veritatis, at. Libero repellendus soluta, tempore quis officia qui ab nesciunt laboriosam corporis!
        </div>
        <div className="text text-gray-600 mb-5">
        Corporis placeat doloribus esse. Molestias aliquid ipsum quibusdam aperiam doloribus impedit numquam ratione alias velit esse, error quo quaerat qui eius quod?
        </div>
        <div className="text text-gray-600">
        Corporis placeat doloribus esse. Molestias aliquid ipsum quibusdam aperiam doloribus impedit numquam ratione alias velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, reiciendis soluta! Rerum reprehenderit in totam libero praesentium mollitia maxime velit, sunt tenetur ipsa accusamus, dolore repellat suscipit? Laborum, ex quia!
        </div>
    </div>
</section>
  )};

  export default About;