
import logo from "../assets/homeimages/driptext.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();
    return (
        <footer className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-center gap-11">
                    <div className="md:w-1/4">
                        <img src={logo} alt="DripText Logo" className="mb-4 w-24 h-auto"/>
                        <p className="text-gray-700">
                            {t('footer.companyDescription')}
                        </p>
                    </div>
                    <div className="md:w-1/4">
                        <h3 className="text-gray-600 font-bold mb-2">{t('footer.navigation.title')}</h3>
                        <ul className="text-gray-600">
                            <li><a href="#" className="hover:underline">{t('footer.navigation.links.0')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.navigation.links.1')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.navigation.links.2')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.navigation.links.3')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.navigation.links.4')}</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/4">
                        <h3 className="text-gray-600 font-bold mb-2">{t('footer.address.title')}</h3>
                        <p className="text-gray-600">
                        {t('footer.address.line1')}<br/>
                        {t('footer.address.line2')}<br/>
                        {t('footer.address.line3')}<br/>
                        {t('footer.address.line4')}<br/>
                        {t('footer.address.line5')}
                        </p>
                    </div> 
                    <div className="md:w-1/4">
                        <h3 className="text-gray-600 font-bold mb-2">{t('footer.legal.title')}</h3>
                        <ul className="text-gray-600">
                            <li><a href="#" className="hover:underline">{t('footer.legal.links.0')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.legal.links.1')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.legal.links.2')}</a></li>
                            <li><a href="#" className="hover:underline">{t('footer.legal.links.3')}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
