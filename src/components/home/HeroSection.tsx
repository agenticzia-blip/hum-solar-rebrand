import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Award, Zap, Users, Building2 } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';
import commercialSolar from '@/assets/commercial-solar.jpg';
import industrialSolar from '@/assets/industrial-solar.jpg';
import logo from '@/assets/logo.png';

const slides = [
  {
    id: 1,
    title: 'POWER YOUR FUTURE WITH CLEAN ENERGY',
    subtitle: 'Switch to solar today for a smarter, sustainable, and cost-effective energy solution.',
    image: heroImage,
  },
  {
    id: 2,
    title: 'SUSTAINABLE ENERGY FOR A BRIGHTER TOMORROW',
    subtitle: 'Join 4,000+ satisfied customers who have already made the switch to solar power.',
    image: commercialSolar,
  },
  {
    id: 3,
    title: 'EXPERT INSTALLATION & RELIABLE SUPPORT',
    subtitle: 'From consultation to maintenance, we provide complete solar energy solutions.',
    image: industrialSolar,
  },
];

const stats = [
  { icon: Award, value: '8+', label: 'Years Experience' },
  { icon: Zap, value: '60MW+', label: 'Installed Capacity' },
  { icon: Users, value: '4,000+', label: 'Installations' },
  { icon: Building2, value: '500+', label: 'Commercial Projects' },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
      ))}

      {/* Content - Always Left Aligned */}
      <div className="container-custom relative z-10 py-20 pb-40 md:pb-44">
        <div className="max-w-2xl px-6 md:px-0">
          {/* Logo and Business Name */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white p-2 shadow-xl flex items-center justify-center">
              <img src={logo} alt="Hum Solar Services" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-display font-bold text-white">Hum Solar Services</h2>
              <p className="text-secondary text-sm md:text-base font-medium">Powering Pakistan's Future</p>
            </div>
          </div>

          {/* Slide Content with Animation */}
          <div key={currentSlide} className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={
                  word === 'CLEAN' || word === 'FUTURE' || word === 'SUSTAINABLE' || 
                  word === 'BRIGHTER' || word === 'EXPERT' || word === 'RELIABLE' 
                    ? 'text-secondary' 
                    : ''
                }>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* Buttons - Stacked on mobile, side by side on desktop */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-base w-full sm:w-auto" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="text-base w-full sm:w-auto" asChild>
                <Link to="/calculator">
                  <Play className="w-5 h-5 mr-2" />
                  Calculate Savings
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators - Dots Only */}
        <div className="mt-12 md:mt-0 md:absolute md:bottom-36 md:right-12 flex items-center gap-3 px-6 md:px-0">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="p-1 transition-all duration-500"
            >
              <div className={`rounded-full transition-all duration-500 ${
                currentSlide === index 
                  ? 'w-10 h-3 bg-secondary' 
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`} />
            </button>
          ))}
        </div>

        {/* Arrow Controls - Hidden on mobile */}
        <div className="hidden md:flex absolute bottom-36 right-12 gap-3 mt-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 hover:border-secondary transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/10 hover:border-secondary transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-md">
        <div className="container-custom py-5 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-display font-bold text-white">{stat.value}</p>
                  <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar for Auto-Slide */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
        <div 
          className="h-full bg-secondary transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 5s linear'
          }}
          key={currentSlide}
        />
      </div>
    </section>
  );
};

export default HeroSection;
