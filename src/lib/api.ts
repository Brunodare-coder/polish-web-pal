/**
 * ============================================
 * 🔧 API CONFIGURATION - BACKEND PHP
 * ============================================
 * 
 * COMO CONFIGURAR:
 * 
 * 1. Crie uma pasta "api" no seu servidor (ex: azzurrocontractors.com/api/)
 * 
 * 2. Crie os seguintes arquivos PHP dentro dessa pasta:
 * 
 *    📄 testimonials.php
 *       - GET:  Retorna JSON com depoimentos aprovados
 *         Resposta: [{ "id": 1, "name": "...", "location": "...", "text": "...", "rating": 5 }]
 *       - POST: Recebe novo depoimento para aprovação do admin
 *         Body:  { "name": "...", "location": "...", "text": "...", "rating": 5 }
 *         Resposta: { "success": true, "message": "Review submitted" }
 * 
 *    📄 contact.php
 *       - POST: Recebe dados do formulário de contato/orçamento
 *         Body:  { "name": "...", "email": "...", "phone": "...", "source": "...", "details": "..." }
 *         Resposta: { "success": true, "message": "Message sent" }
 * 
 * 3. Configure a URL base de uma dessas formas:
 * 
 *    OPÇÃO A - Direto no código (mais simples):
 *      Altere a linha abaixo trocando "" pela URL do seu backend:
 *      export const API_BASE_URL = "https://azzurrocontractors.com/api";
 * 
 *    OPÇÃO B - Variável de ambiente:
 *      Crie um arquivo .env na raiz do projeto com:
 *      VITE_API_URL=https://azzurrocontractors.com/api
 * 
 * 4. Sem a URL configurada, o site funciona normalmente com dados estáticos.
 * 
 * ============================================
 */

// ⚠️ ALTERE AQUI: Coloque a URL do seu backend PHP (ou use VITE_API_URL no .env)
export const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export async function fetchTestimonials() {
  if (!API_BASE_URL) return null; // Falls back to static data
  
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials.php`);
    if (!res.ok) throw new Error("Failed to fetch testimonials");
    return await res.json();
  } catch (err) {
    console.warn("Could not fetch testimonials from API, using static data:", err);
    return null;
  }
}

export async function submitTestimonial(data: {
  name: string;
  location: string;
  text: string;
  rating: number;
}) {
  if (!API_BASE_URL) throw new Error("API not configured");
  
  const res = await fetch(`${API_BASE_URL}/testimonials.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) throw new Error("Failed to submit testimonial");
  return await res.json();
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  source: string;
  details: string;
}) {
  if (!API_BASE_URL) throw new Error("API not configured");
  
  const res = await fetch(`${API_BASE_URL}/contact.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!res.ok) throw new Error("Failed to submit contact form");
  return await res.json();
}
