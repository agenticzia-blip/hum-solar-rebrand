import { useState } from 'react';
import PageHero from '@/components/PageHero';
import { MapPin, Zap, Calendar, ExternalLink } from 'lucide-react';
import residentialSolar from '@/assets/residential-solar.jpg';
import commercialSolar from '@/assets/commercial-solar.jpg';
import industrialSolar from '@/assets/industrial-solar.jpg';
import heroSolar from '@/assets/hero-solar.jpg';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'residential', name: 'Residential' },
  { id: 'commercial', name: 'Commercial' },
  { id: 'industrial', name: 'Industrial' },
];

const projects = [
  {
    id: 1,
    category: 'residential',
    title: '10kW Home Solar System',
    location: 'DHA Phase 2, Islamabad',
    capacity: '10 kW',
    date: '2024',
    image: residentialSolar,
    description: 'Complete residential solar installation with hybrid inverter and battery backup.',
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Office Building Solar',
    location: 'Blue Area, Islamabad',
    capacity: '50 kW',
    date: '2024',
    image: commercialSolar,
    description: 'Commercial rooftop installation for a corporate office building with net metering.',
  },
  {
    id: 3,
    category: 'industrial',
    title: 'Textile Factory Solar Farm',
    location: 'Faisalabad Industrial Zone',
    capacity: '500 kW',
    date: '2023',
    image: industrialSolar,
    description: 'Large-scale ground-mounted solar system for textile manufacturing facility.',
  },
  {
    id: 4,
    category: 'residential',
    title: '15kW Premium Home System',
    location: 'Bahria Town, Rawalpindi',
    capacity: '15 kW',
    date: '2024',
    image: heroSolar,
    description: 'High-end residential installation with premium panels and smart monitoring.',
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Shopping Mall Solar',
    location: 'Lahore',
    capacity: '200 kW',
    date: '2023',
    image: commercialSolar,
    description: 'Rooftop solar installation for major shopping complex with battery storage.',
  },
  {
    id: 6,
    category: 'industrial',
    title: 'Steel Mill Solar Project',
    location: 'Karachi Industrial Area',
    capacity: '1 MW',
    date: '2023',
    image: industrialSolar,
    description: 'Megawatt-scale solar installation for heavy industrial manufacturing.',
  },
  {
    id: 7,
    category: 'residential',
    title: 'Housing Society Installation',
    location: 'F-10, Islamabad',
    capacity: '8 kW',
    date: '2024',
    image: residentialSolar,
    description: 'Modern residential solar system with remote monitoring capabilities.',
  },
  {
    id: 8,
    category: 'commercial',
    title: 'Hospital Solar System',
    location: 'Rawalpindi',
    capacity: '100 kW',
    date: '2024',
    image: heroSolar,
    description: 'Critical power solar installation for healthcare facility with backup.',
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Projects"
        subtitle="Explore our portfolio of successful solar installations across Pakistan"
        breadcrumbs={[{ label: 'Projects' }]}
        backgroundImage={industrialSolar}
        showCTA
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '4,000+', label: 'Projects Completed' },
              { value: '60MW+', label: 'Total Capacity' },
              { value: '10+', label: 'Cities Covered' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

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

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-secondary" />
                      {project.capacity}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
