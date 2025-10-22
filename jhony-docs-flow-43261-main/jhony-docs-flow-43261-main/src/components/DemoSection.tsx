import { Search, Lock, Zap } from "lucide-react";

const DemoSection = () => {
  const features = [
    {
      icon: Search,
      text: "Busca por contrato em 3 segundos"
    },
    {
      icon: Lock,
      text: "Controle de acesso e trilha de auditoria"
    },
    {
      icon: Zap,
      text: "Zero papel, 100% agilidade"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Veja como funciona{" "}
              <span className="gradient-text">na prática</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Um painel simples, rápido e poderoso.
              <br />
              <span className="text-foreground font-semibold">Busque contratos, visualize registros e compartilhe documentos com segurança total.</span>
            </p>
          </div>

          {/* Video Demo */}
          <div className="animate-slide-up">
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <iframe
                src="https://www.loom.com/embed/81ded4ddc31e40ee8fda33cfcee64e5c"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                title="Demonstração do Sistema"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
