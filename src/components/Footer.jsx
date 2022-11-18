import { AiFillFile } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import styles, { layout } from '../style';

const Footer = () => (
  <section className="flex md:flex-row flex-col pt-[60px] border-t-[1px] border-t-[#3F3E45] mb-12">
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
            href="mailto:ricardo_valtierra@outlook.com"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose`}
          >
            <FaGithub />
            <span className={styles.linkHover}>GitHub</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=524776777394&text=Let's talk about software engineering"
            target="_blank"
            rel="noreferrer"
            className={`${styles.paragraph} ${styles.flexBetween} gap-2 text-[20px] text-dimRose md:flex hidden`}
          >
            <MdMail />
            <span className={styles.linkHover}>Email</span>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=524776777394&text=Let's talk about software engineering"
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
        <h3 className={`${styles.heading2} font-light`}><small>Contact</small></h3>
        <ul className="text-[24px] font-thin text-dimWhite md:flex flex-col gap-6">
          <li><a href="mailto:ricardo_valtierra@outlook.com" className={styles.linkHover}>Email me</a></li>
          <li><a href="https://calendly.com/ricardo_valtierra/work-dev-talk" className={styles.linkHover}>Chat with me</a></li>
          <li><a href="https://api.whatsapp.com/send?phone=524776777394&text=Let's talk about software engineering" className={styles.linkHover}>Message me</a></li>
        </ul>
      </div>
      <div className="w-60 md:ml-4">
        <h3 className={`${styles.heading2} font-light`}><small>General</small></h3>
        <ul className="text-[24px] font-thin text-dimWhite md:flex flex-col gap-6">
          <li><a href="https://ricardovaltierra.online" className={styles.linkHover}>About me</a></li>
          <li><a href="https://medium.com/@ricardo_valtierra" className={styles.linkHover}>Medium</a></li>
          <li><a href="https://ricardovaltierra.online" className={styles.linkHover}>Mission & Vision</a></li>
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;