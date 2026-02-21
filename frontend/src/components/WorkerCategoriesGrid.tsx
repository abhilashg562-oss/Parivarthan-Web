const categories = [
  {
    name: 'Factory Work',
    image: '/assets/generated/category-factory.dim_96x96.svg',
    description: 'Manufacturing & production workers',
  },
  {
    name: 'School Staff',
    image: '/assets/generated/category-school.dim_96x96.svg',
    description: 'Teachers, helpers & support staff',
  },
  {
    name: 'Construction Labor',
    image: '/assets/generated/category-construction.dim_96x96.svg',
    description: 'Skilled & unskilled construction workers',
  },
  {
    name: 'Helpers',
    image: '/assets/generated/category-helpers.dim_96x96.svg',
    description: 'General helpers & assistants',
  },
  {
    name: 'Drivers',
    image: '/assets/generated/category-drivers.dim_96x96.svg',
    description: 'Professional drivers for all vehicles',
  },
  {
    name: 'Cleaners',
    image: '/assets/generated/category-cleaners.dim_96x96.svg',
    description: 'Cleaning & housekeeping staff',
  },
  {
    name: 'Technicians',
    image: '/assets/generated/category-technicians.dim_96x96.svg',
    description: 'Skilled technical workers',
  },
];

export default function WorkerCategoriesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Worker Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the right worker for any job across multiple categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-2 border-border hover:border-trust-blue/50 bg-card hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-trust-blue/10 to-trust-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <img src={category.image} alt={category.name} className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-trust-blue transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
