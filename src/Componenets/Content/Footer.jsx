import { Link } from "react-router-dom";
import { IoHeart } from "react-icons/io5";

const footerStyles = {
  light: "bg-white text-black border-gray-300",
  dark: "bg-black text-white border-gray-900",
  blue: "bg-blue-950 text-white border-blue-900",
  purple: "bg-purple-950 text-white border-purple-900",
};

const Footer = ({ theme }) => {
  return (
    <div className={`py-6 border-t ${footerStyles[theme]} px-4`}>
      <p className="flex items-center justify-center gap-2 font-semibold text-sm sm:text-base text-center">
        Made with <IoHeart className="text-red-500 shrink-0" /> by Abhishek
      </p>
    </div>
  );
};

export default Footer;
