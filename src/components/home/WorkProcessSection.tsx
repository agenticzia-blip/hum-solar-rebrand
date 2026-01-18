import { ClipboardCheck, PenTool, Wrench, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Consultation & Site Survey',
    description: 'Our experts assess your energy needs and evaluate your site for optimal solar panel placement.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Customized System Design',
    description: 'We design a tailored solar solution based on your consumption patterns and budget requirements.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Professional Installation',
    description: 'Our certified technicians install your system with precision, ensuring maximum efficiency and safety.',
  },
  {
    icon: HeadphonesIcon,
    number: '04',
    title: 'Support & Maintenance',
    description: 'Ongoing monitoring, maintenance, and customer support to keep your system performing optimally.',
  },
];

const WorkProcessSection = () => {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Work Process
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined approach to delivering exceptional solar energy solutions from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-border z-0">
                  <div className="absolute right-0 -top-1 w-3 h-3 border-t-2 border-r-2 border-primary rotate-45" />
                </div>
              )}

              {/* Card */}
              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-lg border border-border card-hover text-center">
                {/* Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;
