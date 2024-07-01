import img from "../../../assets/homeimages/Mockup.png"
const dripTextData = [
  "you run an active online shop in DACH and want to get more sales potential.",
  "want to make yourself and your brand more visible within your niche.",
  "have really cool products that are currently bought too rarely.",
  "want to set up your own blog or expand an existing blog.",
  "you feel that far too few visitors convert into buyers.",
  "want to have a reliable and affordable content partner on your site"
];

const DripTextComponent = () => {
  return (
    <div>
    <div className="w-full flex flex-col items-center px-6 mt-16 ">
        <div className="text-center">
        <h1 className="text-cyan-500 mb-6">
        Ready to collaborate?
        </h1>
      <h2 className="text-2xl font-bold mb-6">Drip texts are perfect for you if you...</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dripTextData.map((text, index) => (
          <div key={index} className="flex items-start p-4 border rounded-xl shadow-sm">
            <svg className="w-6 h-6 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L7 12.172 4.707 9.879a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l9-9z" clipRule="evenodd" />
            </svg>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
   
    <img src={img} alt="" className="w-full mt-12" />
   
    </div>
  );
};

export default DripTextComponent;
