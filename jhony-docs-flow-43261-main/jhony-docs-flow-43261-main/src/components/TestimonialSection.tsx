import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import carlosAlmeida from "@/assets/carlos-almeida.png";
import anaLuiza from "@/assets/ana-luiza-martins.png";
import ricardoAlves from "@/assets/ricardo-alves.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Carlos Almeida",
    role: "Diretor da Imobiliária Nova Casa",
    image: carlosAlmeida,
    text: "Achei que fosse mais um software genérico, mas em uma semana meus corretores já estavam acessando tudo pelo celular. Mudou completamente nossa rotina."
  },
  {
    name: "Ana Luiza Martins",
    role: "Corretora de Imóveis",
    image: anaLuiza,
    text: "Como corretora, lido com documentos todos os dias e sempre tive receio de confiar arquivos tão importantes a alguém. Mas com a Realiza e com Jhony, esse medo acabou. Ele transmite uma segurança impressionante, é transparente em cada etapa e trata nossos documentos como se fossem dele. Hoje, posso dizer com tranquilidade: deixei tudo nas mãos certas. Tenho plena confiança na Realiza."
  },
  {
    name: "Ricardo Alves",
    role: "Gerente Administrativo Grupo Prime Imóveis",
    image: ricardoAlves,
    text: "Antes da Realiza, cheguei a pedir orçamento em outra empresa de digitalização. O valor era quase o dobro e ainda sem a segurança jurídica que a Realiza oferece. Aqui encontrei tecnologia de ponta, atendimento humano e o melhor custo benefício. O sistema é rápido, seguro e nos dá a tranquilidade de ter tudo organizado e protegido. Não troco a Realiza por nada."
  }
];

const TestimonialSection = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 16000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="relative animate-slide-up">
                    {/* Quote decoration */}
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="w-10 h-10 text-primary" />
                    </div>

                    <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 space-y-8 relative overflow-hidden">
                      {/* Background glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                      
                      <div className="relative space-y-6">
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>

                        {/* Testimonial text */}
                        <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed text-foreground">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center gap-4 pt-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                          />
                          <div>
                            <p className="font-semibold text-lg">{testimonial.name}</p>
                            <p className="text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
