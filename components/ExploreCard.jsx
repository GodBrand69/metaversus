'use client';

import { motion } from "framer-motion";
import styles from "../styles"
import { fadeIn  } from "../utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer ${active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"}`}
    onClick={() => handleClick(id)}
  >
    <img 
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold text-[18px] sm:text-[26px] text-white absolute z-0 lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg] ">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgb(0, 0, 0, 0.5)] rounded-b-[24px]">
        <div className={`${styles.flexCenter} glassmorphism rounded-[24px] w-[60px] h-[60px] mb-[16px]`}>
          <img 
            src="/headset.svg"
            alt="headset"
            className="h-1/2 w-1/2 object-contain"
          />
        </div>
        <p className="font-normal uppercase text-white text-[16px] leading-[20px]">
          Enter the Metaverse
        </p>
        <h2 className="text-white font-semibold mt-[24px] text-[24px] sm:text-[32px]">
          {title}
        </h2>

      </div>
    )}
  </motion.div>
);

export default ExploreCard;
