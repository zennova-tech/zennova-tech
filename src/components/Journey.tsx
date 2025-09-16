import Button from './Icons/Button';

function Journey() {
  return (
    <div className='py-24 bg-[#f6f6f6]'>
      <div className='custom-container  relative bg-white rounded-md overflow-hidden'>
        <div className='flex flex-col lg:flex-row items-center min-h-[400px]'>
          <div className='flex-1 p-8 lg:p-12 space-y-6'>
            <h1 className='text-4xl lg:text-4xl font-bold text-primary leading-tight'>
              Shape Your Own Growth Journey
            </h1>
            <p className='text-lg text-[#343434] leading-relaxed'>
              Become part of a dynamic team of engineers, innovators, and
              visionaries—where opportunities to learn, evolve, and excel are
              limitless.
            </p>
            <Button buttonText='Explore Our Openings' />
          </div>
          <div className='flex-1 p-10'>
            <div className='relative w-full bg-gray-100 rounded-lg overflow-hidden'>
              <img
                src='/journey.svg'
                alt='Professional team collaborating'
                className='w-[648px] h-[320px] object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
