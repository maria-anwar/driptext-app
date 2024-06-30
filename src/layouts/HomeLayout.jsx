
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className=''>
      {/* <Header />  */}
      
      <Outlet/>
      
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default HomeLayout;
