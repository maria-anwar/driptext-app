

const CardComponent = () => {
  const cards = [
    {
      id: 1,
      title: '2,000+',
      description: 'We create texts for online shops every month.'
    },
    {
      id: 2,
      title: 'Up to 700%',
      description: 'Cost savings compared to other content agencies.'
    },
    {
      id: 3,
      title: '50+',
      description: 'SEO copywriters trained by us give it their all.'
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-4 md:space-y-0 md:space-x-6 px-6">
      {cards.map(card => (
        <div key={card.id} className="py-8 px-8 w-90 h-40 bg-white rounded-lg border border-gray-200 shadow-md text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{card.title}</h2>
          <p className="font-normal text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
