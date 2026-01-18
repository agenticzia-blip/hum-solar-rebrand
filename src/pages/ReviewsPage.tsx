import PageHero from '@/components/PageHero';
import ReviewsSection from '@/components/home/ReviewsSection';
import { Star, Quote, ThumbsUp, Award, Users } from 'lucide-react';
import heroSolar from '@/assets/hero-solar.jpg';

const testimonials = [
  {
    name: 'Dr. Imran Malik',
    role: 'Homeowner',
    location: 'F-10, Islamabad',
    rating: 5,
    text: 'Exceptional service from start to finish! The team at Hum Solar was professional, knowledgeable, and completed the installation ahead of schedule. My 10kW system has reduced my bills by 85%. Highly recommended!',
    avatar: 'IM',
  },
  {
    name: 'Rashid Brothers Textiles',
    role: 'Industrial Client',
    location: 'Faisalabad',
    rating: 5,
    text: 'We installed a 500kW solar system for our textile factory. The ROI has exceeded our expectations. Hum Solar handled everything including net metering. Excellent project management and after-sales support.',
    avatar: 'RB',
  },
  {
    name: 'Ayesha Siddiqui',
    role: 'Business Owner',
    location: 'Blue Area, Islamabad',
    rating: 5,
    text: 'Our office building now runs entirely on solar power. The team designed a system that perfectly matched our energy needs. Professional installation and the monitoring app keeps us informed 24/7.',
    avatar: 'AS',
  },
  {
    name: 'Kareem Plaza',
    role: 'Commercial Property',
    location: 'Lahore',
    rating: 5,
    text: 'Best decision for our shopping plaza. The 200kW installation was completed without disrupting our tenants. Energy costs have dropped dramatically. Thank you Hum Solar!',
    avatar: 'KP',
  },
  {
    name: 'Major (R) Tariq Khan',
    role: 'Homeowner',
    location: 'Bahria Town, Rawalpindi',
    rating: 5,
    text: 'I was skeptical about solar initially, but Hum Solar team convinced me with their transparent approach. No hidden costs, quality equipment, and excellent workmanship. My neighbors are now their customers too!',
    avatar: 'TK',
  },
  {
    name: 'Al-Noor Hospital',
    role: 'Healthcare Facility',
    location: 'Rawalpindi',
    rating: 5,
    text: 'Critical power for a hospital requires reliability. Hum Solar designed a system with battery backup that ensures we never face power issues. Their 24/7 support gives us peace of mind.',
    avatar: 'AN',
  },
];

const stats = [
  { icon: Star, value: '4.9/5', label: 'Average Rating' },
  { icon: ThumbsUp, value: '99%', label: 'Satisfaction Rate' },
  { icon: Users, value: '4,000+', label: 'Happy Customers' },
  { icon: Award, value: '500+', label: '5-Star Reviews' },
];

const ReviewsPage = () => {
  return (
    <>
      <PageHero
        title="Customer Reviews"
        subtitle="What our valued customers say about their experience with Hum Solar Services"
        breadcrumbs={[{ label: 'Reviews' }]}
        backgroundImage={heroSolar}
        showCTA
      />

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Detailed Customer Testimonials
            </h2>
            <p className="text-muted-foreground">
              Real stories from real customers who trusted us with their solar journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover"
              >
                <Quote className="w-10 h-10 text-secondary/30 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sliding Reviews */}
      <ReviewsSection />
    </>
  );
};

export default ReviewsPage;
