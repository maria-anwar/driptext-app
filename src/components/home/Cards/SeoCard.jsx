const SeoCard = () => {
    return (
      <div className="flex justify-center space-x-16 mt-5 w-full" >
        {/* First Card */}
        <div className="card bg-[#101E33] shadow-2xl flex justify-center items-center h-72 p-4 cursor-pointer">
          <div className="card-body flex flex-col justify-center items-center text-center">
            <h2 className="card-title text-4xl text-white pt-4">2,000+</h2>
            <p className="text-xl text-white w-80 pt-7">We create texts for online shops every month.</p>
          </div>
        </div>
  
        {/* Second Card */}
        <div className="card bg-[#101E33] shadow-2xl flex justify-center items-center h-72 p-4">
          <div className="card-body flex flex-col justify-center items-center text-center">
            <h2 className="card-title text-4xl text-white pt-4">Up to 700%</h2>
            <p className="text-xl text-white w-80 pt-7">Cost savings compared to other content agencies.</p>
          </div>
        </div>
  
        {/* Third Card */}
        <div className="card bg-[#101E33] shadow-2xl flex justify-center items-center h-72 p-6">
          <div className="card-body flex flex-col justify-center items-center text-center">
            <h2 className="card-title text-4xl text-white pt-2">50+</h2>
            <p className="text-xl text-white w-80 pt-7">SEO copywriters trained by us give it their all.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default SeoCard;
  