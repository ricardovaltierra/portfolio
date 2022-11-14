import { layout } from '../style';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { AiFillFile } from 'react-icons/ai';

const Social = () => {
  return (
    <div className={`w-full ${layout.hero} text-dimRose grid grid-cols-3 gap-8 md:mt-0 mt-2`}>
      <div className="si-container"><FaLinkedin /></div>
      <div className="md:flex hidden si-container"><FaGithub /></div>
      <div className="md:flex hidden si-container"><FaTwitter /></div>
      <div className="si-container"><MdMail /></div>
      <div className="si-container"><FaWhatsapp /></div>
      <div className="si-container"><AiFillFile /></div>
    </div>
  )
}

export default Social;
