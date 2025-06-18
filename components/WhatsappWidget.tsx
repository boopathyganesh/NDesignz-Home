// components/WhatsappButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/8610933642"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed flex items-center justify-center gap-2 bottom-16 right-4 border-2 border-white bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-[999999]"
    >
      <FaWhatsapp size={24} />
      <p className='hidden md:flex'>Chat with Us</p>
    </a>
  );
}
