

const InfoSection = () => {
  const items = [
    {
      title: 'Expanding the target group',
      description: 'Currently, visitors find you via products and product categories. That\'s great. But what about those who have a problem and don’t yet know that your products are the solution?',
      icon: '/path/to/icon1.svg', 
    },
    {
      title: 'More organic visitors',
      description: 'By setting up a product-related advice section within your shop, you increase the number of potential topics for which your online shop can be found.',
      icon: '/path/to/icon2.svg', 
    },
    {
      title: 'Building your authority',
      description: 'The more topics you cover sensibly within the user journey, the greater the reputation and authority of your shop. With a product-related advice section, we connect your topic with your brand.',
      icon: '/path/to/icon3.svg',
    },
    {
      title: 'Blog as a sustainable seller',
      description: 'Your potential customers have problems that your product solves. But what if the users don\'t know the product? In the guide, we show them how your product solves their problem.',
      icon: '/path/to/icon4.svg', 
    },
    {
      title: 'More sales',
      description: 'More visitors with problems that your products can solve also means that you sell more in the long term. Through editorial, product-related content, we increase your sales sustainably and steadily.',
      icon: '/path/to/icon5.svg', 
    },
    {
      title: 'Lower acquisition costs',
      description: 'We know this: CPAs are rising everywhere due to rising click prices. Your new advice content will reduce your CPA within the marketing mix massively and, above all, sustainably.',
      icon: '/path/to/icon6.svg', 
    },
  ];

  return (
    <div className="bg-gradient-to-r from-dark-blue to-sky-800 rounded-xl 4xl:rounded-2xl text-white py-16 2xl:px-12 xxs:px-3">
      <div className="text-center mb-12 2xl:px-40">
        <h2 className="text-sm text-cyan-500 ">All-round carefree text service</h2>
        <h1 className="text-3xl font-bold my-4">Our texts provide the answers to the questions of your potential customers</h1>
        <p className="text-lg">With our SEO guide texts, you can build a <span className="font-bold">topic-relevant blog</span> for your online shop without any effort on your part to generate <span className="font-bold">more traffic, customers and sales</span>.</p>
      </div>
      <div className=" px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-start text-start ">
            <div className="bg-gray-900 p-4 w-16 h-16 border-2 border-white rounded-lg mb-4">
            <i className="fa-solid fa-people-roof text-gray-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoSection;
