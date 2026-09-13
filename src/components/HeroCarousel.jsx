import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import carousel1 from '../assets/images/carousel1.jpg';
import carosusel2 from '../assets/images/carosusel2.jpg';
import carousel3 from '../assets/images/carousel3.jpg';
import carousel4 from '../assets/images/carousel4.jpg';
import carousel5 from '../assets/images/carousel5.jpg';

const slides = [
  {
    image: carousel1,
    title: "Autumn Elegance",
    subtitle: "Discover cozy knits, luxurious coats, and timeless style crafted for the modern individual.",
    cta: "Browse Clothing",
    category: "Clothing"
  },
  {
    image: carosusel2,
    title: "Step with Confidence",
    subtitle: "Step out in hand-crafted leather loaders, retro court sneakers, and active running footwear.",
    cta: "Explore Footwear",
    category: "Footwear"
  },
  {
    image: carousel3,
    title: "The Best Footwear",
    subtitle: "Athletic and active footwears for your next Marathon completely organic and original leather.",
    cta: "Discover Beauty",
    category: "Beauty"
  },
  {
    image: carousel4,
    title: "Curated Style Details",
    subtitle: "Complete your daily outfit with modern aviators, premium acoustics, and smartwatches.",
    cta: "Shop Accessories",
    category: "Accessories"
  },
  {
    image: carousel5,
    title: "Minimalist Living",
    subtitle: "Handcrafted interior objects and furniture designed for beautiful, contemporary spaces.",
    cta: "Shop Home Decor",
    category: "Home Decor"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useRef(null);
  const rNav = useNavigate();
  
  // Custom navigation handler to avoid closure issues
  navigate.current = (category) => {
    rNav(`/products?category=${encodeURIComponent(category)}`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-stone-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-900/40 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-md md:max-w-xl text-white space-y-4 md:space-y-6">
                <span className="inline-block text-stone-300 text-xs md:text-sm font-semibold tracking-widest uppercase">
                  New Arrival
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif text-white drop-shadow-sm">
                  {slide.title}
                </h1>
                <p className="text-stone-200 text-sm md:text-lg leading-relaxed max-w-lg font-light">
                  {slide.subtitle}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigate.current(slide.category)}
                    className="inline-block bg-stone-100 hover:bg-emerald-800 text-stone-900 hover:text-white font-medium text-sm md:text-base px-6 py-3 rounded-md transition duration-300 cursor-pointer shadow-md"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Manual Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition cursor-pointer backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition cursor-pointer backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
              index === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
