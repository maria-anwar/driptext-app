import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarousalCards = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings} className="w-full">
     <div className="p-2 mx-2"> 
    <div className="p-4 bg-[#101E33] rounded-lg text-center ">
    <p className="text-lg text-white">
    <span className="block text-xl text-white">★ ★ ★ ★ ★</span>
    “5x more traffic in just a few months.”</p>
    </div>
  </div>

  <div className="p-2 mx-2">
<div className="p-4 bg-[#101E33] rounded-lg text-center ">
<p className="text-lg text-white">
<span className="block text-xl text-white">★ ★ ★ ★ ★</span>
“High-quality texts at an affordable price.”
</p>
</div>
</div>


<div className="p-2 mx-2">

<div className="p-4 bg-[#101E33] rounded-lg text-center ">
<p className="text-lg text-white">
<span className="block text-xl text-white">★ ★ ★ ★ ★</span>
“5x more traffic in just a few months.”
</p>
</div>
</div>
    </Slider>
  );
};

export default CarousalCards;



