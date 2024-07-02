import Logo from "../assets/homeimages/driptext.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-1 xxs:px-2 xs:px-3 sm:px-5 md:px-6 lg:px-7 xl:px-9 2xl:px-14 3xl:px-20 4xl:px-52 py-4 ">
      <Link to='/' className="flex items-center">
        <img src={Logo} alt="Logo" className="xxs:h-6 lg:h-8 " />
      </Link>
      <div>
        <Link
          to="/client-register"
          className="py-4 px-2 xs:py-2 xs:px-4 sm:py-2 sm:px-5 md:py-2 md:px-6 lg:py-6 lg:px-8 xl:py-4 bg-gradient-to-r from-sky-700 to-cyan-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold rounded-lg"
        >
          Order Free Sample Text
        </Link>
      </div>
    </header>
  );
};

export default Header;
