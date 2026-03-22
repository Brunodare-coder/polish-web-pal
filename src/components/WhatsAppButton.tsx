/**
 * ============================================
 * 🟢 WHATSAPP BUTTON - CONFIGURAÇÃO
 * ============================================
 * 
 * Para alterar o número do WhatsApp:
 * 1. Troque o valor da variável "phone" abaixo
 * 2. Use formato internacional SEM o "+" (ex: 5511999999999)
 *    - Brasil: 55 + DDD + número (ex: 5511999999999)
 *    - UK: 44 + número (ex: 442071013821)
 * 3. A mensagem padrão pode ser alterada na variável "message"
 * 
 * ============================================
 */
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // ⚠️ ALTERE AQUI: Coloque o número do WhatsApp da empresa (formato internacional, sem +)
  const phone = "7892826205";
  // ⚠️ ALTERE AQUI: Mensagem padrão que aparece quando o cliente abre o chat
  const message = encodeURIComponent("Hello! I'd like to get a free quote for my project.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 active:scale-95 glow-pulse"
      style={{ animationDuration: "2.5s" }}
    >
      <MessageCircle className="w-7 h-7 fill-white stroke-white" />
    </a>
  );
}
