import styles, { layout } from '../style';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { AiFillFile } from 'react-icons/ai';

const Social = () => {
  return (
    <div className="md:grid md:grid-cols-2 md: gap-8">
      <div className={`${layout.socialIcons} text-dimRose`}>
        <div className={`${styles.socialIcon} si-container`}><FaLinkedin /></div>
        <div className={`${styles.socialIcon} md:flex hidden si-container`}><FaGithub /></div>
        <div className={`${styles.socialIcon} md:flex hidden si-container`}><FaTwitter /></div>
        <div className={`${styles.socialIcon} si-container`}><MdMail /></div>
        <div className={`${styles.socialIcon} si-container`}><FaWhatsapp /></div>
        <div className={`${styles.socialIcon} md:flex hidden si-container`}><AiFillFile /></div>
      </div>

      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph}`}>
          CS Engineer inmersed in web development. Specializing in building products as MVP and accessibility implementation.
        </p>
      </div>
    </div>
  )
}

export default Social;
