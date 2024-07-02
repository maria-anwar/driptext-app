// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const reviews = [
//   {
//     id: 1,
//     name: 'Matthias',
//     comment: 'As managing director of Nima GmbH, quality and efficiency are my top priority. I found exactly that at DripText. What particularly impressed me is the reliability of their work. The team behind DripText is characterized by professionalism and delivers results that exceed my expectations. Another strength that I would like to highlight is their uncomplicated communication. They are always approachable, responsive and offer clear solutions. I am extremely satisfied with DripText and look forward to a long-term partnership.',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Lars',
//     comment: 'We have a very limited radius of action with our products. Thanks to the content from DripText, we were able to generate significantly more traffic and sales.',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Bernd',
//     comment: 'I produced the first content in the shop myself - it worked relatively reliably, but to a certain extent it never "made an impact". Thanks to the content from Driptext, we were able to cover an extremely large number of new topics in a short space of time.',
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: 'Dario',
//     comment: 'Rising costs in the performance ads area have made us tackle SEO. As a first step, we tried content from DripText - and we are super happy.',
//     rating: 5,
//   },
//   {
//     id: 5,
//     name: 'Cedric',
//     comment: 'Many thanks to the whole team at DripText. They have been supporting me with various projects for a long time. The collaboration is going very, very well and I am extremely satisfied. Always reliable, very competent and friendly! Heres to many more successful years.',
//     rating: 5,
//   },
// ];

// const ReviewCard = ({ review }) => (
//   <div className="p-4 border rounded-lg shadow-md bg-white h-full">
//     <h3 className="text-lg font-semibold text-[#101E33] ">{review.name}</h3>
//     <p className="text-gray-600 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>{review.comment}</p>
//     <div className="flex items-center mt-2">
//       {Array.from({ length: review.rating }, (_, index) => (
//         <svg key={index} className="h-5 w-5 text-custom-yellow fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//           <path d="M10 1l2.5 6.5H18l-5 3.8 1.8 6-4.7-3.6L5.9 17l1.8-6L2 7.5h5.5L10 1z"/>
//         </svg>
//       ))}
//     </div>
//   </div>
// );

// const ReviewCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
   
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="py-8">
//       <div className="container mx-auto max-w-7xl ">
//         <h2 className='font-bold text-4xl mb-3 text-[#101E33] mt-10 text-center'>
//           "I don't want to do without DripText's texts for my online shop anymore."
//         </h2>
//         <p className='font-semibold text-xl mb-10 text-center'>
//           What our customers say about us:
//         </p>
//         <Slider {...settings}>
//           {reviews.map(review => (
//             <div key={review.id} className="px-2">
//               <ReviewCard review={review} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// const App = () => (
//   <div>
//     <ReviewCarousel />
//   </div>
// );

// export default App;
