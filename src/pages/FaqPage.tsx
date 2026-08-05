import React, { useState } from 'react';
import { NavPage } from '../types';
import { FAQS, OFFICE_INFO } from '../data/officeData';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

interface FaqPageProps {
  onNavigate?: (page: NavPage) => void;
  onOpenConsultation: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const filteredFaqs = FAQS.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* FAQ Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black text-[#1B4D3E] bg-[#E7F0ED] px-4 py-1.5 rounded-full border border-[#D1E1DA]">
          مركز الدعم والإجابات المباشرة
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1B4D3E] font-['Cairo']">
          الأسئلة الشائعة حول تصاريح الزواج
        </h1>
        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
          إجابات شاملة ودقيقة لكافة تساؤلات عملائنا الكرام حول طريقة العمل والشروط وبنود الخصوصية وضمانة <strong className="text-[#1B4D3E]">الدفع بعد الإنجاز</strong>.
        </p>
      </div>

      {/* Search Input Filter */}
      <div className="relative max-w-xl mx-auto">
        <Search className="w-5 h-5 text-slate-400 absolute right-4 top-3.5" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ابحث عن سؤالك هنا (مثلاً: الدفع، الشروط، المدة، الخصوصية)..."
          className="w-full pl-4 pr-12 py-3.5 rounded-2xl border border-[#D1E1DA] text-sm focus:ring-2 focus:ring-[#1B4D3E] focus:border-[#1B4D3E] outline-none shadow-sm bg-white"
        />
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#D1E1DA] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 text-right font-bold text-[#1B4D3E] text-base sm:text-lg font-['Cairo'] flex items-center justify-between gap-4 hover:bg-[#E7F0ED]/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#E7F0ED] text-[#1B4D3E] flex items-center justify-center shrink-0 font-bold text-xs">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#1B4D3E] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium border-t border-[#D1E1DA] bg-[#E7F0ED]/30">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold text-[#1B4D3E] bg-[#E7F0ED] px-2.5 py-0.5 rounded border border-[#D1E1DA] inline-block">
                        التصنيف: {faq.category}
                      </span>
                    </div>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white rounded-3xl border border-[#D1E1DA] p-8 space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="font-bold text-slate-700">لم نجد نتائج مطابقة لمصطلح البحث.</p>
            <p className="text-xs text-slate-500">يمكنك التواصل مع فريقنا مباشرة وسنجيبك على الفور.</p>
          </div>
        )}
      </div>

      {/* Ask Question CTA */}
      <div className="bg-[#1B4D3E] text-white rounded-3xl p-8 shadow-md text-center space-y-4">
        <h3 className="text-2xl font-black font-['Cairo']">
          لم تجد إجابة لسؤالك؟
        </h3>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto font-medium">
          فريق الاستشارات بمكتب أبو محمد متاح للرد الفوري على أية تساؤلات خاصة بحالتك عبر الواتساب مجاناً.
        </p>
        <button
          onClick={onOpenConsultation}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-8 py-3.5 rounded-2xl shadow inline-flex items-center gap-2 transition-transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5 fill-slate-950/20" />
          <span>تواصل معنا مباشرة عبر الواتساب (0567157760)</span>
        </button>
      </div>

    </div>
  );
};
