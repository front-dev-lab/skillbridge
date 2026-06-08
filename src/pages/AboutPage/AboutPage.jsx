import { useRef } from 'react';
import data from '../../data/data.json';

// Hooks
import { useScrollToHash } from '../../hooks/useScrollToHash';

// Styles
import './AboutPage.scss';

// Components
import { PageOverview } from '../../components/PageOverview';
import { AboutPageSection } from '../../components/AboutPageSection';

export const AboutPage = ({ className }) => {
  const { achievements, goals } = data;
  const pageRef = useRef(null);

  useScrollToHash(pageRef);

  return (
    <main ref={pageRef} className={className + " AboutPage"}>
      <PageOverview
        id='company'
        title="About Skillbridge"
        text="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />

      <AboutPageSection
        id="achievements"
        className="AboutPage__Achievements"
        title="Achievements"
        description="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
        items={achievements}
      />

      <AboutPageSection
        id="our-goals"
        className="AboutPage__Goals"
        title="Our Goals"
        description="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to"
        items={goals}
        withCTA
      />
    </main>
  );
};
