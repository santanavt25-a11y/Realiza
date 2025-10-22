import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso parar a operação pra implantar?",
      answer: "Não. A implantação ocorre em paralelo, sem interromper o trabalho da equipe. Fazemos tudo de forma gradual e organizada para que você continue operando normalmente."
    },
    {
      question: "E se meus documentos estiverem bagunçados?",
      answer: "Fazemos triagem, padronização e categorização automática via IA. Nosso sistema inteligente organiza tudo, independente do estado atual dos seus documentos."
    },
    {
      question: "Quanto custa?",
      answer: "A primeira etapa é gratuita. O diagnóstico mostra o ROI (retorno sobre investimento) antes de qualquer contrato. Você só decide investir depois de entender exatamente o valor que vai receber."
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
              Dúvidas <span className="gradient-text">rápidas</span>
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-heading text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
