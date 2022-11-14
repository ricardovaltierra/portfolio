import {
  FaLinkedin, FaGithub, FaTwitter, FaWhatsapp,
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { AiFillFile } from 'react-icons/ai';
import styles, { layout } from '../style';

const Social = () => (
  <div className="md:grid md:grid-cols-2 md:gap-8 md:mt-0 mt-4">
    <div className={`${layout.socialIcons} text-dimRose`}>
      <div className={`${styles.socialIcon} si-container`}>
        <a
          href="http://www.linkedin.com/in/ricardovaltierra"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className={`${styles.socialIcon} md:flex hidden si-container`}>
        <a
          href="https://github.com/ricardovaltierra"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className={`${styles.socialIcon} md:flex hidden si-container`}>
        <a
          href="https://twitter.com/RicardoValtie15"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <div className={`${styles.socialIcon} si-container`}>
        <a
          href="mailto:ricardo_valtierra@outlook.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdMail />
        </a>
      </div>
      <div className={`${styles.socialIcon} si-container`}>
        <a
          href="https://api.whatsapp.com/send?phone=524776777394&text=Let's talk about software engineering"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className={`${styles.socialIcon} md:flex hidden si-container`}>
        <a href="https://bit.ly/35RxdGT" target="_blank" rel="noreferrer">
          <AiFillFile />
        </a>
      </div>
    </div>

    <div className={`${layout.sectionInfo} md:mt-0 mt-5`}>
      <p className={`${styles.paragraph}`}>
        CS Engineer immersed in web development. Specializing in building
        MVP products and accessibility implementation.
      </p>
    </div>
  </div>
);

export default Social;
