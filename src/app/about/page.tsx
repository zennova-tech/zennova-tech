'use client';

import Banner from '@/components/Banner';
import Journey from '@/components/Journey';
import ProjectTimeline from '@/components/ProjectTimeline';
import TechnologiesAbout from '@/components/TechnologiesAbout';
import VisionMission from '@/components/VisionMission';

function page() {
  return (
    <div>
      <Banner
        title='From Cloud to AI—We Help You Engineer with Purpose'
        subtitle='Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus. Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.
        Lorem ipsum dolor sit amet, alina adipisci elite. Egestas elementum enim netus amet turpis lectus.'
        buttonText='Get In Touch'
        imageSrc='/about.svg'
      />
      <VisionMission />
      <TechnologiesAbout />
      <ProjectTimeline />
      <Journey />
    </div>
  );
}

export default page;
