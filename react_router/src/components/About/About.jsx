import React from 'react'

export default function About(){
  return (
    <div className='py-16 bg-white'>
      <div className='container m-auto px-6 text-gray-700 md:px-12 xl:px-6'>
        <div className='flex flex-col md:flex-row items-center gap-6 lg:gap-12'>
        <div className='md:5/12 lg:w-5/12'>
        <img 
        className='flex items-center justify-center w-full h-full'
        src="https://media.licdn.com/dms/image/D5612AQEDLB0d1pXp5w/article-cover_image-shrink_720_1280/0/1691517271641?e=2147483647&v=beta&t=a27FL17QZCFpbgooIe4q6pHtHyvCY5aVjo7ngDSjc9M"
         alt="startup image" />
        </div>
        <div className='md:7/12 lg:w-6/12'>
          <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
            React development is carried out by developers who are passionate about creating high-quality 
            applications.
          </h2>
          <p className='mt-6 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vel beatae velit explicabo eveniet iste impedit laboriosam sequi dicta libero,
            blanditiis facere natus quae ullam eligendi aperiam aspernatur fugiat quisquam quidem?
          </p>
          <p className='mt-4 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nesciunt dicta eum quisquam, 
            sit molestiae neque nam ducimus, similique perspiciatis corporis, cumque magni. Accusamus voluptatibus 
            voluptatum praesentium sequi officia eaque.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}