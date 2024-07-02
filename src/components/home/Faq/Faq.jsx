import Accordion from "./FaqlistCard";

const Questions = [
  {
    question: "Is the sample item really free at the beginning?",
    answer: "Yes. 100%. We know that there are many agencies and freelancers who want to convince you how good they are with great pitching decks and presentations. We at DripText do things differently. We convince you through performance. Order a first, free sample text on a topic of your choice today and decide for yourself based on the content provided whether we should work together in the future. And if the content doesnt convince you (which we don't think), you can still use it on your pages. No exceptions.",
  },
  {
    question: "Do you work with common AI tools?",
    answer: "Yes, at DripText we use tools based on artificial intelligence to make the daily work of our copywriters, editors and project managers easier. AI tools are mainly used in structuring content, defining relevant keywords, the ideal weighting of these keywords and internal processes.",
  },
  {
    question: "How does the collaboration with DripText work?",
    answer: "Our motivation is to ensure that you have as little hassle as possible. Given this, the process of working together is very simply structured. As a rule, working together begins with ordering a free sample text. This is done 100% automatically and digitally via our order form . You will then receive your final, proofread and SEO-optimized article back within one week. If you like this article, we'll schedule a 15-minute phone call with Markus to discuss your requirements. Based on this conversation, you will receive a digital offer from us. You can accept this directly online and we will get started. To begin with, we conduct keyword research and a content gap analysis. We incorporate the results of both analyses into your editorial plan. At the same time, our project management team creates your workspace and sets up your access. From now on, you can put your hands up and watch us create the best content your website has ever seen",
  },
  {
    question: "What tools do you use to ensure the quality of your output?",
    answer: "We use a number of different tools:The KW-Finder from Mangools for keyword researchahrefs.com for content gap analysis & keyword researchNifty PM for our project managementMotion.io for our project managementTextmetrics.com for adjusting & optimizing voice quality (usually level B-1)DeepL Write to linguistically optimize our outputChatGPT and NeuroFlash for uniform adaptation of the reader addressGoogle Drive as document storage & customer backendFormaloo within our digital processesPandaDocs for offers & contractsAt the same time, we use some of our own developments that allow our copywriters and editors to adhere to the structural approach during text creation.",
  },
  {
    question: "Why can you offer your content comparatively cheaply?",
    answer: "We currently charge from 0.05 EUR/word net. Our entire team is completely digital. We don't have our own offices and therefore have no external fixed costs other than our tools. Furthermore, Daniel and Mirco have set up all processes and structures to ensure maximum efficiency. In this way, we can offer a very attractive price of 0.05 EUR/word net–and still pay our employees an above-average salary.",
  },
  {
    question: "Do I receive unrestricted rights to use the content after payment?",
    answer: "Yes. The right of use is transferred in full to our customers. Because we, as a legal entity, are not subject to the Artists' Social Insurance Fund, you as a customer even save yourself the hassle of billing this fund.",
  },
  {
    question: "What skills do you have that I should trust you?",
    answer: "Our founding team consists of four people: Karolin, Daniel, Markus and Mirco Karolin is our Head of Back Office. All of the administrative threads in the company converge with her. Thanks to her years of experience in the agency business, she was able to set up all of the structures at DripText so that we operate with maximum efficiency. Daniel is Head of Operations and is therefore responsible for the operational business and management of DripText. Since there is nothing that Daniel does not translate into structures and processes, all of our processes are structured and planned in detail. This allows us to keep the quality of our output consistently very high - even when there are peaks in workload - because of course Daniel has also built a process for this 😀 Mirco is Head of Marketing and in this role is responsible for all measures that ensure that we come into contact with potential interested parties.  As a trained advertising psychologist and former head of one of Germany's largest digital agencies, Mirco knows exactly how to present DripText in the right light.Markus is a full-blooded SEO and is responsible for training the copywriters and the strategic direction of the agency. He has been active in the German-speaking SEO scene since 2011 and has been voted one of the most influential online personalities of the year several times"
  },
  {
    question: "How big is your team?",
    answer: "DripText consists of four founding members and currently 52 employees in the areas of content creation, editing, SEO, project management and translation.",
  },
];

const FAQs = () => {
  const midIndex = Math.ceil(Questions.length / 2);
  const leftColumn = Questions.slice(0, midIndex);
  const rightColumn = Questions.slice(midIndex);

  return (
    <div className=" py-16 px-5 pt-6">
      <div className="boxContainer">
        <div className="2xl:px-40">
          <h1 className="text-center text-cyan-500 text-sm mb-6">FAQ</h1>
        <h2 className="text-gray-800 text-center text-4xl font-bold ">Do you have any questions?</h2>
        <p className="text-gray-800 text-center mt-4 text-xl">Great! We have the right answers here</p>
        </div>
        <div className="mt-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {leftColumn.map((question, i) => (
              <Accordion key={i} title={<span className="text-sm font-semibold">{question.question}</span>}>
                <p className="text-sm text-gray-800 font-normal px-4">{question.answer}</p>
              </Accordion>
            ))}
          </div> 
          <div>
            {rightColumn.map((question, i) => (
              <Accordion key={i} title={<span className="text-sm font-semibold">{question.question}</span>}>
                <p className="text-sm text-gray-800 font-normal px-4">{question.answer}</p>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
