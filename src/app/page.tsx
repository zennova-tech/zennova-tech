'use client';

import Expertise from '@/components/home/Experties';
import RareLeague from '@/components/home/RareLeague';
import Technologies from '@/components/home/Technologies';
import Button from '@/components/Icons/Button';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className='bg-primary'>
        <div className='relative max-w-[1920px] max-h-[1080px] mx-auto bg-primary'>
          <div className='absolute inset-0 lg:block hidden'>
            <img
              src='/vector1.png'
              alt='Background'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='custom-container relative pt-20 sm:py-28 md:pt-25 md:py-0 lg:py-56 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 z-10'>
            <div className='text-center md:text-left'>
              <h1 className='text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Building{' '}
                <span className='text-secondary'>intelligent, secure,</span> and{' '}
                <span className='text-secondary'>scalable</span> software
                solutions.
              </h1>
              <p className='mt-6 text-xl sm:text-xl text-gray-300 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                elementum enim netus amet turpis lectus. Lorem ipsum dolor sit
                amet, alina adipisci.
              </p>
              <Button buttonText='Book a Consultation Call' />
            </div>
          </div>

          <div className='absolute top-[-15px] right-0 h-full w-1/2 hidden lg:flex items-center'>
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
