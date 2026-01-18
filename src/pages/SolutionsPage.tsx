import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Home, Building2, Factory, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import residentialSolar from '@/assets/residential-solar.jpg';
import commercialSolar from '@/assets/commercial-solar.jpg';
import industrialSolar from '@/assets/industrial-solar.jpg';
import heroSolar from '@/assets/hero-solar.jpg';

const solutions = [
  {
    id: 'residential',
    icon: Home,
    title: 'Residential Solar Solutions',
    image: residentialSolar,
    description: 'Power your home with clean, renewable energy and dramatically reduce your electricity bills.',
    features: [
      '5kW to 15kW system sizes',
      'Hybrid and on-grid options',
      'Battery backup available',
      'Complete net metering support',
      'Smart monitoring apps',
      '25-year panel warranty',
    ],
    benefits: [
      'Reduce electricity bills by 70-90%',
      'Increase property value',
      'Protection from load shedding',
      'Contribute to cleaner environment',
    ],
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial Solar Solutions',
    image: commercialSolar,
    description: 'Reduce operating costs and demonstrate environmental leadership with our commercial solar solutions.',
    features: [
      '15kW to 500kW+ systems',
      'Rooftop and ground mount options',
      'Carport solar structures',
      'Energy management systems',
      'Remote monitoring & control',
      'Flexible financing options',
    ],
    benefits: [
      'Significant operating cost reduction',
      'Enhanced brand image',
      'Tax benefits and incentives',
      'Long-term energy security',
    ],
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Solar Solutions',
    image: industrialSolar,
    description: 'Large-scale solar installations for factories and industrial complexes requiring MW-level power.',
    features: [
      '500kW to multi-MW capacity',
      'Ground-mounted solar farms',
      'Industrial rooftop systems',
      'High-voltage grid integration',
      '24/7 monitoring & support',
      'Custom engineering solutions',
    ],
    benefits: [
      'Massive cost savings',
      'Energy independence',
      'Carbon footprint reduction',
      'Stable energy pricing',
    ],
  },
  {
    id: 'netmetering',
    icon: FileCheck,
    title: 'Net Metering Services',
    image: heroSolar,
    description: 'Complete net metering file preparation and approval process handling with DISCO coordination.',
    features: [
      'Application preparation',
      'Technical documentation',
      'DISCO coordination',
      'Meter installation support',
      'Agreement processing',
      'Post-approval support',
    ],
    benefits: [
      'Sell excess power to grid',
      'Earn credits on bills',
      'Hassle-free process',
      'Expert guidance throughout',
    ],
  },
];

const SolutionsPage = () => {
  return (
    <>
      <PageHero
        title="Our Solutions"
        subtitle="Comprehensive solar energy solutions for every need"
        breadcrumbs={[{ label: 'Our Solutions' }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              id={solution.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {solution.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {solution.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-3">Features</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="default" size="lg" asChild>
                  <Link to="/contact">
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SolutionsPage;
