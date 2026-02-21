export default function TrustBadgesSection() {
  const badges = [
    {
      image: '/assets/generated/trust-badge-1.dim_128x128.svg',
      title: 'Verified Platform',
    },
    {
      image: '/assets/generated/trust-badge-2.dim_128x128.svg',
      title: 'Secure Payments',
    },
    {
      image: '/assets/generated/trust-badge-3.dim_128x128.svg',
      title: 'Quality Service',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Thousands</h2>
          <p className="text-muted-foreground">Your safety and satisfaction are our top priorities</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {badges.map((badge, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <img
                src={badge.image}
                alt={badge.title}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
              <p className="text-sm font-medium text-center">{badge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
