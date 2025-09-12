'use client';

import Expertise from '@/components/home/Experties';
import RareLeague from '@/components/home/RareLeague';
import Technologies from '@/components/home/Technologies';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='bg-primary'>
        <div className='relative max-w-[1920px] mx-auto bg-primary'>
          <div className='absolute inset-0 lg:block hidden'>
            <img
              src='/vector1.png'
              alt='Background'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='container relative pt-20 sm:py-28 md:pt-25 md:py-0 lg:py-40 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 z-10'>
            <div className='text-center lg:text-left relative text-white max-w-[640px] mx-auto lg:mx-0'>
              <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Building{' '}
                <span className='text-secondary'>intelligent, secure,</span> and{' '}
                <span className='text-secondary'>scalable</span> software
                solutions.
              </h1>
              <p className='mt-6 text-base sm:text-lg text-gray-300 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                elementum enim netus amet turpis lectus. Lorem ipsum dolor sit
                amet, alina adipisci.
              </p>
              <button
                type='submit'
                className='lg:mt-10 mt-6 group bg-secondary text-white font-medium w-[226px] sm:w-[275px] h-[44px] sm:h-[59px] px-6 py-3 rounded-md hover:bg-white transition hover:text-secondary flex items-center justify-center text-base md:text-lg gap-2 mx-auto lg:mx-0'
              >
                Book a Consultation Call
                <span className='hidden group-hover:inline-block transition'>
                  <img
                    src='/icons/rightrounded.svg'
                    alt='right'
                    className='w-5 h-5'
                  />
                </span>
              </button>
            </div>
          </div>
          <div className='absolute top-8 right-0 h-full w-1/2 hidden lg:flex items-center'>
            <img
              src='/vector2.png'
              className='h-auto max-h-full object-contain'
              alt='workFlow'
            />
          </div>
          <div className='lg:hidden flex justify-center'>
            <img
              src='/vectormob.svg'
              className='w-full h-auto object-contain'
              alt='workFlow'
            />
          </div>
        </div>
      </section>

      <Technologies />
      <Expertise />
      <RareLeague />
    </div>
  );
}
