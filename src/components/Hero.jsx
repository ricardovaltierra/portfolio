import styles from "../style";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col  justify-between items-start w-full">
          <h1 className="flex-1 font-worksans font-light ss:text-[92px] text-[62px] text-white ss:leading-[130px] leading-[70px]">
            Ricardo {" "}
            <span>Valtierra</span> {" "}
          </h1>
          
          <h2 className="text-dimRose md:mt-0 mt-3 font-worksans font-light ss:text-[45px] text-[40px] ss:leading-[110px] leading-[45px]">
            Developer | <br className="sm:hidden block" /> {" "}
            <span className="ss:text-[40px] text-[35px]">
              RoR {" "}
              <small className="ss:text-[31px]">(Ruby)</small> {" "}
              & <br className="sm:hidden block" />  React {" "}
              <small className="ss:text-[31px]">(JS/ES6)</small> {" "}
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
