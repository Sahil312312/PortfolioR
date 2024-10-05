import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi , I'm <span className="text-[#915eff]"> Sahil</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {" "}
            I develop Full-Stack web-developer{" "}
            <br className="sm:block hidden" /> and can handle Deployment.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div cl></div>
    </section>
  );
};

export default Hero;
