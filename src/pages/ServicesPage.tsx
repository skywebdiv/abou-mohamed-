import React from 'react';
import { NavPage } from '../types';
import { SERVICES, OFFICE_INFO } from '../data/officeData';
import { 
  HeartHandshake, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  ShieldCheck, 
  FileCheck2, 
  Stamp, 
  ShieldAlert,
  ChevronLeft
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: NavPage) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Services Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black text-[#1B4D3E] bg-[#E7F0ED] px-4 py-1.5 rounded-full border border-[#D1E1DA]">
          خدمات مكتب أبو محمد الرسمية
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1B4D3E] font-['Cairo']">
          خدماتنا المتميزة في تصاريح وتوثيق الزواج
        </h1>
        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
          نقدم باقة متكاملة من الخدمات الاستشارية والإجرائية لمتابعة كافة معاملات تصاريح الزواج في السعودية، مع الالتزام الكامل بمبدأ <strong className="text-[#1B4D3E]">الدفع بعد الإنجاز والتوثيق</strong>.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className="bg-white rounded-3xl border border-[#D1E1DA] shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            <div className="space-y-4">
              
              <div className="flex items-center justify-between gap-2 border-b border-[#D1E1DA] pb-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold shadow shrink-0">
                  <HeartHandshake className="w-8 h-8" />
                </div>

                <div className="text-left">
                  <span className="inline-flex items-center gap-1 text-xs font-bold bg-[#E7F0ED] text-[#1B4D3E] px-3 py-1 rounded-full border border-[#D1E1DA]">
                    <Clock className="w-3.5 h-3.5" />
                    {service.estimatedDays}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#1B4D3E] font-['Cairo'] leading-snug">
                {service.title}
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {service.fullDesc}
              </p>

              {/* Requirements List */}
              <div className="bg-[#E7F0ED]/60 p-5 rounded-2xl border border-[#D1E1DA] space-y-3">
                <h4 className="text-xs font-bold text-[#1B4D3E] uppercase tracking-wider flex items-center gap-1.5">
                  <FileCheck2 className="w-4 h-4 text-[#1B4D3E]" />
                  <span>المستندات المطلوبة مسبقاً:</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 font-semibold">
                  {service.requiredDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-[#D1E1DA]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4D3E] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Unique Features */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#1B4D3E]">مزايا الخدمة لدى مكتبنا:</h4>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  {service.features.map((feat, idx) => (
                    <span key={idx} className="bg-[#E7F0ED] text-[#1B4D3E] px-3 py-1 rounded-lg border border-[#D1E1DA]">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Service Action Bar */}
            <div className="pt-6 border-t border-[#D1E1DA] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#E7F0ED]/50 p-4 rounded-2xl">
              <div>
                <span className="block text-[11px] text-slate-600 font-semibold">شرط الدفع:</span>
                <span className="text-xs font-bold text-slate-900 bg-amber-300/80 px-2.5 py-0.5 rounded border border-amber-400">
                  {service.paymentNote}
                </span>
              </div>

              <button
                onClick={() => onOpenConsultation(service.title)}
                className="w-full sm:w-auto bg-[#1B4D3E] hover:bg-[#12372c] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>اطلب الخدمة عبر الواتساب</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Trust Callout */}
      <div className="bg-[#1B4D3E] text-white p-8 rounded-3xl shadow-md border border-emerald-700/50 text-center space-y-4">
        <ShieldCheck className="w-12 h-12 text-amber-300 mx-auto" />
        <h3 className="text-2xl font-black font-['Cairo']">
          لم تجد الخدمة المطلوبة أو لديك حالة خاصة؟
        </h3>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl mx-auto font-medium">
          فريق مكتب أبو محمد مستعد لمراجعة واستقبال جميع الاستفسارات والحالات الخاصة لمعاملات تصاريح الزواج مجاناً.
        </p>
        <button
          onClick={onOpenConsultation}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-8 py-3.5 rounded-2xl shadow inline-flex items-center gap-2 transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950/20" />
          <span>استشارة خاصة ومباشرة عبر الواتساب (0567157760)</span>
        </button>
      </div>

    </div>
  );
};
