// components/RareLeague.tsx

export default function RareLeague() {
  return (
    <section className=" bg-[url('/section.svg')] bg-cover bg-center ">
      <div className='relative container md:py-20 py-9'>
        <div className=' grid grid-cols-1 lg:grid-cols-2  items-center'>
          {/* Left Content */}
          <div>
            <h2 className='text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-6'>
              Amongst A <span className='text-secondary'>Rare League</span> Of
              Engineering Companies
            </h2>
            <p className='text-[#343434] mb-6 lg:pr-36 text-left'>
              Simplified inbox management between SILQ and Outlook means easy
              and automatic saving of emails to their specific matter. No more
              productivity loss by jumping in and out of different apps.
            </p>

            <ul className='text-[#343434] text-base space-y-4 pr-10 lg:pr-32'>
              <li className='flex items-start gap-2 lg:gap-3'>
                <span className='w-5 h-5 mt-1 flex-shrink-0'>
                  <img src='/icons/right.svg' alt='Rare League Hexagon' />
                </span>
                File emails and attachments to your SILQ matters
                instantaneously, even in bulk.
              </li>
              <li className='flex items-start gap-3'>
                <span className='w-5 h-5 mt-1 flex-shrink-0'>
                  <img src='/icons/right.svg' alt='Rare League Hexagon' />
                </span>
                Easily generate time entries so time spent working in your inbox
                is captured & billed.
              </li>
              <li className='flex items-start gap-3'>
                <span className='w-5 h-5 mt-1 flex-shrink-0'>
                  <img src='/icons/right.svg' alt='Rare League Hexagon' />
                </span>
                Save time using email templates that auto-populate information
                from your matter into your emails.
              </li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className='flex mt-4 md:mt-12 lg:mt-0 justify-end lg:justify-end'>
            <img src='/rare.svg' alt='Rare League Hexagon' className='' />
          </div>
        </div>
      </div>
    </section>
  );
}
