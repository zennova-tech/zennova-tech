'use client';

import Banner from '@/components/Banner';
import RareLeague from '@/components/home/RareLeague';

function page() {
  return (
    <div>
      <Banner
        title='The Right Engineering Partner for Modern Enterprises'
        subtitle={`True innovation in engineering stems from seamless collaboration, powered by experimentation, and driven by exceptional talent. At Zennova, we've architected our entire approach around these foundational pillars to delivering impactful solutions for modern enterprises.`}
        buttonText='Get Free Consultation'
        imageSrc='/why-zennova.svg'
      />
      <RareLeague />
    </div>
  );
}

export default page;
