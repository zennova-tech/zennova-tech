import Image from 'next/image';

function VisionMission() {
  return (
    <div className='bg-[#f6f6f6] py-24 rounded-md '>
      <div className='custom-container grid lg:grid-cols-2 gap-6 mb-10'>
        {/* Vision */}
        <div className='bg-white  rounded shadow w-[640px] h-[360px] flex flex-column'>
          <div className='p-7.5'>
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
          <div className='p-7.5'>
            <h2 className='text-xl font-bold text-primary mb-2'>Mission</h2>
            <p className='text-gray-700 mb-4'>
              To deliver smart, scalable, and sustainable digital solutions that
              help businesses automate processes, accelerate growth, and unlock
              new opportunities in a rapidly evolving digital landscape.
            </p>
          </div>
          <img
            src='/vm2.svg'
            width={300}
            height={200}
            alt='Mission'
            className=''
          />
        </div>
      </div>

      <div className='custom-container grid md:grid-cols-2 gap-6 items-center'>
        <div>
          <h2 className='text-xl font-bold text-blue-900 mb-4'>
            Our Core Values
          </h2>
          <p className='text-gray-600 mb-4'>
            Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum
            enim metus amet turpis lectus. Lorem ipsum dolor sit amet, alina
            adipisci elite.
          </p>

          <ul className='space-y-4'>
            <li>
              <span className='text-blue-600 font-semibold'>
                🔷 Innovation:
              </span>{' '}
              Continuously pushing boundaries with fresh ideas and advanced
              technologies.
            </li>
            <li>
              <span className='text-blue-600 font-semibold'>🔷 Integrity:</span>{' '}
              Building trust through honesty, transparency, and accountability.
            </li>
            <li>
              <span className='text-blue-600 font-semibold'>
                🔷 Excellence:
              </span>{' '}
              Committing to the highest quality in everything we do.
            </li>
            <li>
              <span className='text-blue-600 font-semibold'>
                🔷 Collaboration:
              </span>{' '}
              Working as one team, together with our clients, to achieve shared
              success.
            </li>
            <li>
              <span className='text-blue-600 font-semibold'>
                🔷 Growth Mindset:
              </span>{' '}
              Encouraging continuous learning and adaptability for individuals
              and businesses alike.
            </li>
          </ul>
        </div>

        {/* Image with Concentric Circles */}
        <div>
          <Image
            src='/vm3.svg'
            alt='Core Values Graphic'
            width={400}
            height={400}
            className='mx-auto'
          />
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
