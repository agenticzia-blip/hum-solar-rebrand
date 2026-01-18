import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';
import commercialSolar from '@/assets/commercial-solar.jpg';

const highlights = [
  '8+ Years of Industry Experience',
  '60MW+ Installed Solar Capacity',
  '4,000+ Residential & Commercial Installations',
  'Complete Net Metering Support',
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image & Video */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={commercialSolar}
                alt="Solar Installation"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-secondary-foreground ml-1" fill="currentColor" />
                </div>
              </button>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[240px]">
              <div className="text-4xl font-display font-bold text-primary mb-2">60MW+</div>
              <p className="text-muted-foreground text-sm">Solar Capacity Installed Across Pakistan</p>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
                From Vision To Installation{' '}
                <span className="text-primary">We Power It All</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Hum Solar Services is a leading solar energy provider offering domestic, commercial, industrial, and agricultural solar systems from 5kW to Megawatt scale. We provide complete net metering files and process assistance for hassle-free installation.
            </p>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/company">
                  Read More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
