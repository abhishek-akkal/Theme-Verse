import hero from "../../assets/Hero-img.png";
import heroBlue from "../../assets/Hero-Blue.png";

const HeroImg = {
  light: hero,
  dark: hero,
  blue: heroBlue,
  purple: hero,
};

const RightSide = ({ theme }) => {
  return (
    <div className="w-full sm:w-3/4 lg:w-1/2 flex justify-center">
      <img
        src={HeroImg[theme]}
        alt="Hero"
        className="w-full max-w-[280px] sm:max-w-[420px] lg:max-w-170 h-auto object-contain"
      />
    </div>
  );
};

export default RightSide;
