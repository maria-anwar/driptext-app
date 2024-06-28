import Logo from "../assets/homeimages/driptext.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center py-14 px-36 text-white h-24 ">
        <div className="flex items-center">
          <div className="mr-4  rounded p-5">
            <img src={Logo} alt="Logo" className="h-10 " />
          </div>
        </div>
        <div>
          <Link to='/register/form' className="py-4 px-16 bg-yellow-300 text-gray-600 text-xl font-bold rounded-lg hover:bg-yellow-600 transition duration-200">
            Order Free Sample Text
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
