import { useEffect, useState } from 'react';

const categories = [
  {
    name: 'Factory Work',
    image: '/assets/generated/category-factory.dim_96x96.svg',
    description: 'Manufacturing & production workers',
    color: 'from-blue-500 to-indigo-600',
    workers: '5,000+',
  },
  {
    name: 'School Staff',
    image: '/assets/generated/category-school.dim_96x96.svg',
    description: 'Teachers, helpers & support staff',
    color: 'from-purple-500 to-pink-600',
    workers: '3,200+',
  },
  {
    name: 'Construction',
    image: '/assets/generated/category-construction.dim_96x96.svg',
    description: 'Skilled & unskilled workers',
    color: 'from-orange-500 to-red-600',
    workers: '4,800+',
  },
  {
    name: 'Helpers',
    image: '/assets/generated/category-helpers.dim_96x96.svg',
    description: 'General helpers & assistants',
    color: 'from-green-500 to-teal-600',
    workers: '6,500+',
  },
  {
    name: 'Drivers',
    image: '/assets/generated/category-drivers.dim_96x96.svg',
    description: 'Professional drivers',
    color: 'from-cyan-500 to-blue-600',
    workers: '4,200+',
  },
  {
    name: 'Cleaners',
    image: '/assets/generated/category-cleaners.dim_96x96.svg',
    description: 'Cleaning & housekeeping',
    color: 'from-pink-500 to-rose-600',
    workers: '5,100+',
  },
  {
    name: 'Technicians',
    image: '/assets/generated/category-technicians.dim_96x96.svg',
    description: 'Skilled technical workers',
    color: 'from-violet-500 to-indigo-600',
    workers: '2,900+',
  },
];

export default function WorkerCategoriesGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('categories');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" className="py-20 bg-gradient-to-b from-muted/30 via-white to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Browse Categories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-slate-800 bg-clip-text text-transparent">
            Find Workers by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our diverse range of worker categories to find the perfect match for your needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-4 md:p-6 rounded-2xl border-2 border-transparent hover:border-transparent bg-white hover:bg-gradient-to-br hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative flex flex-col items-center text-center space-y-3">
                {/* Icon with gradient */}
                <div className="relative">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <img src={category.image} alt={category.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  </div>
                  {/* Worker count badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-[10px] font-bold text-white">{category.workers.split('+')[0][0]}</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-bold text-sm md:text-base group-hover:text-trust-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{category.description}</p>
                </div>

                {/* Worker count */}
                <div className="pt-2">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                    {category.workers} Workers
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-trust-blue to-trust-green text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
