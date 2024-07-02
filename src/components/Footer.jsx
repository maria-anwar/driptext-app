
import logo from "../assets/homeimages/driptext.png";

const Footer = () => {
    return (
        <footer className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center gap-11">
                    <div className="md:w-1/4">
                        <img src={logo} alt="DripText Logo" className="mb-4 w-24 h-auto"/>
                        <p className="text-gray-500">
                            DripText is your reliable partner for high-quality, SEO-optimized content that your users and the search engine like – guaranteed!
                        </p>
                    </div>
                    <div className="md:w-1/4">
                        <h3 className="text-gray-500 font-bold mb-2">Navigation</h3>
                        <ul className="text-gray-500">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">Magazine</a></li>
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">The team</a></li>
                            <li><a href="#" className="hover:underline">Authors</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/4">
                        <h3 className="text-gray-500 font-bold mb-2">Address</h3>
                        <p className="text-gray-500">
                            DripText Ltd.<br/>
                            Makariou Avenue 59,<br/>
                            Mouyias Tower, 3rd Floor,<br/>
                            Office 301<br/>
                            6017 Larnaca, Cyprus
                        </p>
                    </div> 
                    <div className="md:w-1/4">
                        <h3 className="text-gray-500 font-bold mb-2">Legal</h3>
                        <ul className="text-gray-500">
                            <li><a href="#" className="hover:underline">Conditions</a></li>
                            <li><a href="#" className="hover:underline">Imprint</a></li>
                            <li><a href="#" className="hover:underline">Data protection</a></li>
                            <li><a href="#" className="hover:underline">Cookie settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
