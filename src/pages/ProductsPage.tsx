import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import solarInverter from '@/assets/solar-inverter.jpg';
import solarBattery from '@/assets/solar-battery.jpg';
import solarPanel from '@/assets/solar-panel.jpg';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'inverters', name: 'Solar Inverters' },
  { id: 'batteries', name: 'Batteries' },
  { id: 'panels', name: 'Solar Panels' },
];

const products = [
  {
    id: 1,
    category: 'inverters',
    name: 'Growatt 5kW Hybrid Inverter',
    image: solarInverter,
    features: ['5kW capacity', 'Hybrid technology', 'WiFi monitoring', '5-year warranty'],
    description: 'High-efficiency hybrid inverter with smart monitoring capabilities for residential and small commercial applications.',
  },
  {
    id: 2,
    category: 'inverters',
    name: 'Solis 10kW On-Grid Inverter',
    image: solarInverter,
    features: ['10kW capacity', 'On-grid operation', 'Dual MPPT', '10-year warranty'],
    description: 'Premium on-grid inverter designed for commercial installations with maximum efficiency and reliability.',
  },
  {
    id: 3,
    category: 'inverters',
    name: 'Huawei 15kW Smart Inverter',
    image: solarInverter,
    features: ['15kW capacity', 'AI-powered', 'Smart grid ready', '10-year warranty'],
    description: 'Advanced smart inverter with AI optimization for large commercial and industrial solar systems.',
  },
  {
    id: 4,
    category: 'batteries',
    name: 'Pylontech 5kWh Lithium Battery',
    image: solarBattery,
    features: ['5kWh capacity', 'LiFePO4 technology', '6000+ cycles', '10-year warranty'],
    description: 'High-cycle lithium battery for reliable energy storage and backup power solutions.',
  },
  {
    id: 5,
    category: 'batteries',
    name: 'BYD 10kWh Premium Storage',
    image: solarBattery,
    features: ['10kWh capacity', 'Modular design', 'Safe chemistry', '10-year warranty'],
    description: 'Premium modular battery system expandable up to 100kWh for residential and commercial use.',
  },
  {
    id: 6,
    category: 'batteries',
    name: 'Tesla Powerwall 13.5kWh',
    image: solarBattery,
    features: ['13.5kWh capacity', 'Integrated inverter', 'Storm Watch', '10-year warranty'],
    description: 'Premium all-in-one home battery solution with intelligent storm preparation and backup.',
  },
  {
    id: 7,
    category: 'panels',
    name: 'JA Solar 550W Mono PERC',
    image: solarPanel,
    features: ['550W output', 'Mono PERC cells', '21.3% efficiency', '25-year warranty'],
    description: 'High-efficiency monocrystalline panels with excellent low-light performance.',
  },
  {
    id: 8,
    category: 'panels',
    name: 'Canadian Solar 580W BiHiKu7',
    image: solarPanel,
    features: ['580W output', 'Bifacial technology', '22.5% efficiency', '25-year warranty'],
    description: 'Premium bifacial panels generating power from both sides for maximum energy harvest.',
  },
  {
    id: 9,
    category: 'panels',
    name: 'LONGi 600W Hi-MO 6',
    image: solarPanel,
    features: ['600W output', 'N-type technology', '22.8% efficiency', '30-year warranty'],
    description: 'Industry-leading N-type panels with exceptional performance and longevity.',
  },
];

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Premium solar equipment from world-leading manufacturers"
        breadcrumbs={[{ label: 'Our Products' }]}
        backgroundImage={solarPanel}
        showCTA
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold capitalize">
                    {product.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
