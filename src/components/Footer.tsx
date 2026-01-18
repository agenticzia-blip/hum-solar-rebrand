import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Sun, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Company Profile', path: '/company' },
  { name: 'Our Products', path: '/products' },
  { name: 'Our Solutions', path: '/solutions' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact Us', path: '/contact' },
];

const services = [
  { name: 'Residential Solar', path: '/solutions' },
  { name: 'Commercial Solar', path: '/solutions' },
  { name: 'Industrial Solar', path: '/solutions' },
  { name: 'Net Metering', path: '/solutions' },
  { name: 'Maintenance & Support', path: '/solutions' },
];

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Sun className="w-7 h-7 text-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white">Hum Solar</span>
                <span className="text-xs text-muted-foreground font-medium">Services</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Leading solar energy solutions provider in Pakistan. We deliver high-quality solar systems for residential, commercial, and industrial sectors with complete net metering support.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+923331114522" className="flex items-start gap-3 text-muted-foreground hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p>+92 333 1114522</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:humservices1@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-secondary transition-colors">
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p>humservices1@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">Address</p>
                  <p>Office No 09 Meherban Tower, Block A Markaz F 18 Faisal Town, Islamabad, Pakistan</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Hum Solar Services | All Rights Reserved.</p>
          <p>Design & Developed By: Hum Digital Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
