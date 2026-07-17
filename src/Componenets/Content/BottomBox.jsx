import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { RiSparklingFill } from "react-icons/ri";

const bottomBoxStyles = {
  light: "bg-gray-50 text-black",
  dark: "bg-[#121C35] text-white",
  blue: "bg-[#18305F] text-white",
  purple: "bg-[#4B007D] text-white",
};

const bottomBoxText = {
  light: "text-black",
  dark: "text-white",
  blue: "text-white",
  purple: "text-white",
};

const BottomBox = ({ theme }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 pt-10 sm:pt-16 md:pt-30 pb-10 sm:pb-16 md:pb-30 px-4">
      <div
        className={`h-64 sm:h-70 md:h-75 w-full max-w-[220px] sm:w-55 flex flex-col ${bottomBoxStyles[theme]} items-center justify-around rounded-xl shadow-lg`}
      >
        <FiSun className="text-yellow-400 text-5xl sm:text-6xl" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl relative bottom-10">Light</h3>
          <p className={`${bottomBoxText[theme]}`}>Clean and bright</p>
        </div>
      </div>

      <div
        className={`h-64 sm:h-70 md:h-75 w-full max-w-[220px] sm:w-55 flex flex-col ${bottomBoxStyles[theme]} items-center justify-around rounded-xl shadow-lg`}
      >
        <FaMoon className="text-slate-500 text-5xl sm:text-6xl" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl relative bottom-10">Dark </h3>
          <p className={`${bottomBoxText[theme]}`}>Easy on the eyes</p>
        </div>
      </div>

      <div
        className={`h-64 sm:h-70 md:h-75 w-full max-w-[220px] sm:w-55 ${bottomBoxStyles[theme]} flex flex-col items-center justify-around rounded-xl shadow-lg`}
      >
        <IoWater className="text-blue-500 text-5xl sm:text-6xl" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl relative bottom-10">Blue</h3>
          <p className={`${bottomBoxText[theme]}`}>Clam and cool</p>
        </div>
      </div>

      <div
        className={`h-64 sm:h-70 md:h-75 w-full max-w-[220px] sm:w-55 ${bottomBoxStyles[theme]} flex flex-col items-center justify-around rounded-xl shadow-lg`}
      >
        <RiSparklingFill className="text-purple-600 text-5xl sm:text-6xl" />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-xl relative bottom-10">Purple</h3>
          <p className={`${bottomBoxText[theme]}`}>Creative and bold</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBox;
