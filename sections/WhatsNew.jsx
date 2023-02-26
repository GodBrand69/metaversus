'use client';

import { motion } from "framer-motion";
import styles from "../styles"
import { staggerContainer, fadeIn, planetVariants  } from "../utils/motion";

import { TypingText, TitleText, NewFeatures } from "../components"
import { newFeatures } from "../constants"

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} flex flex-col lg:flex-row mx-auto gap-8`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-col flex-[0.75] justify-center"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>Whats new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap gap-[24px] justify-between">
          {newFeatures.map((feature) => (
            <NewFeatures 
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img  
          src="/whats-new.png"
          className="h-[90%] w-[90%] object-contain"
          alt="whats-new"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
