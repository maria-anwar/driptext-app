
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Bernd",
    company: "Sexual enhancers",
    review:
      'I produced the first content in the shop myself - it worked relatively reliably, but to a certain extent it never "made an impact". Thanks to the content from Driptext, we were able to cover an extremely large number of new topics in a short space of time.',
  },
  {
    name: "Dario",
    company: "Natapura",
    review:
      "Rising costs in the performance ads area have made us tackle SEO. As a first step, we tried content from DripText - and we are super happy.",
  },
  {
    name: "Fritz",
    company: "Servimonda",
    review:
      "I came across DripText while looking for a new content creator. The initial conversation was really good and I was really looking forward to it. The offer was detailed and easy to understand. The formalities went smoothly and were child's play. The texts are of great quality. Small technical additions were implemented quickly and correctly. The implementation of the texts was flawless, also from an SEO perspective. If you are looking for holistic text creation with a head, DripText is the right place for you. I look forward to continuing to work with them.",
  },
  {
    name: "Cedric",
    company: "Changeway",
    review:
      "Many thanks to the whole team at DripText. They have been supporting me with various projects for a long time. The collaboration is going very, very well and I am extremely satisfied. Always reliable, very competent and friendly! Here's to many more successful years.",
  },
  {
    name: "Matthias",
    company: "Nima GmbH",
    review:
      "As managing director of Nima GmbH, quality and efficiency are my top priority. I found exactly that at DripText. What particularly impressed me is the reliability of their work. The team behind DripText is characterized by professionalism and delivers results that exceed my expectations. Another strength that I would like to highlight is their uncomplicated communication. They are always approachable, responsive and offer clear solutions. I am extremely satisfied with DripText and look forward to a long-term partnership.",
  },
  {
    name: "Lars",
    company: "BIBS pacifier",
    review:
      "We have a very limited radius of action with our products. Thanks to the content from DripText, we were able to generate significantly more traffic and sales.",
  },
];

const ReviewComponent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-sky-200 rounded-2xl xxs:py-8 xxs:px-8 2xl:py-12 2xl:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="2xl:px-40">
          <h2 className="text-center text-3xl font-bold mb-6 text-black">
            I dont want to do without DripTexts texts for my online shop
            anymore.
          </h2>
          <p className="text-center mb-12 text-black">
            What our customers say about us:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-white rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.155 3.544h3.722c.967 0 1.37 1.24.588 1.81l-3.01 2.18 1.155 3.543c.3.921-.755 1.688-1.54 1.11l-3.01-2.18-3.01 2.18c-.784.578-1.84-.189-1.54-1.11l1.155-3.544-3.01-2.18c-.782-.57-.379-1.81.588-1.81h3.722l1.155-3.543z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-500">{review.company}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/client-register"
            className="mt-4 bg-gradient-to-r from-sky-700 to-cyan-500 text-white py-4 px-4 rounded-lg "
          >
            Order free sample text
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
