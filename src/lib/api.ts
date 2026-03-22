/**
 * API Configuration
 * 
 * Configure the BASE_URL to point to your PHP backend.
 * Example: "https://azzurrocontractors.com/api"
 * 
 * The PHP backend should expose these endpoints:
 * 
 * GET  /testimonials.php  — Returns JSON array of approved testimonials
 *   Response: [{ id, name, location, text, rating, approved, created_at }]
 * 
 * POST /testimonials.php  — Submit a new testimonial (pending approval)
 *   Body: { name, location, text, rating }
 *   Response: { success: true, message: "..." }
 * 
 * POST /contact.php       — Submit contact/quote form
 *   Body: { name, email, phone, source, details }
 *   Response: { success: true, message: "..." }
 */

// ⚠️ CHANGE THIS to your actual PHP backend URL
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
