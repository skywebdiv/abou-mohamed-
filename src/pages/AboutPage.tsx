import React from 'react';
import { NavPage } from '../types';
import { OFFICE_INFO } from '../data/officeData';
import { 
  ShieldCheck, 
  Award, 
  Lock, 
  CheckCircle2, 
  FileCheck2, 
  MessageCircle, 
  Phone, 
  Building2, 
  Scale, 
  Users, 
  HeartHandshake 
} from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (page: NavPage) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header Banner */}
      <div className="bg-[#1B4D3E] text-white p-8 sm:p-12 rounded-3xl shadow-md border border-emerald-700/60 relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#12372c] px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 border border-emerald-600/50">
            <Building2 className="w-4 h-4 text-amber-300" />
            <span>نبذة عن مكتبنا</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-['Cairo'] text-white">
            من نحن | {OFFICE_INFO.fullName}
          </h1>

          <p className="text-sm sm:text-base text-emerald-100 leading-relaxed max-w-3xl font-medium">
            مكتب متخصص ورائد في تقديم خدمات الاستشارات وتسهيل وتنسيق كافة معاملاتها وإجراءات تصاريح الزواج في المملكة العربية السعودية، وفق أقصى درجات الاحترافية والشفافية.
          </p>
        </div>
      </div>

      {/* Core Message & Payment Promise */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        <div className="bg-white p-8 rounded-3xl border border-[#D1E1DA] shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#E7F0ED] text-[#1B4D3E] flex items-center justify-center font-bold mb-4">
              <Scale className="w-6 h-6" />
            </div>

            <h2 className="text-2xl font-bold text-[#1B4D3E] font-['Cairo']">
              رؤيتنا ورسالتنا
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed font-medium mt-3">
              يسعى <strong className="text-[#1B4D3E]">{OFFICE_INFO.name}</strong> لتسهيل وتذليل كافة العقبات الإجرائية أمام المواطنين والمواطنات الراغبين في استخراج تصاريح وتوثيق عقود زواجهم رسمياً. نعمل على دراسة الملف وتدقيقه لضمان الموافقة بأسلوب نظامي 100%.
            </p>
          </div>

          <div className="pt-4 border-t border-[#D1E1DA]">
            <span className="text-xs font-bold text-[#1B4D3E] bg-[#E7F0ED] px-3 py-1.5 rounded-lg border border-[#D1E1DA] inline-block">
              نلتزم بالأنظمة واللوائح الرسمية
            </span>
          </div>
        </div>

        <div className="bg-[#1B4D3E] text-white p-8 rounded-3xl shadow-md border border-emerald-700/60 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h2 className="text-2xl font-bold font-['Cairo'] text-white">
              مبدأنا الأساسي: الدفع بعد الإنجاز
            </h2>

            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-medium">
              نؤمن في مكتب أبو محمد بأن الثقة هي أساس التعامل مع عملائنا الكرام. لذلك، قررنا ألا نتقاضى أية أتعاب قبل إتمام المعاملة. يتم السداد فقط بعد أن يستلم العميل تصريحه رسمياً ويتأكد من توثيقه.
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenConsultation}
              className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm py-3 px-6 rounded-xl shadow flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950/20" />
              <span>استشرنا الآن مجاناً عبر الواتساب</span>
            </button>
          </div>
        </div>

      </div>

      {/* Why Choose Us Values */}
      <section className="space-y-6">
        <h2 className="text-2xl font-black text-[#1B4D3E] font-['Cairo'] text-center">
          لماذا يختار العملاء مكتب أبو محمد؟
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#E7F0ED] p-6 rounded-2xl border border-[#D1E1DA] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1B4D3E] text-amber-300 mx-auto flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#1B4D3E]">خبرة متخصصة</h3>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              دراسة دقيقة للملفات وتحديد المسار النظامي الأكثر سرعة وقبولاً.
            </p>
          </div>

          <div className="bg-[#E7F0ED] p-6 rounded-2xl border border-[#D1E1DA] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1B4D3E] text-amber-300 mx-auto flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#1B4D3E]">سرية وخصوصية 100%</h3>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              حماية مشفرة لجميع الشهادات والوثائق والهويات الشخصية والعائلية.
            </p>
          </div>

          <div className="bg-[#E7F0ED] p-6 rounded-2xl border border-[#D1E1DA] shadow-sm text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#1B4D3E] text-amber-300 mx-auto flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-[#1B4D3E]">متابعة شخصية مستمرة</h3>
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              إطلاع العميل على كافة مراحل وتطورات معاملته أولاً بأول.
            </p>
          </div>
        </div>
      </section>

      {/* Official Legal & Google Ads Compliance Notice */}
      <div className="bg-[#E7F0ED]/70 p-6 rounded-3xl border border-[#D1E1DA] space-y-3 text-xs text-slate-700 leading-relaxed">
        <h3 className="font-bold text-[#1B4D3E] text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#1B4D3E]" />
          <span>تنويه إفصاح الامتثال والصفة القانونية للمكتب (Google Ads Compliance Statement)</span>
        </h3>
        <p>
          نحيط كافة زوارنا وعملائنا الكرام أن <strong>مكتب أبو محمد</strong> هو مكتب استشاري وتنسيقي خاص بالخدمات والتسهيل، وهو <strong>ليس جهة حكومية</strong> ولا ينتمي لأي وزارة أو هيئة رسمية.
        </p>
        <p>
          نقتصر في عملنا على الاستشارات، إعداد الملفات، التأكد من اكتمال الشروط، ومتابعة المعاملة لحساب العميل. إن إصدار الموافقات والقرارات وتصاريح الزواج يظل حظراً وسلطة تقديرية مطلقة للجهات الرسمية المعنية بالمملكة العربية السعودية وفق الأنظمة.
        </p>
      </div>

    </div>
  );
};
