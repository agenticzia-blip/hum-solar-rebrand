import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, Zap, PiggyBank, Clock, Sun } from 'lucide-react';

const CalculatorPage = () => {
  const [units, setUnits] = useState('');
  const [systemType, setSystemType] = useState('residential');
  const [results, setResults] = useState<null | {
    systemSize: number;
    cost: { min: number; max: number };
    savings: number;
    payback: number;
  }>(null);

  const calculate = () => {
    const monthlyUnits = parseInt(units) || 0;
    const systemSize = Math.ceil(monthlyUnits / 120);
    const pricePerKw = systemType === 'residential' ? 130000 : 115000;
    const costMin = systemSize * pricePerKw * 0.9;
    const costMax = systemSize * pricePerKw * 1.1;
    const monthlySavings = monthlyUnits * 45;
    const paybackYears = ((costMin + costMax) / 2) / (monthlySavings * 12);

    setResults({
      systemSize,
      cost: { min: costMin, max: costMax },
      savings: monthlySavings,
      payback: Math.round(paybackYears * 10) / 10,
    });
  };

  return (
    <>
      <PageHero
        title="Solar Calculator"
        subtitle="Estimate your solar system size, cost, and savings"
        breadcrumbs={[{ label: 'Calculate' }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Calculator className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">Solar Savings Calculator</h2>
                  <p className="text-muted-foreground">Enter your details for an instant estimate</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Monthly Electricity Units (kWh)</label>
                  <Input
                    type="number"
                    placeholder="e.g., 500"
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                    className="h-14 text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">System Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    {['residential', 'commercial'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setSystemType(type)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          systemType === type
                            ? 'border-primary bg-primary/5 text-primary'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <span className="capitalize font-semibold">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="hero" size="xl" className="w-full" onClick={calculate}>
                  <Sun className="w-5 h-5 mr-2" />
                  Calculate Savings
                </Button>
              </div>

              {results && (
                <div className="mt-10 pt-10 border-t border-border">
                  <h3 className="text-xl font-display font-bold text-foreground mb-6">Your Estimated Results</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-xl">
                      <Zap className="w-8 h-8 text-primary mb-3" />
                      <p className="text-sm text-muted-foreground">Recommended System Size</p>
                      <p className="text-3xl font-display font-bold text-foreground">{results.systemSize} kW</p>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl">
                      <Calculator className="w-8 h-8 text-secondary mb-3" />
                      <p className="text-sm text-muted-foreground">Estimated Cost</p>
                      <p className="text-2xl font-display font-bold text-foreground">
                        PKR {(results.cost.min / 1000).toFixed(0)}K - {(results.cost.max / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl">
                      <PiggyBank className="w-8 h-8 text-success mb-3" />
                      <p className="text-sm text-muted-foreground">Monthly Savings</p>
                      <p className="text-3xl font-display font-bold text-foreground">PKR {results.savings.toLocaleString()}</p>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-xl">
                      <Clock className="w-8 h-8 text-accent mb-3" />
                      <p className="text-sm text-muted-foreground">Payback Period</p>
                      <p className="text-3xl font-display font-bold text-foreground">{results.payback} Years</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorPage;
