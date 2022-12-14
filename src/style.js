const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading2:
    'text-dimWhite md:mt-0 mt-4 font-worksans font-thin ss:text-[40px] text-[33px] ss:leading-[100px] leading-[45px]',
  paragraph:
    'font worksans font-thin text-dimWhite md:text-[24px] text-[25px] max-w-[550px] my-5 md:leading-[40.8px] leading-[32.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexBetween: 'flex flex-row justify-between items-center',

  center: 'justify-center items-center',

  icon: 'flex justify-center py-5',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  linkHover: 'text-dimWhite hover:text-dimRose md:underline decoration-1 transition duration-500 ',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

  socialIcons: `w-full md:grid md:grid-cols-3 ${styles.flexBetween} md:text-[65px] text-[4rem] px-4 hover:text-dimWhite`,
  toolsIcons: 'w-full grid md:grid-cols-3 grid-cols-2 text-[5rem] px-4 hover:text-dimWhite',
};

export default styles;
