import Buttons from "./Button";
import Registration from "./Register";

export default function Hero() {
    return (
            <section className="bg-slate-950 bg-center bg-no-repeat bg-cover bg-opacity-70">
                <div className="container mx-auto py-10">
                    <div className="flex flex-col items-center justify-between md:flex-row md:gap-4">
                        <div className="md:w-1/2 md:order-1 md:text-left">
                            <h2 className="p-4 text-4xl font-semibold text-white">
                                Start Your Quran Journey Today!
                            </h2>
                            <div className="grid gap-3 grid-cols-0">
                                <div>
                                    <p className="flex justify-center p-4 text-white rounded-full hover:bg-opacity-80">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
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
