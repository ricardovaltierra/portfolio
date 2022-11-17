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
      <div className="wrap flex items-center">
        <div className="text-part text-[30px] font-light">
          Ruby on Rails
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiRubyonrails />
          </div>
        </div>
      </div>
      <div className="wrap md:flex hidden items-center">
        <div className="text-part text-[30px] font-light">
          PostgreSQL
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiPostgresql />
          </div>
        </div>
      </div>
      <div className="wrap flex items-center">
        <div className="text-part text-[30px] font-light">
          TypeScript
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiTypescript />
          </div>
        </div>
      </div>
      <div className="wrap flex items-center">
        <div className="text-part text-[30px] font-light">
          React
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiReact />
          </div>
        </div>
      </div>
      <div className="wrap md:flex hidden items-center">
        <div className="text-part text-[30px] font-light">
          Redux
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiRedux />
          </div>
        </div>
      </div>
      <div className="wrap md:flex hidden items-center">
        <div className="text-part text-[30px] font-light">
          GraphQL
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiGraphql />
          </div>
        </div>
      </div>
      <div className="wrap flex items-center">
        <div className="text-part text-[30px] font-light">
          Git
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiGit />
          </div>
        </div>
      </div>
      <div className="wrap md:flex hidden items-center">
        <div className="text-part text-[30px] font-light">
          Docker
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiDocker />
          </div>
        </div>
      </div>
      <div className="wrap md:flex hidden items-center">
        <div className="text-part text-[30px] font-light">
          Heroku
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiHeroku />
          </div>
        </div>
      </div>
      <div className="wrap md:flex hidden items-center">
        <div className="text-part text-[30px] font-light">
          Linux
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiLinux />
          </div>
        </div>
      </div>
      <div className="wrap flex items-center">
        <div className="text-part text-[30px] font-light">
          Tailwind
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <SiTailwindcss />
          </div>
        </div>
      </div>
      <div className="wrap flex items-center">
        <div className="text-part text-[30px] font-light">
          Jira
        </div>
        <div className="image-part">
          <div className={`${styles.icon} ski-container`}>
            <DiJira />
          </div>
        </div>
      </div>
    </div>
    <div className="md:flex items-center md:order-none order-first md:mb-0 mb-8">
      <p className={`${styles.paragraph} `}>
        Some of the languages & tools I&apos;ve had the opportunity to work with.
        <span className="sm:hidden block">(Click on them)</span>
      </p>
    </div>
  </section>
);

export default Skills;
