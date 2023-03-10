import styles from "../styles";

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}>
      <p className="font-bold text-[24px] text-white">
        0{number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] leading-[32px] text-[#B0B0B0]">
        {text}
      </p>    
  </div>
);

export default StartSteps;
