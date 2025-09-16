'use client';

export default function Expertise() {
  const services = [
    {
      title: 'Product Engineering & SaaS',
      desc: 'End-to-end development for scalable, high-performing software products.',
      icon: '/exp1.svg',
    },
    {
      title: 'Custom Software & Modernization',
      desc: 'Tailored solutions & legacy upgrades for future-ready system.',
      icon: '/exp2.svg',
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Cloud-native application development, migration, CI/CD automation, & secure scalability.',
      icon: '/exp3.svg',
    },
    {
      title: 'AI, Data & Analytics',
      desc: 'Intelligent automation, predictive insights, and data-driven growth.',
      icon: '/exp4.svg',
    },
    {
      title: 'Software Architecture & Advisory',
      desc: 'Scalable system design and expert consulting for robust solutions.',
      icon: '/exp5.svg',
    },
    {
      title: 'Digital Transformation & Automation',
      desc: 'Streamlined operations with AI workflow automation & low-code.',
      icon: '/exp6.svg',
    },
  ];

  return (
    <section className='bg-primary text-white md:py-20 py-6'>
      <div className='custom-container'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12'>
          Expert-Led Software Engineering for Innovation & Impact
        </h2>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-thirdary rounded-lg p-8 text-left hover:shadow-lg transition relative max-h-[280px] max-w-[400px]'
            >
              {/* Title + Desc */}
              <h3 className='text-lg md:text-xl lg:text-2xl font-semibold mb-3'>
                {service.title}
              </h3>
              <p className='text-medium leading-relaxed mb-6 pr-16 pb-12'>
                {service.desc}
              </p>

              {/* Learn More */}
              <a
                href='#'
                className='font-medium inline-flex items-center gap-2 absolute bottom-8 left-8'
              >
                Learn More →
              </a>

              {/* Icon (bottom-right) */}
              <div className='absolute bottom-0 right-0 opacity-80'>
                <img src={service.icon} alt={service.title} className='' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
