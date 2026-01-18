import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Company Profile', path: '/company' },
  { name: 'Our Products', path: '/products' },
  { name: 'Our Solutions', path: '/solutions' },
  { name: 'Projects', path: '/projects' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Blog', path: '/blog' },
  { name: 'Calculate', path: '/calculator' },
  { name: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+923331114522" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              +92 333 1114522
            </a>
            <a href="mailto:humservices1@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              humservices1@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Office No 09 Meherban Tower, Block A Markaz F 18, Islamabad</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-card'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Company Name */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-secondary shadow-md bg-white p-1 flex-shrink-0">
                <img src={logo} alt="Hum Solar Services" className="w-full h-full object-contain rounded-full" />
              </div>
              <span className="font-display font-bold text-base md:text-lg text-primary">
                Hum Solar Services
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="hero" asChild>
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <nav className="container-custom py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="hero" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
