import { Shield, FileCheck, Lock } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-before-after.png";
import realizaLogo from "@/assets/realiza-logo.png";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Quero%20meu%20diagn%C3%B3stico%20gratuito%20da%20Sociedade%20Jhony";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <img 
              src={realizaLogo} 
              alt="Realiza - Gestão da Informação" 
              className="h-16 lg:h-20 mx-auto lg:mx-0"
            />
            
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Quantas horas você e sua equipe{" "}
              <span className="gradient-text">perdem procurando documentos</span>{" "}
              que deveriam estar a um clique?
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforme pilhas de papel em um sistema digital inteligente, seguro e acessível em segundos.
            </p>

            <div className="space-y-4">
              <Button 
                size="lg" 
                variant="whatsapp" 
                className="text-lg px-8 py-6 h-auto w-full sm:w-auto"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <WhatsAppIcon />
                Agendar Diagnóstico Gratuito no WhatsApp
              </Button>

              <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                  ⏱️ Atendimento rápido
                </span>
                <span>•</span>
                <span>Sem compromisso</span>
                <span>•</span>
                <span>Diagnóstico gratuito em 15 minutos</span>
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Baseado em LGPD</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileCheck className="w-5 h-5 text-primary" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-5 h-5 text-primary" />
                <span>Compliance Jurídico</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img 
                src={heroImage} 
                alt="Antes e depois: caos documental transformado em organização digital" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
