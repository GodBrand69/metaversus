'use client';

import { motion } from "framer-motion";
import styles from "../styles"
import { staggerContainer, textVariant, slideIn  } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="justify-center items-center flex-col flex relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className={styles.heroHeading}
        >
          Metaverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <motion.h1 className={styles.heroHeading}>Ma</motion.h1>
          <motion.div className={styles.heroDText} />
          <motion.h1 className={styles.heroHeading}>ness</motion.h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="realtive w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
        <img 
          src="/cover.png"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          alt="cover"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-20">
            <img 
              src="/stamp.png"
              className="sm:w-[155px] w-[100px] sm:h-[155px] object-contain h-[100px]"
              alt="stamp"
            />
          </div>
        </a>
      </motion.div>
      
    </motion.div>
  </section>
);

export default Hero;
