import React from 'react';

function Page() {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 w-full py-10 gap-8'>
      <div className='col-span-2 bg-gray-300'>Page</div>
      <div className='bg-gray-500 h-96 shadow-2xl max-w-xs rounded-md'>page</div>
      </div>
    </div>
  );
}

export default Page;
