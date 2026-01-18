import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

const PageHero = ({ title, subtitle, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4">
            <Link to="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-secondary transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-secondary">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
