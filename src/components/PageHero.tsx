import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
  backgroundImage?: string;
  showCTA?: boolean;
}

const PageHero = ({ title, subtitle, breadcrumbs, backgroundImage, showCTA = false }: PageHeroProps) => {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Image */}
      {backgroundImage ? (
        <>
          <img
            src={backgroundImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="container-custom relative z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary italic mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-6">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        )}
      </div>
    </section>
  );
};

export default PageHero;
