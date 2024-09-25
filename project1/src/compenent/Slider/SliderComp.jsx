import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextCategories } from "../Context/CategoriesContext";

export default function SliderCopm() {
  const { allCategories } = useContext(ContextCategories);


  if (!allCategories) {
    return <div>Loading...</div>;  
  }

  if (allCategories.length === 0) {
    return <div>No categories found.</div>;  
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-11/12 m-auto">
      <Slider {...settings} className="my-7">
        {allCategories.map((category, index) => (
          <div key={index} >
            <img 
              className="w-full h-72  object-cover object-center" 
              src={category.image} 
              alt={category.name}  // Provide alt text for accessibility
            />
            <p className="text-center font-semibold text-2xl">{category.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
