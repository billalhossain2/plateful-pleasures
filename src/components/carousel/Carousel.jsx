import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const recipes = [
  {
    title: 'Chingri Malai Curry',
    description: 'Indulge in the creamy goodness of classic Italian pasta with this mouthwatering recipe.',
    buttonText: 'View Recipe',
    imageUrl: 'https://i.ibb.co/m4RzqzM/chingri-malai-curry.jpg',
    recipeUrl: '/recipe/pasta-carbonara',
  },
  {
    title: 'Spicy Chicken Tacos',
    description: 'Add some spice to your day with these zesty chicken tacos that are bursting with flavor.',
    buttonText: 'View Recipe',
    imageUrl: 'https://i.ibb.co/ryLZTB5/pitha.jpg',
    recipeUrl: '/recipe/spicy-chicken-tacos',
  },
  {
    title: 'Decadent Chocolate Cake',
    description: 'Satisfy your sweet tooth with this rich and moist chocolate cake. Perfect for dessert lovers!',
    buttonText: 'View Recipe',
    imageUrl: 'https://i.ibb.co/wRvn6rf/dhakai-biriyani.jpg',
    recipeUrl: '/recipe/chocolate-cake',
  },
];

const SliderBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={true}
      >
        {recipes.map((recipe, index) => (
          <div key={index}>
            <img className='lg:max-h-[500px] md:max-h-[500px]' src={recipe.imageUrl} alt={recipe.title} />
            <div className="legend">
              <h2 className="text-3xl font-bold text-white mb-2">{recipe.title}</h2>
              <p className="text-white mb-4">{recipe.description}</p>
              <a
                href=""
                className="bg-[#5F8D0A] hover:bg-[#5F8D0A] text-white py-2 px-4 rounded-full text-lg font-semibold transition duration-300"
              >
                {recipe.buttonText}
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderBanner;
