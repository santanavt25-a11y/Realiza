import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const OfferSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Quero%20meu%20diagn%C3%B3stico%20gratuito%20da%20Sociedade%20Jhony";

  const benefits = [
    "Digitalização completa de documentos",
    "Organização e indexação automática",
    "Dashboard de busca por palavra-chave",
    "Backup em nuvem com conformidade LGPD",
    "Suporte e manutenção mensal"
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Digitalize sua imobiliária com{" "}
              <span className="gradient-text">segurança</span>{" "}
              e comece a economizar tempo ainda este mês.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A Realiza transforma seu acervo físico em um sistema digital inteligente com:
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-4 animate-slide-up">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 text-left bg-card border border-border rounded-xl p-4 max-w-2xl mx-auto"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Transition text */}
          <div className="animate-fade-in">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solicite um diagnóstico gratuito e descubra quanto tempo e dinheiro sua imobiliária pode estar perdendo hoje.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-4 animate-fade-in">
            <Button 
              size="lg" 
              variant="whatsapp" 
              className="text-xl px-12 py-8 h-auto w-full sm:w-auto"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <WhatsAppIcon />
              Agendar Diagnóstico Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
