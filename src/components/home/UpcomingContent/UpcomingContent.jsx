import logo1 from "../../../assets/homeimages/logo1.png";
import logo2 from "../../../assets/homeimages/logo2.png";
import logo3 from "../../../assets/homeimages/logo3.png";
import logo4 from "../../../assets/homeimages/logo4.png";
import logo5 from "../../../assets/homeimages/logo5.png";

const UpcomingContent = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center px-2 xs:px-3 sm:px-5 lg:px-7 2xl:px-12">
        <h1 className="text-[#101E33] text-center">
          We live SEO & content. The following specialist portals have published our content.
        </h1>
      </div>
      <div className="flex justify-between items-center mt-8 px-2 xs:px-3 sm:px-5 lg:px-7 2xl:px-20 overflow-x-auto">
        <img src={logo1} alt="Partner 1" className="h-16 md:h-12 sm:h-10 xs:h-8 xxs:h-6" />
        <img src={logo2} alt="Partner 2" className="h-16 md:h-12 sm:h-10 xs:h-8 xxs:h-6" />
        <img src={logo3} alt="Partner 3" className="h-16 md:h-12 sm:h-10 xs:h-8 xxs:h-6" />
        <img src={logo4} alt="Partner 4" className="h-16 md:h-12 sm:h-10 xs:h-8 xxs:h-6" />
        <img src={logo5} alt="Partner 5" className="h-16 md:h-12 sm:h-10 xs:h-8 xxs:h-6" />
      </div>
    </div>
  );
};

export default UpcomingContent
