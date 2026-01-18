import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.jpg';

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={ctaBackground}
          alt="Solar Installation Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-primary/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Harness Solar Power for a{' '}
            <span className="text-secondary">Brighter Future</span>
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl">
            Join thousands of homes and businesses already saving money and the environment with our premium solar solutions. Get a free consultation today!
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <a
              href="tel:+923006233914"
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm text-white/60">Call Us Anytime</p>
                <p className="text-xl font-display font-bold text-white group-hover:text-secondary transition-colors">
                  +92 300 6233914
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
    </section>
  );
};

export default CTASection;
