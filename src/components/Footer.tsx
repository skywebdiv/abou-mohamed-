import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_INFO } from '../data/officeData';
import { 
  FileCheck2, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  Globe, 
  MapPin, 
  Clock, 
  ChevronLeft
} from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  return (
    <footer className="bg-[#12372c] text-emerald-100 pt-16 pb-12 border-t-4 border-[#1B4D3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-emerald-800/60">
          <div className="bg-[#1B4D3E] p-5 rounded-2xl border border-emerald-700/50 flex items-start gap-4">
            <div className="p-3 bg-[#12372c] text-emerald-300 rounded-xl border border-emerald-600/50">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">الدفع بعد الإنجاز</h4>
              <p className="text-xs text-emerald-200 mt-1">لا توجد رسوم أتعاب مسبقة، الدفع بعد التوثيق</p>
            </div>
          </div>

          <div className="bg-[#1B4D3E] p-5 rounded-2xl border border-emerald-700/50 flex items-start gap-4">
            <div className="p-3 bg-[#12372c] text-amber-300 rounded-xl border border-emerald-600/50">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">سرية تامة للوثائق</h4>
              <p className="text-xs text-emerald-200 mt-1">حماية مشفرة لكافة بيانات العملاء والشهادات</p>
            </div>
          </div>

          <div className="bg-[#1B4D3E] p-5 rounded-2xl border border-emerald-700/50 flex items-start gap-4">
            <div className="p-3 bg-[#12372c] text-emerald-300 rounded-xl border border-emerald-600/50">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">تدقيق ونظامية 100%</h4>
              <p className="text-xs text-emerald-200 mt-1">متابعة دقيقة تتوافق مع اللوائح والأنظمة</p>
            </div>
          </div>

          <div className="bg-[#1B4D3E] p-5 rounded-2xl border border-emerald-700/50 flex items-start gap-4">
            <div className="p-3 bg-[#12372c] text-emerald-300 rounded-xl border border-emerald-600/50">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">استجابة فورية 24/7</h4>
              <p className="text-xs text-emerald-200 mt-1">فريق استشاري متاح عبر الواتساب على مدار الساعة</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center border border-emerald-600/50 shadow">
                <FileCheck2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white font-['Cairo']">{OFFICE_INFO.name}</h3>
                <p className="text-xs text-emerald-300 font-medium">تصاريح وتوثيق معاملات الزواج بالسعودية</p>
              </div>
            </div>

            <p className="text-sm text-emerald-100/90 leading-relaxed">
              المكتب الاستشاري الأبرز لتسهيل ومتابعة معاملات وتصاريح الزواج في المملكة العربية السعودية. نعمل بمهنية عالية لتدقيق الملفات ومتابعتها نظامياً، مع الالتزام التام بمبدأ الدفع بعد الإنجاز والسرية التامة.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-emerald-200">
              <span className="flex items-center gap-1.5 bg-[#1B4D3E] px-3 py-1.5 rounded-lg border border-emerald-700/60">
                <Globe className="w-4 h-4 text-emerald-300" />
                <a href="https://lawyer-am.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">
                  {OFFICE_INFO.domain}
                </a>
              </span>
              <span className="flex items-center gap-1.5 bg-[#1B4D3E] px-3 py-1.5 rounded-lg border border-emerald-700/60">
                <MapPin className="w-4 h-4 text-emerald-300" />
                <span>المملكة العربية السعودية</span>
              </span>
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white border-r-4 border-amber-400 pr-3">صفحات الموقع</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>من نحن</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>خدماتنا</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>الأسئلة الشائعة</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>اتصل بنا</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />
                  <span>سياسة الخصوصية وإخلاء المسؤولية</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white border-r-4 border-amber-400 pr-3">التواصل المباشر</h4>
            
            <div className="bg-[#1B4D3E] p-4 rounded-2xl border border-emerald-700/60 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-200">رقم التواصل المباشر والواتساب</span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              
              <div className="text-2xl font-extrabold text-white text-center font-mono tracking-wider dir-ltr" dir="ltr">
                {OFFICE_INFO.phoneDisplay}
              </div>

              <button
                onClick={onOpenConsultation}
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2 text-sm transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950/20" />
                <span>إرسال استشارة سريعة عبر الواتساب</span>
              </button>

              <a
                href={`tel:${OFFICE_INFO.phoneClean}`}
                className="w-full bg-[#12372c] hover:bg-[#0c241d] text-emerald-100 font-semibold py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-xs border border-emerald-700/60"
              >
                <Phone className="w-3.5 h-3.5 text-amber-300" />
                <span>اتصال هاتفي مباشر</span>
              </a>
            </div>
          </div>

        </div>

        {/* Google Ads Compliance & Disclaimer Section */}
        <div className="mt-8 pt-8 border-t border-emerald-800/80 text-xs text-emerald-200/80 leading-relaxed bg-[#1B4D3E]/60 p-6 rounded-2xl">
          <p className="font-bold text-amber-300 mb-2 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            إخلاء مسؤولية سياسة الإعلانات والجهات الحكومية (Google Ads Policy Disclosure):
          </p>
          <p className="mb-2">
            {OFFICE_INFO.disclaimerFull}
          </p>
          <p className="text-emerald-300/70">
            موقع ({OFFICE_INFO.domain}) يعمل كمنصة معلوماتية واستشارية خاصة لتوضيح الإجراءات وتنظيم المستندات للعملاء قبل تقديمها للجهات الرسمية. جميع العلامات والأنظمة هي حقوق محفوظة لوزاراتها المعنية بالمملكة العربية السعودية.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-emerald-900 flex flex-col md:flex-row items-center justify-between text-xs text-emerald-300/70 gap-4">
          <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ {OFFICE_INFO.fullName} | {OFFICE_INFO.domain}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-amber-300">سياسة الخصوصية</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:text-amber-300">إخلاء المسؤولية</Link>
            <span>•</span>
            <Link to="/faq" className="hover:text-amber-300">الأسئلة الشائعة</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

