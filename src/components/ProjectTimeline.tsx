import Image from 'next/image';

function ProjectTimeline() {
  return (
    <section className='bg-primary py-24'>
      <div className='custom-container text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-14.5'>
          What We Do to Guarantee Project Success
        </h2>

        {/* Responsive image */}
        <div className='flex justify-center'>
          <Image
            src='/items.svg'
            alt='Project Process Timeline'
            width={1300}
            height={406}
            className='w-full h-auto'
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectTimeline;
