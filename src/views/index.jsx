import HeroSection from '../components/landing-page/HeroSection';
import UpcomingContent from '../components/home/UpcomingContent/UpcomingContent'
import SeoCard from "../components/home/Cards/SeoCard"
import TrafficSeo from "../components/home/TrafficChallange/TraficChallange"
import ServicesComponent from "../components/home/Cards/ServicesCard"
import SeoTips from "../components/home/Cards/SeoTips"
import PaymentComponent from '../components/home/PaymentSection/Payment'
import SeoContent from '../components/landing-page/SeoContent';
import AboutUs from "../components/home/AboutUs/AboutUs"
import OrderNow from "../components/home/OrderNow/OrderNow"


const Home = () => {
  return (
    <>
      <div className='w-full flex-col justify-center px-1 xxs:px-2 xs:px-3 sm:px-5 md:px-6 lg:px-7 xl:px-9 2xl:px-14 3xl:px-20 4xl:px-52'>
        <HeroSection />
        <UpcomingContent />
        <SeoCard  />
        <TrafficSeo />
        <ServicesComponent />
        <SeoTips/>
        <PaymentComponent/>
        <AboutUs />
        <OrderNow />
        <SeoContent/>
       
      </div>
     
      
      
    </>
  );
}

export default Home;
