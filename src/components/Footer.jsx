import styles from '../style';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col pt-[60px] border-t-[1px] border-t-[#3F3E45]`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="w-full flex-1 flex flex-col justify-start mr-10">
        <h2 className="text-dimWhite md:mt-0 mt-4 font-worksans font-light ss:text-[45px] text-[33px] ss:leading-[100px] leading-[45px]">
          Ricardo Valtierra
        </h2>
        <p className={`${styles.paragraph}`}>
          Developer insterested in software engineering, systems design
        </p>
      </div>
    </div>
  </section>
);

export default Footer;
