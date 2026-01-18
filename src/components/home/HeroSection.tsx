import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Award, Zap, Users, Building2 } from 'lucide-react';
import heroImage from '@/assets/hero-solar.jpg';

const slides = [
  {
    id: 1,
    title: 'POWER YOUR FUTURE WITH CLEAN ENERGY',
    subtitle: 'Switch to solar today for a smarter, sustainable, and cost-effective energy solution.',
    image: heroImage,
  },
  {
    id: 2,
    title: 'SUSTAINABLE SOLUTIONS FOR TOMORROW',
    subtitle: 'Join thousands of satisfied customers who have made the switch to solar power.',
    image: heroImage,
  },
  {
    id: 3,
    title: 'EXPERT INSTALLATION & SUPPORT',
    subtitle: 'From consultation to maintenance, we provide complete solar energy solutions.',
    image: heroImage,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Solar panels"
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left px-6 lg:px-0">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              🌞 Welcome to Hum Solar Services
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 md:mb-6">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={word === 'CLEAN' || word === 'FUTURE' ? 'text-secondary' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/calculator">
                  <Play className="w-5 h-5 mr-2" />
                  Calculate Savings
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-32 md:bottom-24 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 flex items-center gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center gap-2 transition-all duration-300 ${
                currentSlide === index ? 'text-secondary' : 'text-white/50 hover:text-white'
              }`}
            >
              <span className="text-sm font-bold">0{index + 1}</span>
              <div className={`h-0.5 transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-secondary' : 'w-4 bg-white/30'
              }`} />
            </button>
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="hidden md:flex absolute bottom-24 right-12 gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-md">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 md:gap-4 justify-center md:justify-start">
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
    </section>
  );
};

export default HeroSection;
