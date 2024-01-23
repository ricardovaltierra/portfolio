import { AiFillFile } from 'react-icons/ai';
import {
  FaAngellist,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles, { layout } from '../style';

const Footer = () => (
  <section className="flex md:grid grid-cols-2 flex-col pt-[60px] border-t-[1px] border-t-[#3F3E45] mb-12 md:mx-[65px] mx-[1.7rem]">
    <div className={`${styles.flexStart} flex-col md:grid grid-rows-2 md:mb-8 w-full`}>
      <div className="md:w-50 w-full flex-1 flex flex-col justify-start mr-10">
        <h2 className={`${styles.heading2} font-light`}>
          Ricardo Valtierra
        </h2>
        <p className={`${styles.paragraph} md:w-full`}>
          Developer interested in software engineering, systems design, and accessibility.
        </p>
      </div>
      <div className={`w-full ${layout.section}`}>
        <div className={`${styles.flexBetween} w-full`}>
          <a
            href="https://twitter.com/RicardoValtie15"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose md:hidden flex`}
          >
            <FaTwitter />
            <span className={styles.linkHover}>Twitter</span>
          </a>
          <a
            href="http://www.linkedin.com/in/ricardovaltierra"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose md:flex hidden`}
          >
            <FaLinkedin />
            <span className={styles.linkHover}>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ricardovaltierra"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose`}
          >
            <FaGithub />
            <span className={styles.linkHover}>GitHub</span>
          </a>
          <a
            href="https://angel.co/ricardo-valtierra"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose md:flex hidden`}
          >
            <FaAngellist />
            <span className={styles.linkHover}>Wellfound</span>
          </a>
          <a
            href="https://bit.ly/ricardo-valtierra-resume"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose md:hidden flex`}
          >
            <AiFillFile />
            <span className={styles.linkHover}>Resume</span>
          </a>
        </div>
      </div>
    </div>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
      <div className="w-60 md:mr-4">
        <h3 className={`${styles.heading2} font-light mb-2.5`}><small>Contact</small></h3>
        <ul className="text-[23px] font-thin text-dimWhite md:flex flex-col space-y-4">
          <li>
            <a href="mailto:ricardo_valtierra@outlook.com" className={styles.linkHover}>Email me</a>
          </li>
          <li>
            <a
              href="https://calendly.com/ricardo_valtierra/work-dev-chat"
              target="_blank"
              rel="noreferrer"
              className={styles.linkHover}
            >
              Chat with me
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=16474027030&text=Hey! Let's talk about software engineering!"
              target="_blank"
              rel="noreferrer"
              className={styles.linkHover}
            >
              Message me
            </a>
          </li>
        </ul>
      </div>
      <div className="w-60 md:ml-4">
        <h3 className={`${styles.heading2} font-light mb-2.5 md:mt-0 mt-[60px]`}><small>General</small></h3>
        <ul className="text-[23px] font-thin text-dimWhite md:flex flex-col space-y-4">
          <li>
            <Link to="/mission-&-vision" className={`${styles.linkHover}`}>
              Mission & Vision
            </Link>
          </li>
          <li>
            <a href="https://medium.com/@ricardo_valtierra" target="_blank" rel="noreferrer" className={styles.linkHover}>Medium</a>
          </li>
          <li>
            <a
              href="https://angel.co/ricardo-valtierra"
              target="_blank"
              rel="noreferrer"
              className={`${styles.linkHover} md:hidden flex`}
            >
              Wellfound
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className={`${styles.flexBetween} col-span-2 md:ml-[13px] md:mt-0 mt-12`}>
      <p
        className="w-full md:text-[17px] text-[1.1rem] md:text-start text-center text-dimWhite md:font-light font-thin md:tracking-widest"
      >
        All rights reserved &copy; Ricardo Valtierra 2024.
      </p>
    </div>
  </section>
);

export default Footer;
