import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our solar experts today"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', content: '+92 333 1114522', href: 'tel:+923331114522' },
                { icon: Mail, title: 'Email', content: 'humservices1@gmail.com', href: 'mailto:humservices1@gmail.com' },
                { icon: MapPin, title: 'Address', content: 'Office No 09 Meherban Tower, Block A Markaz F 18 Faisal Town, Islamabad, Pakistan' },
                { icon: Clock, title: 'Hours', content: 'Mon - Sat: 9:00 AM - 6:00 PM' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-card rounded-xl shadow-lg border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.content}</a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="h-12" />
                    <Input placeholder="Phone Number *" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="h-12" />
                  </div>
                  <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="h-12" />
                  <Textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.9!2d73.0!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQyJzAwLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
