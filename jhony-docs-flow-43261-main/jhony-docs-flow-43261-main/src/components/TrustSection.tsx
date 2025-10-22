

const TrustSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Garantia Realiza</span>
            </h2>
            <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 lg:p-12">
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                Se em 30 dias sua equipe não reduzir o tempo de busca em pelo menos 80%, 
                <span className="font-bold text-primary"> ajustamos o sistema gratuitamente até atingir o resultado.</span>
              </p>
              <p className="text-lg text-muted-foreground mt-6">
                Porque a Realiza não vende tecnologia{" "}
                <span className="text-foreground font-semibold">vende tranquilidade.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
