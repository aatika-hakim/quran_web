import React from 'react';

function Page() {
  return (
    <>
    <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16 relative">
    <div className="bg-cover h-64 text-center overflow-hidden" style={{ height: 450, backgroundImage: "url('https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg')" }}>
            </div>
  <div className="max-w-3xl mx-auto">
    <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div className="">
              <h1 className="text-gray-900 font-bold text-3xl mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p className="text-gray-700 text-xs mt-2">By: <a href="#" className="text-teal-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Salwa Quran Academy
              </a></p>
          
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
          <h3 className="text-2xl font-bold my-5">What is Lorem Ipsum?</h3>
          
          <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
          <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-teal-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s</blockquote>
          
          <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>          
              </div>
          
            </div>
       </div>
  </div>
  </>
  );
}

export default Page;
