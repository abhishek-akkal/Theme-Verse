import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { RiSparklingFill } from "react-icons/ri";

const themePageStyles = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
  blue: "bg-blue-950 text-white",
  purple: "bg-purple-950 text-white",
};

const themePageText = {
  light: "text-gray-400",
  dark: "text-white",
  blue: "text-white",
  purple: "text-white",
};

const ThemePage = ({ theme, setTheme }) => {
  return (
    <div
      className={`min-h-screen ${themePageStyles[theme]} pt-28 pb-16 sm:pt-32 sm:pb-24 lg:py-30 px-4`}
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight pb-4 sm:pb-5">
          Choose Your Theme
        </h2>
        <h4
          className={`text-base sm:text-xl md:text-2xl ${themePageText[theme]} max-w-2xl`}
        >
          Pick a theme that matches your style. You can change it anytime!
        </h4>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around pt-10 sm:pt-16 lg:pt-20 text-black flex-wrap gap-y-8 sm:gap-y-10 gap-x-8">
        <div className="w-full max-w-[500px] md:w-140 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 bg-white rounded border border-gray-400 py-6 sm:py-0 sm:h-60">
          <FiSun className="text-yellow-400 text-6xl sm:text-7xl md:text-9xl" />

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold relative sm:bottom-5">
              Light
            </p>

            <p className="text-base sm:text-lg">Clean, bright and beautiful</p>

            <button
              onClick={() => setTheme("light")}
              className="h-10 px-4 flex items-center justify-center gap-2 bg-purple-700 font-semibold text-white relative sm:top-5 mt-4 sm:mt-0 rounded active:scale-95 cursor-pointer"
            >
              <FaCheck />
              <p>Apply Light Theme</p>
            </button>
          </div>
        </div>

        <div className="w-full max-w-[500px] md:w-140 bg-gray-900 shadow-md border border-gray-600 text-white flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 rounded py-6 sm:py-0 sm:h-60">
          <FaMoon className="text-5xl sm:text-6xl md:text-[100px] text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]" />

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold relative sm:bottom-5">
              Dark
            </p>

            <p className="text-base sm:text-lg">
              Smooth, dark and easy on eyes
            </p>

            <button
              onClick={() => setTheme("dark")}
              className="h-10 px-4 flex items-center justify-center gap-2 bg-purple-700 font-semibold text-white relative sm:top-5 mt-4 sm:mt-0 rounded active:scale-95 cursor-pointer"
            >
              <FaCheck />
              <p>Apply Dark Theme</p>
            </button>
          </div>
        </div>

        <div className="w-full max-w-[500px] md:w-140 bg-blue-100 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 rounded py-6 sm:py-0 sm:h-60">
          <IoWater className="text-blue-500 text-6xl sm:text-7xl md:text-9xl" />

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold relative sm:bottom-5">
              Blue
            </p>

            <p className="text-base sm:text-lg">Clam, cool and productive</p>

            <button
              onClick={() => setTheme("blue")}
              className="h-10 px-4 flex items-center justify-center gap-2 bg-purple-700 font-semibold text-white relative sm:top-5 mt-4 sm:mt-0 rounded active:scale-95 cursor-pointer"
            >
              <FaCheck />
              <p>Apply Blue Theme</p>
            </button>
          </div>
        </div>

        <div className="w-full max-w-[500px] md:w-140 bg-purple-100 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 rounded py-6 sm:py-0 sm:h-60">
          <RiSparklingFill className="text-purple-500 text-6xl sm:text-7xl md:text-9xl" />

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <p className="text-2xl sm:text-3xl font-bold relative sm:bottom-5">
              Purple
            </p>

            <p className="text-base sm:text-lg">Bold, creative and unique</p>

            <button
              onClick={() => setTheme("purple")}
              className="h-10 px-4 flex items-center justify-center gap-2 bg-purple-700 font-semibold text-white relative sm:top-5 mt-4 sm:mt-0 rounded active:scale-95 cursor-pointer"
            >
              <FaCheck />
              <p>Apply Purple Theme</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemePage;
