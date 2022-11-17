import React from 'react';
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
  <section className="w-full">
    <div className="md:grid md:grid-cols-2 md:gap-8 my-[50px]">
      <div className={`${layout.iconContainer} text-dimRose`}>
        <div className={`${styles.icon} si-container`}>
          <SiRubyonrails />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiPostgresql />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiTypescript />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiReact />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiRedux />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiGraphql />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiGit />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiDocker />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiHeroku />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiLinux />
        </div>
        <div className={`${styles.icon} si-container`}>
          <SiTailwindcss />
        </div>
        <div className={`${styles.icon} si-container`}>
          <DiJira />
        </div>
      </div>
      <p className={`${styles.paragraph} `}>
        Some of the languages & tools I&apos;ve had the opportunity to work with
      </p>
    </div>
  </section>
);

export default Skills;
