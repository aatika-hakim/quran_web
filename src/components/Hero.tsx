import Buttons from "./Button";
import Registration from "./Register";

export default function Hero() {

    const hero_bg = '/images/hero-bg.jpg';

    return (
            <section className="bg-center bg-no-repeat bg-cover bg-opacity-70" style={{backgroundImage: `url(${hero_bg})`}}>
                <div className="container mx-auto py-10">
                    <div className="flex flex-col items-center justify-between md:flex-row md:gap-4">
                        <div className="md:w-1/2 md:order-1 md:text-left">
                            <h2 className="p-4 text-4xl font-semibold text-white">
                                Start Your Quran Journey Today!
                            </h2>
                            <div className="grid gap-3 grid-cols-0">
                                <div>
                                    <p className="flex justify-center p-4 text-white rounded-full hover:bg-opacity-80">
                                    Welcome to Salwa Quran Academy, where knowledge meets enlightenment. Start your journey of spiritual growth and understanding today and discover the power of the Quran. Our academy offers a comprehensive curriculum that will help you understand the Quran like never before. Let us guide you towards a deeper connection with the divine words of Allah.
                                    </p>
                                </div>
                                <div className="flex items-center m-5 space-x-2">
                                <Buttons links="/about" text="About Us"  properties=""/>
                                <Buttons links="/courses" text="Courses" properties=""/>
                            </div>
                            </div>
                            
                        </div>
                        <div className="order-2 hidden lg:w-1/3 md:w-full md:block">
                            <Registration />
                        </div>
                    </div>
                </div>
            </section>
  );
} 
