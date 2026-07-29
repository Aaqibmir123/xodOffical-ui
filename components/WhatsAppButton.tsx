import Link from "next/link";
import { MessageCircle } from "lucide-react"; // Agar lucide-react installed hai, warna aap SVG bhi use kar sakte hain

export default function WhatsAppButton() {
const phoneNumber = "917501216555";
  const defaultMessage = "Hello, I want to inquire about your dispatch services."; // Optional pre-filled message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-soft-pulse fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
    >
      <MessageCircle className="w-7 h-7 fill-white" />
      
      <span className="absolute right-full mr-3 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </Link>
  );
}
