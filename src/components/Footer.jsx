import logo from "../assets/homeimages/driptext.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-col md:flex-row justify-center gap-11">
                    <div className="md:w-1/4">
                        <img src={logo} alt="DripText Logo" className="mb-4 w-24 h-auto"/>
                        <p className="text-gray-700">
                            {t('footer.companyDescription')}
                        </p>
                    </div>
                    <div className="md:w-1/4">
                        <h3 className="text-gray-600 font-bold mb-2">{t('footer.navigation.title')}</h3>
                        <ul className="text-gray-600">
                            <li><a target="_blank" href="https://driptext.de/" className="hover:underline">{t('footer.navigation.links.0')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/magazin/" className="hover:underline">{t('footer.navigation.links.1')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/#leistungen" className="hover:underline">{t('footer.navigation.links.2')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/#team" className="hover:underline">{t('footer.navigation.links.3')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/autor-markus-laue/" className="hover:underline">{t('footer.navigation.links.4')}</a></li>
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
                            <li><a target="_blank" href="https://driptext.de/agb/" className="hover:underline">{t('footer.legal.links.0')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/impressum/" className="hover:underline">{t('footer.legal.links.1')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/datenschutz/" className="hover:underline">{t('footer.legal.links.2')}</a></li>
                            <li><a target="_blank" href="https://driptext.de/datenschutz/" className="hover:underline">{t('footer.legal.links.3')}</a></li>
                        </ul>
                    </div>
                </div> */}
        <div className="w-full px-8 flex flex-col md:flex-row gap-y-6 justify-between items-center py-4 border-gray-300 ">
          <a href='https://driptext.de/' target="_self" className="flex items-center">
            <img src={logo}  alt="Footer Logo"  className="h-[17.5px] w-[90px]  mr-2" />
            <span className="text-gray-700 font-semibold"></span>
          </a>

          <div className="flex flex-row gap-y-2 gap-x-4">
            <a
              target="_blank"
              href="https://driptext.de/agb/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.0.text")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/impressum/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.1.text")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/datenschutz/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.2.text")}
            </a>
            <a
              target="_blank"
              href="https://driptext.de/datenschutz/"
              className="text-gray-600 "
            >
              {t("thankYouPage.footer.footerLinks.3.text")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
