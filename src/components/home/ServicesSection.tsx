import { Link } from 'react-router-dom';
import { Building2, Factory, Home, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import commercialSolar from '@/assets/commercial-solar.jpg';
import industrialSolar from '@/assets/industrial-solar.jpg';
import residentialSolar from '@/assets/residential-solar.jpg';

const services = [
  {
    icon: Building2,
    title: 'Commercial Solar Solutions',
    description: 'Reduce operating costs and carbon footprint with our custom commercial solar installations designed for businesses of all sizes.',
    image: commercialSolar,
    link: '/solutions',
  },
  {
    icon: Factory,
    title: 'Industrial Solar Solutions',
    description: 'Large-scale solar systems for factories and industrial complexes. Maximize energy independence with MW-scale installations.',
    image: industrialSolar,
    link: '/solutions',
  },
  {
    icon: Home,
    title: 'Residential Solar Solutions',
    description: 'Power your home with clean energy. Complete residential solar packages with net metering and battery backup options.',
    image: residentialSolar,
    link: '/solutions',
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solar energy solutions tailored to meet your specific needs, from residential homes to large industrial facilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover border border-border"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-secondary flex items-center justify-center shadow-glow">
                  <service.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-display font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
