import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex flex-col flex-1 min-w-[210px] sm:max-w-[250px]">
    <div className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323f5d]`}>
      <img 
        src={imgUrl}
        alt={title}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h1 className="mt-[26px] font-bold text-[24px] text-white leading-[30px]">
      Title {title}
    </h1>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
