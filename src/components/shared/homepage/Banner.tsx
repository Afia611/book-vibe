import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/hero_img.jpg'

const page = () => {
  return (
    <section className="bg-base-200 rounded-2xl mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16 py-12">

        {/* Left side */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-md">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-success text-white mt-8">
            View The List
          </button>
        </div>

        {/* Right side */}
        <div className="flex justify-center mt-8 md:mt-0">
          <Image
            src={bannerImage}
            alt="Book"
            className="w-55 h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default page ;