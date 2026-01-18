import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import commercialSolar from '@/assets/commercial-solar.jpg';

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      {/* Video Section - Full Width outside container */}
      <div className="px-4 md:px-8 lg:px-12 mb-8 md:mb-12">
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <img
              src={commercialSolar}
              alt="Solar Installation"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <button className="absolute inset-0 flex items-center justify-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground ml-1" fill="currentColor" />
              </div>
            </button>
          </div>

          {/* Experience Badge - Bottom Right */}
          <div className="absolute bottom-0 right-0 md:bottom-4 md:right-4 bg-secondary p-4 md:p-6 rounded-tl-2xl md:rounded-2xl shadow-xl">
            <div className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground">8+</div>
            <p className="text-secondary-foreground/90 text-sm md:text-base font-medium">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom">

        <div className="max-w-3xl">
          <span className="inline-block text-secondary text-sm md:text-base font-semibold uppercase tracking-wider mb-3">
            ABOUT HUM SOLAR SERVICES
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
            From Vision To Installation{' '}
            <span className="text-primary">We Power It All</span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Hum Solar Services is your trusted partner for comprehensive solar solutions. We specialize in domestic, commercial, industrial, and agricultural solar systems, offering complete sales and services from 5kW to Megawatt installations. We also provide complete net metering files and process assistance for hassle-free installation.
          </p>

          <Button variant="default" size="lg" asChild>
            <Link to="/company">
              Read More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
