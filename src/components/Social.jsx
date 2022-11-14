import { layout } from '../style';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Social = () => {
  return (
    <div>
      <div className={`${layout.hero} text-dimRose h-full gap-x-6 md:mt-0 mt-2`}>
          <div className="si-container"><FaLinkedin /></div>
          <div className="md:flex hidden si-container"><FaGithub /></div>
          <div className="md:flex hidden si-container"><FaTwitter /></div>
          <div className="si-container"><MdMail /></div>
          <div className="si-container"><FaWhatsapp /></div>
        </div>
    </div>
  )
}

export default Social
