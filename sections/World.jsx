'use client';

import { motion } from "framer-motion";
import styles from "../styles"
import { staggerContainer, fadeIn  } from "../utils/motion";
import { TitleText, TypingText } from "../components/CustomTexts";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      className={`${styles.innerWidth} flex flex-col mx-auto gap-8`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute w-[220px] max-lg:hidden h-[180px] rounded-[20px] p-[6px] left-[18%] bottom-[33%] bg-[#5D6680]">
        <img src="map-addition-1.png" alt="people" className="rounded-[20px] w-full h-full" />
          <div className="absolute text-white bottom-5 left-5 text-[20px] font-bold">
            <img className="w-[33px] bottom-10 z-20 absolute" src="avatar-1.png" />
            <img className="w-[33px] bottom-10 z-10 left-4 absolute" src="avatar-2.png" />
            <img className="w-[33px] bottom-10 left-8 absolute" src="avatar-3.png" />
            <p className="left-[43%] w-full absolute bottom-[150%] text-white text-[12px]">+264 has joined</p>
            <h1 >The Upside Down</h1>
          </div>
          <h1 className="absolute text-white bottom-5 left-5 text-[20px] font-bold">The Upside Down</h1>
        </div>
        <div className="absolute w-[220px] max-lg:hidden h-[180px] right-[20%] top-[10%] rounded-[20px] p-[6px] bg-[#5D6680]">
          <img src="map-addition-2.png" alt="people" className="rounded-[20px] w-full h-full" />
          <div className="absolute text-white bottom-5 left-5 text-[20px] font-bold">
            <img className="w-[33px] bottom-10 z-20 absolute" src="avatar-1.png" />
            <img className="w-[33px] bottom-10 z-10 left-4 absolute" src="avatar-2.png" />
            <img className="w-[33px] bottom-10 left-8 absolute" src="avatar-3.png" />
            <p className="left-[60%] w-full absolute bottom-[150%] text-white text-[12px]">+264 has joined</p>
            <h1 >Hawkins Lab</h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
