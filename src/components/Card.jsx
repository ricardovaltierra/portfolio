import { FaGithub } from 'react-icons/fa';
import { DiChrome } from 'react-icons/di';

const Card = () => (
  <div className="w-60 bg-dimWhiteReduced text-dimWhite rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl md:my-12">
    <img className="h-40 object-cover rounded-xl opacity-60" src="https://firebasestorage.googleapis.com/v0/b/personal-portfolio-e6b7b.appspot.com/o/tasktracker.png?alt=media&token=702986be-ff21-45ab-8d57-610e69fae7dc" alt="" />
    <div className="p-2">
      <h2 className="font-thin text-lg ">
        Task Track App
      </h2>
      <p className="text-sm text-gr">
        Description of app
      </p>
    </div>
    <div className="flex flex-row m-2 text-[30px] text-primary">
      <a role="button" href="https://tasktrack.netlify.app/" className="bg-dimRose anchor-icons rounded-full p-3 m-2 hover:bg-dimWhite">
        <FaGithub />
      </a>
      <a role="button" href="https://tasktrack.netlify.app/" className="bg-dimRose anchor-icons rounded-full p-3 m-2 hover:bg-dimWhite">
        <DiChrome />
      </a>
    </div>
  </div>
);

export default Card;
