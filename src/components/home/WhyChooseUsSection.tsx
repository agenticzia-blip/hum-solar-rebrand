import { Users, PiggyBank, Shield, Award, Settings, HeartHandshake } from 'lucide-react';
import solarPanel from '@/assets/solar-panel.jpg';

const reasons = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with years of experience in solar installations.',
  },
  {
    icon: PiggyBank,
    title: 'Cost Efficiency',
    description: 'Competitive pricing with maximum ROI and significant energy savings.',
  },
  {
    icon: Award,
    title: 'High-Quality Equipment',
    description: 'Premium components from world-leading manufacturers with warranty.',
  },
  {
    icon: Shield,
    title: 'Safety & Compliance',
    description: 'All installations meet international safety standards and local regulations.',
  },
  {
    icon: Settings,
    title: 'Tailored Solutions',
    description: 'Custom designs to match your unique energy requirements and budget.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Satisfaction',
    description: '4,000+ happy customers with 5-star ratings and referrals.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
              Why Choose <span className="text-secondary">Hum Solar Services</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <reason.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={solarPanel}
                alt="Solar Panel Close-up"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-secondary p-6 rounded-2xl shadow-glow text-secondary-foreground">
              <div className="text-4xl font-display font-bold mb-1">99%</div>
              <p className="text-sm font-medium">Customer Satisfaction</p>
            </div>

            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full -z-10 animate-pulse-soft" />
            <div className="absolute bottom-20 right-8 w-16 h-16 bg-secondary/30 rounded-full -z-10 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
