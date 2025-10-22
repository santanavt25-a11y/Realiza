import solutionVideo from "@/assets/solution-video.mp4";

const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              A Transformação
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <span className="text-foreground font-semibold">Antes:</span> caos, atraso, papel e retrabalho.
              <br />
              <span className="text-foreground font-semibold">Depois:</span> digitalização segura, busca inteligente e agilidade real.
              <br /><br />
              Tudo em um sistema bonito, rápido e 100% adaptado à sua imobiliária.
            </p>
          </div>


          {/* Video */}
          <div className="animate-fade-in mt-12">
            <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
              <video 
                src={solutionVideo}
                controls
                className="w-full h-full object-cover"
                poster=""
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
