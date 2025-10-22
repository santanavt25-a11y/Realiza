import { TrendingDown, DollarSign, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      metric: "⏱",
      title: "80% menos tempo gasto procurando documentos",
      description: ""
    },
    {
      icon: DollarSign,
      metric: "🔒",
      title: "Segurança LGPD garantida",
      description: ""
    },
    {
      icon: TrendingUp,
      metric: "☁️",
      title: "Acesso de qualquer lugar",
      description: ""
    },
    {
      icon: TrendingUp,
      metric: "📈",
      title: "Mais produtividade, menos erro humano",
      description: ""
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              A Prova
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4 h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 text-center">
                  <div className="text-5xl">
                    {benefit.metric}
                  </div>
                  <p className="font-semibold text-lg leading-tight">
                    {benefit.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
