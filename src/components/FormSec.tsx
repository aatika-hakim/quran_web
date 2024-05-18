import React from 'react';
import ContactForm from './Form';

const FormSec = () => {
    return (
        <section className="container mx-auto py-10">
            <div className="lg:grid lg:grid-cols-12">
                <section className="relative flex h-32 lg:col-span-5 lg:h-full xl:col-span-6">
                    <div className="hidden lg:relative lg:block lg:p-12">
                        <h2 className="my-6 text-3xl md:text-4xl">
                            Send Request
                        </h2>

                        <p className="mt-4 leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                            quibusdam aperiam voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nesciunt ipsam ducimus similique voluptatibus, a voluptatum voluptatem, sequi ipsa ipsum totam saepe consequuntur. Quaerat quis ratione officia adipisci inventore. Vel?
                        </p>
                    </div>
                </section>

                <div
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-6 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Send Request
                            </h1>

                            <p className="mt-4 mb-2 leading-relaxed text-gray-500">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>

                    <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSec;
