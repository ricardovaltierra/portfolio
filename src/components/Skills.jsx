import {
  SiRubyonrails,
  SiReact,
  SiRedux,
  SiGraphql,
  SiTypescript,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiHeroku,
  SiLinux,
  SiTailwindcss,
} from 'react-icons/si';
import { DiJira } from 'react-icons/di';
import styles, { layout } from '../style';

const Skills = () => (
  <section className="md:grid md:grid-cols-2 md:gap-8 flex flex-col mb-[150px]">
    <div className={`${layout.toolsIcons} text-dimRose`}>
      <div className={`${styles.icon} ski-container`}>
        <SiRubyonrails />
      </div>
      <div className={`${styles.icon} md:flex hidden ski-container`}>
        <SiPostgresql />
      </div>
      <div className={`${styles.icon} ski-container`}>
        <SiTypescript />
      </div>
      <div className={`${styles.icon} ski-container`}>
        <SiReact />
      </div>
      <div className={`${styles.icon} md:flex hidden ski-container`}>
        <SiRedux />
      </div>
      <div className={`${styles.icon} md:flex hidden ski-container`}>
        <SiGraphql />
      </div>
      <div className={`${styles.icon} ski-container`}>
        <SiGit />
      </div>
      <div className={`${styles.icon} md:flex hidden ski-container`}>
        <SiDocker />
      </div>
      <div className={`${styles.icon} md:flex hidden ski-container`}>
        <SiHeroku />
      </div>
      <div className={`${styles.icon} md:flex hidden ski-container`}>
        <SiLinux />
      </div>
      <div className={`${styles.icon} ski-container`}>
        <SiTailwindcss />
      </div>
      <div className={`${styles.icon} ski-container`}>
        <DiJira />
      </div>
    </div>
    <div className="md:flex items-center md:order-none order-first md:mb-0 mb-8">
      <p className={`${styles.paragraph} `}>
        Some of the languages & tools I&apos;ve had the opportunity to work with
      </p>
    </div>
  </section>
);

export default Skills;
