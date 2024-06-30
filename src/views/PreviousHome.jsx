
import Hero from "../components/home/HeroSection/Hero";
import Content from "../components/home/UpcomingContent/UpcomingContent";
import SeoCard from "../components/home/Cards/SeoCard";
import SeoTips from "../components/home/Cards/SeoTips";
import Services from "../components/home/Cards/ServicesCard";
import Payment from "../components/home/PaymentSection/Payment";
import ReviewCarousal from "../components/home/Cards/ReviewCarousal";
import FAQs from "../components/home/question/FAQs";
import TrafficCommponent from "../components/home/TrafficChallange/TraficChallange";
import AboutUs from "../components/home/AboutUs/AboutUs";
import OrderComponent from "../components/home/OrderNow/OrderNow";

const PreviousHome = () => {
  return (
    <>
      <Hero />
      <Content />
      <SeoCard />
      <TrafficCommponent />
      <Services />
      <Payment />
      <SeoTips />
      <ReviewCarousal />
      <FAQs />
      <AboutUs />
      <OrderComponent />
    </>
  );
};

export default PreviousHome;
