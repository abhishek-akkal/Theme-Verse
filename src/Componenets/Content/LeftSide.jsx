import RightSide from "./RightSide";
import { Link } from "react-router-dom";

const textStyles = {
  light: "text-gray-700",
  dark: "text-gray-300",
  blue: "text-gray-300",
  purple: "text-gray-300",
};

const textHeadingStyle = {
  light: "text-purple-600",
  dark: "text-purple-600",
  blue: "text-blue-600",
  purple: "text-purple-600",
};

const buttonStyle = {
  light: "bg-purple-700 border border-purple-900",
  dark: "bg-purple-700 border border-purple-900",
  blue: "bg-blue-600 border border-blue-400",
  purple: "bg-purple-700 border border-purple-900",
};

const buttonBorderStyle = {
  light: "border border-black",
  dark: "border border-white",
  blue: "border border-blue-300",
  purple: "border border-purple-300",
};

const LeftSide = ({ theme }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-14 pt-28 pb-10 lg:py-10 gap-10 lg:gap-0">
      <div className="w-full lg:w-1/3 lg:py-40 lg:relative lg:left-20 text-center lg:text-left">
        <div className="pb-6 sm:pb-10 text-3xl sm:text-4xl md:text-5xl leading-tight">
          <div className="font-bold pb-2">Customize Your</div>

          <div className={`font-bold ${textHeadingStyle[theme]}`}>
            Experience
          </div>
        </div>

        <div
          className={`text-base sm:text-lg font-normal leading-8 sm:leading-10 ${textStyles[theme]}`}
        >
          <div className="pb-2">Switch between beautiful themes and</div>

          <div>explore smooth UI transitions.</div>
        </div>

        <div className="relative top-0 sm:top-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 font-semibold leading-tight text-lg mt-6 sm:mt-0">
          <div
            className={`h-10 w-full sm:w-40 ${buttonStyle[theme]} text-white flex items-center justify-center rounded active:scale-95 cursor-pointer`}
          >
            <Link to={"/ThemePage"} className="w-full">
              <button className="cursor-pointer w-full">Explore Themes</button>
            </Link>
          </div>
          <div
            className={`h-10 w-full sm:w-40 ${buttonBorderStyle[theme]} flex items-center justify-center rounded active:scale-95 cursor-pointer`}
          >
            <button className="cursor-pointer">Learn More</button>
          </div>
        </div>
      </div>

      <RightSide theme={theme} />
    </div>
  );
};

export default LeftSide;
