import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Zap, ArrowRight } from 'lucide-react';
import industrialSolar from '@/assets/industrial-solar.jpg';

const appliances = [
  { name: 'Tube Light', watts: 40 },
  { name: 'Energy Savers', watts: 25 },
  { name: 'LED Bulbs', watts: 7 },
  { name: 'Fans', watts: 100 },
  { name: 'TVs', watts: 250 },
  { name: 'LED TVs 32"', watts: 50 },
  { name: 'LED TVs 55"', watts: 100 },
  { name: 'Washing Machines', watts: 800 },
  { name: 'Refrigerators', watts: 350 },
  { name: 'Computers', watts: 250 },
  { name: 'Laptops', watts: 65 },
  { name: 'Water Pumps 1HP', watts: 700 },
  { name: 'Irons', watts: 1000 },
  { name: 'Microwave Oven', watts: 1200 },
  { name: 'Electric Kettle', watts: 1500 },
  { name: 'Split ACs 1 Ton', watts: 1800 },
  { name: 'Split ACs 1.5 Ton', watts: 2500 },
  { name: 'Split ACs 2 Ton', watts: 3500 },
  { name: 'Split ACs 3.5 Ton', watts: 7500 },
  { name: 'Split ACs 4 Ton', watts: 8000 },
  { name: 'Inverter ACs 1 Ton', watts: 1000 },
  { name: 'Inverter ACs 1.5 Ton', watts: 1500 },
  { name: 'Inverter ACs 2 Ton', watts: 2000 },
];

const CalculatorPage = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    appliances.reduce((acc, app) => ({ ...acc, [app.name]: 0 }), {})
  );

  const updateQuantity = (name: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  const totalWatts = appliances.reduce(
    (sum, app) => sum + app.watts * (quantities[app.name] || 0),
    0
  );

  return (
    <>
      <PageHero
        title="Solar Calculator"
        subtitle="Calculate your solar system requirements"
        breadcrumbs={[{ label: 'Calculate' }]}
        backgroundImage={industrialSolar}
        showCTA
      />

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-3">
              Please Select Quantity of Appliances
            </h2>
            <p className="text-secondary text-base md:text-lg">
              Use the + and - buttons to add or remove appliances from your calculation
            </p>
          </div>

          {/* Table */}
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Table Header */}
            <div className="bg-primary text-primary-foreground px-6 py-4 grid grid-cols-3 gap-4">
              <span className="font-semibold">Appliances</span>
              <span className="font-semibold text-center">Watts</span>
              <span className="font-semibold text-center">Quantity</span>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {appliances.map((appliance) => (
                <div
                  key={appliance.name}
                  className="px-6 py-4 grid grid-cols-3 gap-4 items-center hover:bg-muted/30 transition-colors"
                >
                  <span className="text-secondary font-medium text-sm md:text-base">
                    {appliance.name}
                  </span>
                  <span className="text-foreground text-center text-sm md:text-base">
                    {appliance.watts}W
                  </span>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => updateQuantity(appliance.name, -1)}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold text-foreground">
                      {quantities[appliance.name]}
                    </span>
                    <button
                      onClick={() => updateQuantity(appliance.name, 1)}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Load */}
            <div className="px-6 py-5 bg-muted/50 flex items-center justify-between border-t border-border">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                <span className="text-secondary font-semibold text-base md:text-lg">
                  Total Load (in Watts)
                </span>
              </div>
              <div className="bg-card border border-border rounded-lg px-6 py-3">
                <span className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {totalWatts.toLocaleString()}
                </span>
                <span className="text-muted-foreground ml-1">W</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <Button variant="hero" size="xl" className="px-12" asChild>
              <Link to="/contact">
                GET A QUOTE
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorPage;
