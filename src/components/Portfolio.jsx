import React from 'react';
import { projectsContent } from '../constants';
import Card from './Card';

const Portfolio = () => (
  <div className="w-full flex flex-col justify-center md:mb-[200px] mb-[100px]">
    <h2 className="text-dimWhite md:my-0 my-12 font-worksans font-light ss:text-[45px] text-[40px] ss:leading-[100px] leading-[45px] md:mx-[65px] mx-[1.7rem]">
      Featured
      {' '}
      <br className="sm:hidden block" />
      Projects
    </h2>
    <div className="flex md:flex-row flex-col items-center md:my-5 my-8 md:px-8 px-6">
      {projectsContent.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Portfolio;
