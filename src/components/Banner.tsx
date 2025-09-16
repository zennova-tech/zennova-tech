import Button from './Icons/Button';

type IBanner = {
  title: string;
  subtitle: string;
  buttonText: string;
  imageSrc: string;
  buttonLink?: string;
};

function Banner({ title, subtitle, buttonText, imageSrc }: IBanner) {
  return (
    <section className='bg-primary text-white overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center'>
          <div className='w-full max-w-[650px] ml-auto'>
            <h1 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug mb-6'>
              {title}
            </h1>

            <p className='text-base md:text-lg mb-8 text-gray-200 max-w-xl'>
              {subtitle}
            </p>
            <Button buttonText={buttonText} />
          </div>
        </div>

        {/* Right Image - full width to edge */}
        <div className='w-full h-full min-h-[500px]'>
          <img
            src={imageSrc}
            alt='Background Cubes'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
