import React from 'react';
import { projectsContent } from '../constants';
import Card from './Card';

const Portfolio = () => (
  <div className="w-full flex flex-col justify-center md:my-[90px] my-[50px]">
    <h2 className="text-dimWhite md:my-0 my-12 font-worksans font-light ss:text-[45px] text-[40px] ss:leading-[100px] leading-[45px] ">
      Featured
      <br className="sm:hidden block" />
      Projects
    </h2>
    <div className="flex md:flex-row flex-col items-center md:my-5 my-8">
      {projectsContent.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export default Portfolio;
