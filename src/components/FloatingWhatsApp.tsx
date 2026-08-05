import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenConsultation: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenConsultation }) => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Main Floating Button */}
      <div className="relative">
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>

        <button
          onClick={onOpenConsultation}
          className="bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white p-4 rounded-full shadow-2xl shadow-emerald-900/40 border-2 border-white/80 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
          title="دردشة مباشرة عبر الواتساب - 0567157760"
        >
          <MessageCircle className="w-8 h-8 fill-white/20 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};

