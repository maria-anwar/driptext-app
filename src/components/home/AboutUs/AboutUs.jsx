import person1img from"../../../assets/homeimages/markus.png";
import person2img from "../../../assets/homeimages/Daniel.png";
import person3img from "../../../assets/homeimages/Mirco.png";

const AboutSection = () => {
  const people = [
    {
      name: 'Markus Laue',
      title: 'Head of Strategy & Growth',
      image: person1img,
      details: 'Markus is the strategic hub of DripText. He makes sure that our content gets better every day from an SEO perspective.',
      achievement: 'Bundles the SEO knowledge from 150 satisfied agency customers & 600 projected websites.',
    },
    {
      name: 'Daniel Herrmann',
      title: 'Head of Operations',
      image: person2img,
      details: 'Daniel is our man for day-to-day business. He makes sure that all processes run smoothly, all customers are satisfied and our team has no bottlenecks.',
      achievement: 'As a process & structure nerd, ensures that drip texts reach customers by the deadline every month.',
    },
    {
      name: 'Mirco Wagner',
      title: 'Head of Marketing',
      image: person3img,
      details: 'Mirco is our “Swiss Army knife” in online marketing. He is always looking for new approaches to make DripText look even better.',
      achievement: 'Be creative so that more and more online shops recognize and use the potential of drip texts.',
    },
  ];

  return (
    <div className="about-section text-center py-16  mt-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* <h1 className="text-5xl font-extrabold text-cyan-600 mb-6">About Us</h1> */}
        <h2 className="text-3xl font-semibold text-[#101E33] mb-6">The team behind DripText</h2>
        <p className="text-lg text-gray-600">
          The heart of DripText are the more than 50 copywriters, editors, project managers, and SEO experts. Together, they pursue one goal every day: to create high-performance content for online shops that people search for in order to make a purchasing decision for suitable products.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {people.map((person, index) => (
          <div key={index} className="person-card max-w-sm bg-white rounded-lg shadow-lg group overflow-hidden relative">
            <div className="relative">
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mt-6 transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 ">
              <h3 className="text-2xl font-semibold text--[#101E33] mb-2 justify-center">{person.name}</h3>
              <p className="text-sm font-medium text-gray-6000 mb-2">{person.title}</p>
              <p className="text-gray-700 mb-4">{person.details}</p>
              <div className="absolute bottom-0 left-0 right-0 bg-custom-yellow p-4 shadow-inner transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <p className="text-sm text-[#101E33] font-semibold">Achievement:</p>
                <p className="text-sm text-dark-blue">{person.achievement}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
