'use client';

import { motion } from "framer-motion";
import styles from "../styles"
import { staggerContainer, fadeIn, planetVariants  } from "../utils/motion";

import { TypingText, TitleText, StartSteps } from "../components"
import { startingFeatures } from "../constants"

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} flex flex-col lg:flex-row mx-auto gap-8`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img  
          src="/get-started.png"
          className="h-[90%] w-[90%] object-contain"
          alt="get-started"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.75] justify-center"
      >
        <TypingText title="| How Metaversus works" />
        <TitleText title={<>Get Started with just a few click.</>} />
        <div className="mt-[31px] flex flex-col gap-[24px] max-w-[370px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps 
              key={feature}
              number={index + 1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
