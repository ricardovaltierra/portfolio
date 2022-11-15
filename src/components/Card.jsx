import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { DiChrome } from 'react-icons/di';

const Card = ({ anotherProp, ...project }) => {
  const {
    image,
    alternativeText,
    title,
    paragraph,
    stack,
    githubLink,
    liveURL,
  } = project;

  return (
    <div className="w-60 bg-dimWhiteReduced text-dimWhite rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl md:my-12">
      {console.log(`THIS ${anotherProp} ---- AND ---- ${anotherProp}`)}
      <img className="h-40 object-cover rounded-xl opacity-60" src={image} alt={alternativeText} />
      <div className="p-2">
        <h2 className="font-thin text-lg ">
          {title}
        </h2>
        <p className="text-sm text-gr">
          {paragraph}
          | Made with
          {stack.map((item, index) => `${item} ${index === stack.length - 1 ? '.' : ', '}`)}
        </p>
      </div>
      <div className="flex flex-row m-2 text-[30px] text-primary">
        <a role="button" href={githubLink} className="bg-dimRose anchor-icons rounded-full p-3 m-2 hover:bg-dimWhite">
          <FaGithub />
        </a>
        <a role="button" href={liveURL} className="bg-dimRose anchor-icons rounded-full p-3 m-2 hover:bg-dimWhite">
          <DiChrome />
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alternativeText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
    liveURL: PropTypes.string.isRequired,
  }).isRequired,
  anotherProp: PropTypes.string.isRequired,
};

export default Card;
