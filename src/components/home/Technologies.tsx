import { useState } from 'react';

function Technologies() {
  const [activeTab, setActiveTab] = useState('AI/ML');
  const tabs = [
    'AI/ML',
    'Frontend',
    'Backend',
    'Mobile',
    'Cloud',
    'IoT',
    'Database',
    'Design',
  ];
  const technologies: Record<string, { name: string; icon: string }[]> = {
    'AI/ML': [
      { name: 'OpenAI', icon: '/ChatGPT.svg' },
      { name: 'OpenCV', icon: '/opencv.svg' },
      { name: 'TensorFlow', icon: '/tensorflow.svg' },
      { name: 'PyTorch', icon: '/pytorch.svg' },
      { name: 'Scikit-learn', icon: '/Claude.svg' },
    ],
    Frontend: [
      { name: 'React', icon: '/react.svg' },
      { name: 'Next.js', icon: '/nextjs.svg' },
      { name: 'Vue', icon: '/vue.svg' },
      { name: 'Angular', icon: '/angular.svg' },
    ],
    Backend: [
      { name: 'Node.js', icon: '/nodejs.svg' },
      { name: 'Express', icon: '/express.svg' },
      { name: 'Django', icon: '/django.svg' },
      { name: 'Spring Boot', icon: '/spring.svg' },
    ],
    Mobile: [
      { name: 'React Native', icon: '/react.svg' },
      { name: 'Flutter', icon: '/flutter.svg' },
      { name: 'Swift', icon: '/swift.svg' },
    ],
    Cloud: [
      { name: 'AWS', icon: '/aws.svg' },
      { name: 'Azure', icon: '/azure.svg' },
      { name: 'GCP', icon: '/gcp.svg' },
    ],
    IoT: [
      { name: 'Arduino', icon: '/arduino.svg' },
      { name: 'Raspberry Pi', icon: '/raspberrypi.svg' },
    ],
    Database: [
      { name: 'MySQL', icon: '/mysql.svg' },
      { name: 'PostgreSQL', icon: '/postgresql.svg' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'Redis', icon: '/redis.svg' },
    ],
    Design: [
      { name: 'Figma', icon: '/figma.svg' },
      { name: 'Adobe XD', icon: '/xd.svg' },
      { name: 'Sketch', icon: '/sketch.svg' },
    ],
  };
  return (
    <section className='bg-[#F6F6F6] md:py-20 py-6'>
      <div className='container'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 sm:mb-3 md:mb-3 lg:mb-6'>
          Technologies we work with
        </h2>
        <p className='text-gray-500 mb-10 max-w-6xl'>
          Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum
          enim netus amet turpis lectus. Lorem ipsum dolor sit amet, alina
          adipisci elite. Egestas elementum enim netus amet turpis lectus.
        </p>

        {/* Tabs */}
        {/* <div className='flex justify-center space-x-11 border-b border-gray-200 mb-12'>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 px-2 text-medium font-semibold font-weight-500 ${
                tab === activeTab ? 'font-bold border-b-2 border-secondary' : ''
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* AI/ML Icons */}
        {/* <div className='max-w-3xl mx-auto'>
          <div className='grid grid-cols-5 sm:grid-cols-3 md:grid-cols-5 justify-items-center'>
            {technologies[activeTab].map((tech) => (
              <div
                key={tech.name}
                className='bg-white shadow rounded-2xl p-6 w-[120px]'
              >
                <img src={tech.icon} alt={tech.name} className='h-10 mx-auto' />
                <p className='mt-4 text-sm font-medium text-gray-800'>
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Technologies;
