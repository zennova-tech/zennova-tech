import Image from 'next/image';

function TechnologiesAbout() {
  const techItems = [
    {
      icon: '/icons/workflow.svg',
      title: 'Workflow Automation',
      desc: 'Streamline processes, reduce manual effort, and boost productivity with our custom workflow automation tools.',
    },
    {
      icon: '/icons/custom-dev.svg',
      title: 'Custom Software Development',
      desc: 'Tailor-made software solutions built to match your business goals and operational challenges.',
    },
    {
      icon: '/icons/web-app.svg',
      title: 'Web Application Development',
      desc: 'Responsive, scalable, and secure web applications built using cutting-edge technologies.',
    },
    {
      icon: '/icons/uiux.svg',
      title: 'UI/UX Designing',
      desc: 'Engaging and intuitive digital experiences that blend creativity with functionality.',
    },
    {
      icon: '/icons/developers.svg',
      title: 'Hire Dedicated Developers',
      desc: 'Get access to skilled developers who work as an extension of your team—full-time or part-time.',
    },
    {
      icon: '/icons/it-consultancy.svg',
      title: 'IT Consultancy',
      desc: 'Expert guidance to transform your tech stack, improve architecture, and boost performance.',
    },
  ];
  return (
    <section className='bg-[#f6f6f6] pb-24'>
      <div className='custom-container '>
        <h2 className='text-3xl font-bold text-primary mb-5'>
          Technologies we work with
        </h2>
        <p className='text-[#343434] text-base mb-8 max-w-3xl'>
          Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum
          enim metus amet turpis lectus. Lorem ipsum dolor sit amet, alina
          adipisci elite.
        </p>

        {/* Grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {techItems.map((item, index) => (
            <div
              key={index}
              className='flex items-start gap-4 bg-white rounded-lg shadow p-5 hover:shadow-md transition'
            >
              <div className='flex items-center justify-center rounded-full bg-[#E6F4FD] flex-shrink-0'>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className='object-contain'
                />
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-primary mb-1'>
                  {item.title}
                </h3>
                <p className='text-base text-[#343434] max-w-[460px]'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologiesAbout;
