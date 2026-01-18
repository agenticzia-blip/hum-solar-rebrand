import PageHero from '@/components/PageHero';
import { Target, Eye, Heart, MapPin, Award, Users, Zap, Building2 } from 'lucide-react';
import commercialSolar from '@/assets/commercial-solar.jpg';
import industrialSolar from '@/assets/industrial-solar.jpg';

const values = [
  { icon: Award, title: 'Quality', description: 'We use only premium components from trusted manufacturers.' },
  { icon: Users, title: 'Customer First', description: 'Your satisfaction is our top priority in every project.' },
  { icon: Zap, title: 'Innovation', description: 'We stay updated with the latest solar technology trends.' },
  { icon: Heart, title: 'Integrity', description: 'Honest pricing and transparent communication always.' },
];

const serviceAreas = [
  'Islamabad', 'Rawalpindi', 'Lahore', 'Karachi', 'Faisalabad',
  'Multan', 'Peshawar', 'Quetta', 'Sialkot', 'Gujranwala',
];

const CompanyPage = () => {
  return (
    <>
      <PageHero
        title="Company Profile"
        subtitle="Your trusted partner in solar energy solutions since 2016"
        breadcrumbs={[{ label: 'Company Profile' }]}
        backgroundImage={commercialSolar}
        showCTA
      />

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                About Hum Solar Services
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Leading Solar Energy Solutions Provider in Pakistan
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hum Solar Services is a premier solar energy company dedicated to providing high-quality, reliable, and cost-effective solar solutions for residential, commercial, industrial, and agricultural sectors across Pakistan.
                </p>
                <p>
                  Established with a vision to make clean energy accessible to everyone, we have successfully installed over 60MW of solar capacity through 4,000+ projects. Our team of certified professionals ensures every installation meets international quality standards.
                </p>
                <p>
                  We offer complete end-to-end solutions including system design, equipment supply, professional installation, net metering assistance, and comprehensive after-sales support. Our partnerships with leading manufacturers ensure you get the best products at competitive prices.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={commercialSolar}
                alt="Solar Installation"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-2xl shadow-glow">
                <div className="text-4xl font-display font-bold text-secondary-foreground">8+</div>
                <p className="text-secondary-foreground/80 text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To accelerate Pakistan's transition to clean energy by providing affordable, reliable, and high-quality solar solutions. We aim to reduce electricity costs for our customers while contributing to a sustainable future.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become Pakistan's most trusted solar energy company, leading the nation's renewable energy revolution. We envision a future where every home and business is powered by clean, sustainable solar energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-2xl shadow-lg border border-border text-center card-hover">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
                Nationwide Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Service Areas
              </h2>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                We provide solar installation and services across Pakistan. Our teams are strategically located to ensure quick response times and excellent service quality throughout the country.
              </p>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((area, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm backdrop-blur-sm"
                  >
                    <MapPin className="w-4 h-4 text-secondary" />
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={industrialSolar}
                alt="Industrial Solar"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyPage;
