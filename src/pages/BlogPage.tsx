import { Link } from 'react-router-dom';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import heroSolar from '@/assets/hero-solar.jpg';
import residentialSolar from '@/assets/residential-solar.jpg';
import commercialSolar from '@/assets/commercial-solar.jpg';
import industrialSolar from '@/assets/industrial-solar.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Complete Guide to Net Metering in Pakistan 2024',
    excerpt: 'Learn everything about net metering in Pakistan, including the application process, benefits, requirements, and how to maximize your savings with grid-tied solar systems.',
    image: heroSolar,
    author: 'Hum Solar Team',
    date: 'January 15, 2024',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    id: 2,
    title: 'How Much Does Solar Installation Cost in Pakistan?',
    excerpt: 'A comprehensive breakdown of solar system costs in Pakistan for 2024, including panels, inverters, batteries, installation, and expected ROI calculations.',
    image: residentialSolar,
    author: 'Hum Solar Team',
    date: 'January 10, 2024',
    readTime: '6 min read',
    category: 'Cost Guide',
  },
  {
    id: 3,
    title: 'Top 5 Solar Panel Brands Available in Pakistan',
    excerpt: 'Compare the best solar panel brands available in Pakistan, including JA Solar, Canadian Solar, LONGi, Trina, and Jinko. Find out which is right for you.',
    image: commercialSolar,
    author: 'Hum Solar Team',
    date: 'January 5, 2024',
    readTime: '7 min read',
    category: 'Products',
  },
  {
    id: 4,
    title: 'Hybrid vs On-Grid Solar Systems: Which Should You Choose?',
    excerpt: 'Understanding the differences between hybrid and on-grid solar systems, their advantages, disadvantages, and which one suits your needs better.',
    image: industrialSolar,
    author: 'Hum Solar Team',
    date: 'December 28, 2023',
    readTime: '5 min read',
    category: 'Education',
  },
  {
    id: 5,
    title: 'Solar System Maintenance: Essential Tips for Longevity',
    excerpt: 'Practical tips for maintaining your solar system to ensure optimal performance and longevity. Learn about cleaning, monitoring, and when to call professionals.',
    image: heroSolar,
    author: 'Hum Solar Team',
    date: 'December 20, 2023',
    readTime: '4 min read',
    category: 'Maintenance',
  },
  {
    id: 6,
    title: 'Understanding Solar Inverters: Types and Features',
    excerpt: 'A detailed guide to solar inverters including on-grid, off-grid, and hybrid types. Learn about key features to consider when choosing an inverter.',
    image: residentialSolar,
    author: 'Hum Solar Team',
    date: 'December 15, 2023',
    readTime: '6 min read',
    category: 'Education',
  },
];

const BlogPage = () => {
  return (
    <>
      <PageHero
        title="Solar Energy Blog"
        subtitle="Expert insights, guides, and tips for your solar journey"
        breadcrumbs={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Featured Post */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
              <div className="h-80 lg:h-full">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button variant="default" asChild>
                  <Link to="#">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border card-hover group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
