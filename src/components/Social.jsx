import styles, { layout } from '../style';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { AiFillFile } from 'react-icons/ai';

const Social = () => {
  return (
    <div className="">
      <div className={`${layout.social} text-dimRose`}>
        <div className="si-container"><FaLinkedin /></div>
        <div className="md:flex hidden si-container"><FaGithub /></div>
        <div className="md:flex hidden si-container"><FaTwitter /></div>
        <div className="si-container"><MdMail /></div>
        <div className="si-container"><FaWhatsapp /></div>
        <div className="si-container"><AiFillFile /></div>
      </div>

      <div className={layout.sectionInfo}>
        <p className={`${styles.paragraph} max-w-[550px] font-thin text-[25px] my-5`}>
          CS Engineer inmersed in web development. Specializing in building products as MVP and implementing accesibility.
        </p>
      </div>
    </div>
  )
}

export default Social;
