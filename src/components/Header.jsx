import Logo from "../assets/homeimages/driptext.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {t} = useTranslation();
  return (
    <header className="w-full flex justify-center items-center px-1 xxs:px-2 xs:px-3 sm:px-5 md:px-6 lg:px-7 xl:px-9 2xl:px-14 3xl:px-20 4xl:px-52 py-4 ">
      <Link to='/' className="flex items-center mt-3">
        <img src={Logo} alt="Logo" className="h-[23.5px] w-[120px]  md:w-[180px] md:h-[35.5px]" />
      </Link>
      {/* <div>
        <Link
          to="/probetext"
          className="py-4 px-2 xs:py-2 xs:px-4 sm:py-2 sm:px-5 md:py-2 md:px-6 lg:py-6 lg:px-8 xl:py-4 bg-gradient-to-r from-sky-700 to-cyan-500 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold rounded-lg"
        >
          {t("header")}
        </Link>
      </div> */}
    </header>
  );
};

export default Header;
