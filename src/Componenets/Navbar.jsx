import logo from "../assets/Logo-Theme.png";
import logoBlue from "../assets/Logo-blue.png";
import { Link } from "react-router-dom";

const logoImg = {
  light: logo,
  dark: logo,
  blue: logoBlue,
  purple: logo,
};

const bottomHoverLine = {
  light:
    "absolute left-0 -bottom-3 sm:-bottom-5 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full",
  dark: "absolute left-0 -bottom-3 sm:-bottom-5 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full",
  blue: "absolute left-0 -bottom-3 sm:-bottom-5 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-full",
  purple:
    "absolute left-0 -bottom-3 sm:-bottom-5 w-0 h-1 bg-purple-500 transition-all duration-300 group-hover:w-full",
};

const themeButtonStyle = {
  light:
    "h-10 w-full sm:w-40 bg-white text-purple-900 border border-purple-900 text-nowrag rounded font-bold cursor-pointer active:scale-95 ",
  dark: "h-10 w-full sm:w-40 bg-black text-purple-400 border border-purple-400 text-nowrag rounded font-bold cursor-pointer active:scale-95 ",
  blue: "h-10 w-full sm:w-40 bg-blue-950 text-blue-400 border border-blue-400 text-nowrag rounded font-bold cursor-pointer active:scale-95 ",
  purple:
    "h-10 w-full sm:w-40 bg-purple-950 text-purple-400 border border-purple-400 text-nowrag rounded font-bold cursor-pointer active:scale-95 ",
};

const navbarStyles = {
  light: "bg-white text-black border-gray-300",
  dark: "bg-black text-white border-gray-900",
  blue: "bg-blue-950 text-white border-blue-900",
  purple: "bg-purple-950 text-white border-purple-900",
};

const Navbar = ({ theme }) => {
  return (
    <div
      className={`border-b ${navbarStyles[theme]} flex flex-col md:flex-row md:items-center md:justify-between fixed top-0 left-0 w-full z-50 py-3 md:py-0 md:h-20 gap-3 md:gap-0`}
    >
      <div className="font-bold text-lg sm:text-xl px-4 sm:px-8 md:px-12 lg:px-20 flex items-center gap-2">
        <Link to={"/"} className="flex items-center">
          <img
            src={logoImg[theme]}
            alt="ThemeVerse Logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
        </Link>
        <Link to={"/"} className="flex items-center">
          <div>ThemeVerse</div>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-16 font-semibold text-base sm:text-lg px-4">
        <Link to="/">
          <div className="cursor-pointer active:scale-95 relative group">
            Home
            <span className={`${bottomHoverLine[theme]}`}></span>
          </div>
        </Link>

        <Link
          to="/ThemePage"
          className="cursor-pointer active:scale-95 relative group"
        >
          Features
          <span className={`${bottomHoverLine[theme]}`}></span>
        </Link>

        <Link to={"/ThemePage"}>
          <div className="cursor-pointer active:scale-95 relative group">
            Themes
            <span className={`${bottomHoverLine[theme]}`}></span>
          </div>
        </Link>

        <Link to="/" className="cursor-pointer active:scale-95 relative group">
          About
          <span className={`${bottomHoverLine[theme]}`}></span>
        </Link>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 flex justify-center md:justify-end">
        <Link to={"/ThemePage"} className="w-full sm:w-auto">
          <button className={`${themeButtonStyle[theme]}`}>Change Theme</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
