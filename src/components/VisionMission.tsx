import Image from 'next/image';

function VisionMission() {
  return (
    <div className='bg-[#f6f6f6] py-24'>
      <div className='custom-container grid lg:grid-cols-2 gap-6 mb-5'>
        {/* Vision */}
        <div className='bg-white rounded shadow w-[640px] h-[360px] flex flex-column'>
          <div className='p-7.5 pr-0'>
            <h2 className='text-2xl font-bold text-primary mb-2'>Vision</h2>
            <p className='text-[#343434] text-base mb-4'>
              To become a global leader in IT innovation, recognized for
              transforming ideas into impactful solutions that shape the future
              of businesses and communities worldwide.
            </p>
          </div>
          <Image
            src='/vm1.svg'
            alt='Vision'
            width={300}
            height={200}
            className='pt-4 pr-4 mx-auto'
          />
        </div>

        {/* Mission */}
        <div className='bg-white rounded shadow w-[640px] h-[360px] flex flex-column'>
          <div className='p-7.5 pr-0'>
            <h2 className='text-xl font-bold text-primary mb-2'>Mission</h2>
            <p className='text-gray-700 mb-4'>
              To deliver smart, scalable, and sustainable digital solutions that
              help businesses automate processes, accelerate growth, and unlock
              new opportunities in a rapidly evolving digital landscape.
            </p>
          </div>
          <Image
            src='/vm2.svg'
            width={350}
            height={250}
            alt='Mission'
            className='pt-40 mx-auto'
          />
        </div>
      </div>

      <div className='custom-container min-h-[460px] bg-white rounded shadow grid md:grid-cols-[2fr_1fr] items-center'>
        {/* Left Content */}
        <div className='px-8'>
          <h2 className='text-2xl font-bold text-primary mb-2'>
            Our Core Values
          </h2>
          <p className='text-[#343434] text-base mb-4'>
            Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum
            enim metus amet turpis lectus. Lorem ipsum dolor sit amet, alina
            adipisci elite.
          </p>

          <ul className='space-y-4'>
            <li className='flex items-start gap-3'>
              <span className='w-5 h-5 mt-1 flex-shrink-0'>
                <img src='/icons/right.svg' alt='icon' />
              </span>
              <p className='text-[#343434]'>
                <span className='font-semibold text-base'>Innovation: </span>
                Continuously pushing boundaries with fresh ideas and advanced
                technologies.
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-5 h-5 mt-1 flex-shrink-0'>
                <img src='/icons/right.svg' alt='icon' />
              </span>
              <p className='text-[#343434]'>
                <span className='font-semibold'>Integrity: </span>
                Building trust through honesty, transparency, and
                accountability.
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-5 h-5 mt-1 flex-shrink-0'>
                <img src='/icons/right.svg' alt='icon' />
              </span>
              <p className='text-[#343434]'>
                <span className='font-semibold'>Excellence: </span>
                Committing to the highest quality in everything we do.
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-5 h-5 mt-1 flex-shrink-0'>
                <img src='/icons/right.svg' alt='icon' />
              </span>
              <p className='text-[#343434]'>
                <span className='font-semibold'>Collaboration: </span>
                Working as one team, together with our clients, to achieve
                shared success.
              </p>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-5 h-5 mt-1 flex-shrink-0'>
                <img src='/icons/right.svg' alt='icon' />
              </span>
              <p className='text-[#343434]'>
                <span className='font-semibold'>Growth Mindset: </span>
                Encouraging continuous learning and adaptability for individuals
                and businesses alike.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Side Image */}
        <div className='flex justify-content-center pr-12.5'>
          <img
            src='/vm3.svg'
            alt='Core Values Graphic'
            className='object-contain'
          />
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
