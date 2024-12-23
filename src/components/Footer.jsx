import logo from "../assets/homeimages/driptext.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-10">
        <div className="w-full px-8 flex flex-col md:flex-row gap-y-6 justify-between items-center py-4 border-gray-300 ">
          <a
            href="https://driptext.de/"
            target="_self"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Footer Logo"
              className="h-[17.5px] w-[90px]  mr-2"
            />
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
