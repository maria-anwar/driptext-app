
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <div className='mb-2'>
      <Header /> 
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
