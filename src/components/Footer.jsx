import Logo from "../assets/homeimages/driptext.png";

const Footer = () => {
  return (
    <section className="w-full bg-white py-24 p-4">
      <div className="md:max-w-[1368px] m-auto grid md:grid-cols-5 max-[768px]:md:grid-cols-6 gap-8 max-w-[400px]">
        <div className="col-span-1">
          <img src={Logo} alt="logo-footer" className="h-[25px]" />
          <h3 className="font-bold text-2xl mt-10">Contact us</h3>
          <h3 className="py-2 text-[#60737a]">call: 647 68658 86658</h3>
          <h3 className="py-2 text-[#60737a]">
            Address: DripText Ltd. Makariou Avenue 59, Mouyias Tower, 3rd Floor,
            Office 301 6017 Larnaca, Cyprus
          </h3>
          <h3 className="py-2 text-[#363a3d]">Email: Driptext@gmail.com</h3>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-2xl mt-10">Navigation</h3>
          <ul className="py-3 text-[#60737a]">
            <li className="py-2">Home</li>
            <li className="py-2">Magazine</li>
            <li className="py-2">The Services</li>
            <li className="py-2">TheTeam</li>
            <li className="py-2">Authors</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="font-bold text-2xl mt-10">Legal</h3>
          <ul className="py-3 text-[#60737a]">
            <li className="py-2">Conditions</li>
            <li className="py-2">Imprint</li>
            <li className="py-2">Data Protection</li>
            <li className="py-2">Cookie Setting</li>

          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="font-bold text-2xl mt-10">Subscribe</h3>
          <h3 className="py-2 text-[#60737a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            officia .
          </h3>
          <form className="input-box-shadow flex justify-content-between items-center bg-transparent gap-2">
            <input
              type="text"
              className="my-2 w-full px-5 py-3 border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal text-neutral-700 outline-none placeholder:text-neutral-500"
              placeholder="Enter your email address here"
            />
            <button className="my-2 px-5 py-3 bg-yellow-600 text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;
