import img1 from "../../../assets/homeimages/markus.png"
import img2 from "../../../assets/homeimages/Daniel.png"
import img3 from "../../../assets/homeimages/Mirco.png"
const teamMembers = [
  {
    name: 'Markus Laue',
    position: 'Head of Strategy & Growth',
    description: 'Markus is the strategic hub of DripText. He makes sure that our content gets better every day from an SEO perspective.',
    additionalInfo: '✌️ Bundles the SEO knowledge from 150 satisfied agency customers & 600 projected websites.',
    image: img1,
  },
  {
    name: 'Daniel Herrmann',
    position: 'Head of Operations',
    description: 'Daniel is our man for day-to-day business. He makes sure that all processes run smoothly, all customers are satisfied and our team has no bottlenecks.',
    additionalInfo: '✌️ As a process & structure nerd, ensures that drip texts reach customers by the deadline every month.',
    image: img2,
  },
  {
    name: 'Mirco Wagner',
    position: 'Head of Marketing',
    description: 'Mirco is our “Swiss Army knife” in online marketing. He is always looking for new approaches to make DripText look even better.',
    additionalInfo: '✌️ Be creative so that more and more online shops recognize and use the potential of drip texts.',
    image: img3,
  },
];

const AboutSection = () => {
  return (
    <div className="bg-gradient-to-r from-dark-blue to-sky-900 py-12 my-24 rounded-xl 4xl:rounded-2xl">
      <div className="text-center mb-8 2xl:px-40">
        <h2 className="text-cyan-400 text-sm">About Us</h2>
        <h1 className="text-custom-white text-3xl font-bold my-4">The team behind DripText</h1>
        <p className="text-custom-white text-lg">The heart of DripText are the more than 50 copywriters, editors, project managers and SEO experts. Together, they pursue one goal every day: to create high-performance content for online shops that people search for in order to make a purchasing decision for suitable products.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-12 xl:px-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gradient-to-t from-gray-900 to-dark-blue py-6 px-7 rounded-xl text-white">
            <div className="flex flex-col items-start">
              <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-cyan-200">{member.position}</p>
            </div>
            <p className="mt-4">{member.description}</p>
            <p className="mt-2 text-sm text-custom-white">{member.additionalInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
