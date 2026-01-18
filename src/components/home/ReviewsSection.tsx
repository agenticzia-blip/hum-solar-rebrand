import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ahmed Khan',
    location: 'Islamabad',
    rating: 5,
    text: 'Excellent service! Hum Solar installed a 10kW system for my home. The team was professional and the installation was completed on time. My electricity bills have dropped by 80%.',
    avatar: 'AK',
  },
  {
    name: 'Muhammad Farooq',
    location: 'Rawalpindi',
    rating: 5,
    text: 'Very satisfied with the quality of panels and inverter. The net metering process was handled smoothly. Highly recommend Hum Solar Services.',
    avatar: 'MF',
  },
  {
    name: 'Sarah Malik',
    location: 'Lahore',
    rating: 5,
    text: 'From consultation to installation, everything was seamless. The team explained every step clearly. Our factory is now running on 100% solar power.',
    avatar: 'SM',
  },
  {
    name: 'Usman Ali',
    location: 'Faisalabad',
    rating: 5,
    text: 'Best investment for my business. The commercial solar system has significantly reduced our operational costs. Great after-sales support too!',
    avatar: 'UA',
  },
  {
    name: 'Fatima Hassan',
    location: 'Karachi',
    rating: 5,
    text: 'Professional team with excellent knowledge. They designed a system perfect for our energy needs. The warranty and support are outstanding.',
    avatar: 'FH',
  },
  {
    name: 'Bilal Ahmad',
    location: 'Multan',
    rating: 5,
    text: 'Switched to solar 6 months ago. Zero regrets! The system works flawlessly and the savings are real. Thank you Hum Solar team!',
    avatar: 'BA',
  },
];

const ReviewsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-custom mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            What People Say About Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our valued customers have to say about their experience with Hum Solar Services.
          </p>
        </div>
      </div>

      {/* Sliding Reviews */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`flex gap-6 ${isPaused ? '' : 'animate-slide-left'}`} style={{ width: 'max-content' }}>
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[400px] bg-card rounded-2xl p-6 shadow-lg border border-border flex-shrink-0"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-secondary/30 mb-4" />

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default ReviewsSection;
