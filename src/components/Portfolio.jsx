import React from 'react';
import Card from './Card';

const Portfolio = () => (
  <div className="w-full flex flex-col justify-center md:my-[80px] my-[50px]">
    <h2 className="text-dimWhite md:my-0 my-9 font-worksans font-thin ss:text-[45px] text-[40px] ss:leading-[100px] leading-[45px]">
      Featured
      <br className="sm:hidden block" />
      {' '}
      Projects
    </h2>
    <Card />
  </div>
);

export default Portfolio;
