import { Instagram, MessageCircle } from "lucide-react";
import realizaLogo from "@/assets/realiza-logo.png";

const Footer = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Quero%20meu%20diagn%C3%B3stico%20gratuito%20da%20Sociedade%20Jhony";

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src={realizaLogo} 
              alt="Realiza Gestão da Informação" 
              className="h-14"
            />
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="#privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contato WhatsApp
            </a>
            <a 
              href="https://instagram.com/realiza"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Realiza - Gestão da Informação. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
