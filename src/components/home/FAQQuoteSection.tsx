import { useState } from 'react';
import { ChevronDown, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const faqs = [
  {
    question: 'How much does a solar system cost in Pakistan?',
    answer: 'Solar system costs vary based on size and components. A typical 5kW residential system ranges from PKR 650,000-850,000, while commercial systems are priced per watt. Contact us for a detailed quote based on your requirements.',
  },
  {
    question: 'What is net metering and how does it work?',
    answer: 'Net metering allows you to sell excess electricity back to WAPDA/DISCO. When your solar panels produce more power than you use, the extra units are exported to the grid and credited to your account, reducing your bills significantly.',
  },
  {
    question: 'How long do solar panels last?',
    answer: 'Quality solar panels typically last 25-30 years with minimal degradation. Most manufacturers offer 25-year performance warranties. Our panels come with comprehensive warranties ensuring long-term performance.',
  },
  {
    question: 'What maintenance is required for solar systems?',
    answer: 'Solar systems require minimal maintenance. Regular cleaning of panels (every 2-4 weeks) and annual professional inspections are recommended. We offer comprehensive maintenance packages for worry-free operation.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Residential installations typically take 2-3 days, while commercial projects may take 1-2 weeks depending on system size. Net metering approval process takes an additional 4-6 weeks.',
  },
  {
    question: 'Do you provide financing options?',
    answer: 'Yes, we partner with leading banks to offer convenient financing options including easy installment plans. Contact our team to learn about current financing schemes and eligibility.',
  },
  {
    question: 'What happens during load shedding?',
    answer: 'With a hybrid system including battery backup, your home will continue to run on stored solar power during outages. We offer various battery solutions to match your backup requirements.',
  },
  {
    question: 'What warranty do you provide?',
    answer: 'We offer comprehensive warranties: 25 years on solar panels, 5-10 years on inverters, and 1-2 years on installation workmanship. Extended warranty packages are also available.',
  },
];

const FAQQuoteSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* FAQs */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Answers To Your Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-xl overflow-hidden bg-card"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quote Form */}
          <div>
            <div className="bg-primary rounded-2xl p-8 md:p-10 shadow-xl">
              <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
                Get Started
              </span>
              <h2 className="text-3xl font-display font-bold text-primary-foreground mb-6">
                Request a Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-secondary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-white/50 focus:border-secondary resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQQuoteSection;
