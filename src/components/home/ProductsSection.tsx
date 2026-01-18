import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import solarInverter from '@/assets/solar-inverter.jpg';
import solarBattery from '@/assets/solar-battery.jpg';
import solarPanel from '@/assets/solar-panel.jpg';

const products = [
  {
    title: 'Solar Inverters',
    description: 'High-efficiency inverters from leading brands for reliable power conversion.',
    image: solarInverter,
    link: '/products?category=inverters',
  },
  {
    title: 'Batteries',
    description: 'Energy storage solutions for backup power and off-grid applications.',
    image: solarBattery,
    link: '/products?category=batteries',
  },
  {
    title: 'Solar Panels',
    description: 'Premium monocrystalline and polycrystalline panels with 25-year warranty.',
    image: solarPanel,
    link: '/products?category=panels',
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Quality Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Our Products
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with world-renowned manufacturers to bring you the highest quality solar equipment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group relative rounded-2xl overflow-hidden shadow-lg card-hover aspect-[4/5]"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-secondary transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                  View Products
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold">0{index + 1}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
