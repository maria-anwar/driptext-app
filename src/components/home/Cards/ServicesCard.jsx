
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  const cards = [
    {
      iconSrc: 'https://templatekits.themewarrior.com/wrote/wp-content/uploads/sites/39/2021/11/Display.png',
      iconClass: 'fas fa-long-arrow-alt-right',
      title: 'Website Content',
      description: 'Gravida vulputate aliquet tempor siteque sed pretium non urna sed etid aenean haretra quam placera adipis cingopena aliquam adipiscing gravida elementum aliquet eget senectus felis enim diam molestie.'
    },
    {
      iconSrc: 'https://templatekits.themewarrior.com/wrote/wp-content/uploads/sites/39/2021/11/LayoutTextSidebar.png',
      iconClass: 'fas fa-long-arrow-alt-right',
      title: 'Blog Writing',
      description: 'Gravida vulputate aliquet tempor siteque sed pretium non urna sed etid aenean haretra quam placera adipis cingopena aliquam adipiscing gravida elementum aliquet eget senectus felis enim diam molestie.'
    },
    {
      iconSrc: 'https://templatekits.themewarrior.com/wrote/wp-content/uploads/sites/39/2021/11/FileText.png',
      iconClass: 'fas fa-long-arrow-alt-right',
      title: 'Articles Writing',
      description: 'Gravida vulputate aliquet tempor siteque sed pretium non urna sed etid aenean haretra quam placera adipis cingopena aliquam adipiscing gravida elementum aliquet eget senectus felis enim diam molestie.'
    },
    {
      iconSrc: 'https://templatekits.themewarrior.com/wrote/wp-content/uploads/sites/39/2021/11/Cart2.png',
      iconClass: 'fas fa-long-arrow-alt-right',
      title: 'Product Description',
      description: 'Gravida vulputate aliquet tempor siteque sed pretium non urna sed etid aenean haretra quam placera adipis cingopena aliquam adipiscing gravida elementum aliquet eget senectus felis enim diam molestie.'
    },
    {
      iconSrc: 'https://templatekits.themewarrior.com/wrote/wp-content/uploads/sites/39/2021/11/Display.png',
      iconClass: 'fas fa-long-arrow-alt-right',
      title: 'SEO Content',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      iconSrc: 'https://templatekits.themewarrior.com/wrote/wp-content/uploads/sites/39/2021/11/LayoutTextSidebar.png',
      iconClass: 'fas fa-long-arrow-alt-right',
      title: 'Technical Writing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <section className="py-10 px-36">
      <div className="container mx-auto">
        <div className="text-center">
          <h6 className="text-lg font-medium text-cyan-500">DripText Preise</h6>
          <h2 className="text-4xl font-bold text-[#101E33] mt-4">Choose between our flexible package prices</h2>
          <p className="text-xl text-gray-600 mt-4 px-4">
          We offer various package prices to suit your specific monthly content needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#101E33] text-white p-16 shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex justify-between items-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center bg-[#ffffff1a]">
                  <img src={card.iconSrc} alt={card.title} className="w-8 h-8" />
                </div>
               
              </div>
              <h4 className="text-2xl font-bold mb-8">{card.title}</h4>
              <p className="text-lg ">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
