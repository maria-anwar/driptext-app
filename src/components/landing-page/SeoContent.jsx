import React from "react";

const SeoContent = () => {
  const seocontent = [
    {
      title: "Why DripText is your content creation agency Are",
      detail:
        "you looking for unique content that will take your website to the next SEO level? Do you need informative texts for your online shop or\
          corporate blog that will generate more traffic and conversions? Then\
          you have come to the right place. We at DripText take the stress off\
          your hands and ensure that your content is always fresh, relevant and\
          SEO-optimized.",
    },
    {
      title: "Our USP - more than just a content marketing agency",
      detail:
        "What sets us apart from other content agencies? We offer more than just texts. With DripText you get an all-round package that is tailored to your individual needs. Our service begins with a comprehensive keyword analysis, followed by the creation of a tailor-made editorial plan. This way you always know which content is completed, in progress and in planning. No surprises, no stress - just excellent content that delivers results.",
    },
    {
      title: "Transparent, fair and adaptable",
      detail:
        "We at DripText believe in transparency and fairness. That's why our billing is clear and straightforward - starting from just EUR 0.05/net per word. We are flexible and adapt to your needs - no matter what the topic. As long as it's legal, we'll write about it! And to ensure that the quality is always high, we include a 6-eye proofreading and SEO term optimization in our service. So you can be sure that you're getting the best for your money.",
    },
    {
      title: "Free sample article",
      detail:
        "Still unsure? No problem! We are so confident in the quality of our work that we offer you a free sample article. With a length of 1,500 words and a value of 105 EUR, this sample text is a great way to convince yourself of our service. Completely non-binding.",
    },
    {
      title: "DripText - your choice for top-notch SEO content",
      detail:
        "At DripText, we pride ourselves on being able to offer our clients more than traditional copywriting agencies. Our focus is on quality, transparency and results. If you're ready to take your SEO strategy to the next level, we're ready to accompany you on this journey.",
    },
    {
      title: "",
      detail:
        "Order your free sample today and discover the DripText difference! We look forward to working with you.",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-4 px-4 sm:px-3 xl:px-12 2xl:px-18 3xl:px-24">
      <div className="w-full">
        <h3 className="w-full text-custom-black text-center font-bold text-[24px] lg:text-[30px] 3xl:px-5">
          Welcome to DripText: your innovative text agency for high-quality SEO
          content.
        </h3>
      </div>
        {
          seocontent.map((item,index)=>{
            return (
              <div className="flex flex-col">
              <h4 className="text-custom-black text-base xl:text-lg font-semibold ">
                {item.title}
              </h4>
              <p className="text-custom-black text-base xl:text-lg">
                {item.detail}
              </p>
            </div>
           
            )
          })
        }
     
    </div>
  );
};

export default SeoContent;
