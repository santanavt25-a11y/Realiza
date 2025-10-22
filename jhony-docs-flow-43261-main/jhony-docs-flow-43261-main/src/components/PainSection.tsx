

const PainSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              A Dor
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Cada documento perdido custa tempo, dinheiro e credibilidade.
              <br />
              Em uma imobiliária, 15 minutos procurando um contrato viram horas de retrabalho por semana e isso antes de somar o estresse com auditorias, erros e clientes esperando.
              <br /><br />
              <span className="text-foreground font-semibold">O problema não é falta de esforço. É falta de sistema.</span>
            </p>
            <p className="text-xl sm:text-2xl font-heading font-bold text-destructive mt-8">
              "Enquanto você procura um contrato, o concorrente já assinou outro."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainSection;
