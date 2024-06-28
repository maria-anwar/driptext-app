import logo1 from "../../../assets/homeimages/logo1.png"
import logo2 from "../../../assets/homeimages/logo2.png"
import logo3 from "../../../assets/homeimages/logo3.png"
import logo4 from "../../../assets/homeimages/logo4.png"
import logo5 from "../../../assets/homeimages/logo5.png"

const UpcomingContent = () => {
  return (
    <section className="py-16 w-full">
      <div>
        <div className="text-center mb-8">
          <h2 className="text-[#101E33] text-xl tracking-wide">
            <span className="font-bold text-4xl text-[#101E33]">We live SEO & content.</span> The following specialist portals have published our content.
          </h2>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-28 mt-8">
          <img src={logo1} alt="Partner 1" className="h-full " />
          <img src={logo2} alt="Partner 2" className="h-full" />
          <img src={logo3} alt="Partner 3" className="h-full" />
          <img src={logo4} alt="Partner 4" className="h-full" />
          <img src={logo5} alt="Partner 5" className="h-full" />
        </div>
      </div>
    </section>
    
  );
};

export default UpcomingContent;
