import React from 'react';
import { Link } from 'react-router-dom';
import { NavPage } from '../types';
import { OFFICE_INFO, WORK_STEPS, SERVICES, TRUST_POINTS } from '../data/officeData';
import { EligibilityCalculator } from '../components/EligibilityCalculator';
import { 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  ChevronLeft, 
  BadgeCheck, 
  HeartHandshake, 
  Lock, 
  Award, 
  Clock, 
  FileCheck2, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  Stamp,
  FileText
} from 'lucide-react';

interface HomePageProps {
  onNavigate?: (page: NavPage) => void;
  onOpenConsultation: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1B4D3E] text-white pt-12 pb-20 rounded-b-[2.5rem] sm:rounded-b-[3.5rem] shadow-xl border-b border-[#12372c]">
        
        {/* Background Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#12372c] border border-emerald-600/40 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-amber-300 shadow-md">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>مكتب معتمد للتسهيل والاستشارات القانونية | <strong className="text-white">الدفع بعد الإنجاز</strong></span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-['Cairo'] leading-tight sm:leading-tight">
              تسهيل وتوثيق <span className="text-amber-300">تصاريح الزواج</span> في السعودية
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg text-emerald-100 font-medium leading-relaxed max-w-2xl mx-auto">
              يقدم <strong className="text-white font-bold">{OFFICE_INFO.name}</strong> خدمات الاستشارات وتجهيز الملفات ومتابعة معاملات تصاريح الزواج وتوثيق عقد الزواج لدى الجهات المعتمدة، بمهنية عالية وسرية تامة وبدون أي مقدمات.
            </p>

            {/* Key Trust Guarantee Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm font-semibold">
              <div className="bg-[#12372c] border border-emerald-600/40 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>الدفع فقط بعد إنجاز المعاملة</span>
              </div>
              <div className="bg-[#12372c] border border-emerald-600/40 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-emerald-100">
                <Lock className="w-4 h-4 text-amber-300" />
                <span>سرية وأمان 100% للوثائق</span>
              </div>
              <div className="bg-[#12372c] border border-emerald-600/40 px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-emerald-100">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>متابعة فورية ومباشرة</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base px-8 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-6 h-6 fill-slate-950/20" />
                <span>استشارة مجانية عبر الواتساب (0567157760)</span>
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto bg-[#12372c] hover:bg-[#0c241d] text-white font-bold text-sm px-6 py-4 rounded-2xl border border-emerald-700/60 flex items-center justify-center gap-2 transition-all"
              >
                <span>استعرض كافة خدماتنا</span>
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </div>

            {/* Non-Government Disclaimer Badge in Hero */}
            <div className="pt-6">
              <p className="text-[11px] sm:text-xs text-emerald-200/90 bg-[#12372c]/90 p-3 rounded-xl border border-emerald-800/80 inline-block max-w-xl">
                📌 <strong>تنويه نظامي مهم:</strong> مكتب أبو محمد هو مكتب أعمال واستشارات خاص وليس جهة حكومية. جميع تصاريح الزواج تصدر حصراً من الجهات الحكومية المختصة.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 4 Core Pillars of Trust */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((pt, idx) => (
            <div 
              key={idx}
              className="bg-[#E7F0ED] p-6 rounded-3xl border border-[#D1E1DA] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold mb-4 shadow-sm group-hover:bg-[#12372c] transition-colors">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1B4D3E] font-['Cairo'] mb-1">
                {pt.title}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {pt.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Interactive Eligibility & Checklist Calculator */}
        <section>
          <EligibilityCalculator onOpenConsultation={onOpenConsultation} />
        </section>

        {/* Work Steps (خطوات العمل) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#1B4D3E] bg-[#E7F0ED] px-3.5 py-1.5 rounded-full border border-[#D1E1DA]">
              خطوات سهلة وواضحة
            </span>
            <h2 className="text-3xl font-black text-[#1B4D3E] font-['Cairo']">
              كيف نعمل معكم لإتمام معاملتكم؟
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              نضمن لكم رحلة إنجاز ميسرة وموثقة خطوة بخطوة من البداية وحتى التسليم والدفع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {WORK_STEPS.map((step) => (
              <div 
                key={step.stepNumber}
                className="bg-white p-6 rounded-3xl border border-[#D1E1DA] shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#1B4D3E] transition-all"
              >
                <div className="absolute top-3 left-4 text-5xl font-black text-[#E7F0ED] font-mono pointer-events-none">
                  0{step.stepNumber}
                </div>

                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold text-sm shadow">
                    {step.stepNumber}
                  </div>
                  <h3 className="text-lg font-bold text-[#1B4D3E] font-['Cairo']">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

                {step.stepNumber === 4 && (
                  <div className="mt-4 pt-3 border-t border-[#D1E1DA] text-[11px] font-bold text-[#1B4D3E] bg-[#E7F0ED] p-2.5 rounded-xl text-center">
                    ✨ الدفع فقط بعد الإنجاز
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Our Services Snapshot */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-[#1B4D3E] bg-[#E7F0ED] px-3.5 py-1.5 rounded-full border border-[#D1E1DA]">
                خدماتنا المتميزة
              </span>
              <h2 className="text-3xl font-black text-[#1B4D3E] font-['Cairo'] mt-2">
                خدمات تصاريح وتوثيق الزواج
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs sm:text-sm font-bold text-[#1B4D3E] hover:text-[#12372c] flex items-center gap-1 group"
            >
              <span>عرض جميع الخدمات والتفاصيل</span>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((srv) => (
              <div 
                key={srv.id}
                className="bg-white rounded-3xl border border-[#D1E1DA] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center shrink-0 shadow">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#1B4D3E] bg-[#E7F0ED] border border-[#D1E1DA] px-3 py-1 rounded-full">
                      {srv.estimatedDays}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1B4D3E] font-['Cairo']">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {srv.shortDesc}
                  </p>

                  <div className="bg-[#E7F0ED]/50 p-3.5 rounded-2xl border border-[#D1E1DA] space-y-1.5">
                    <p className="text-[11px] font-bold text-[#1B4D3E]">المستندات المطلوبة مسبقاً:</p>
                    <ul className="text-xs text-slate-700 space-y-1">
                      {srv.requiredDocs.slice(0, 3).map((doc, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1B4D3E] shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D1E1DA] flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-lg border border-amber-300">
                    {srv.paymentNote}
                  </span>

                  <button
                    onClick={() => onOpenConsultation(srv.title)}
                    className="bg-[#1B4D3E] hover:bg-[#12372c] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" />
                    <span>طلب الخدمة</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* Confidentiality & Security Banner */}
        <section className="bg-[#1B4D3E] text-white rounded-3xl p-8 shadow-md border border-emerald-700/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-[#12372c] px-3 py-1 rounded-full border border-emerald-600/50">
              <Lock className="w-3.5 h-3.5" />
              أمان وحماية الخصوصية
            </span>
            <h3 className="text-2xl font-black font-['Cairo'] text-white">
              سرية تامة وحماية مطلقة لكافة الوثائق والمستندات
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl font-medium">
              نعلم حساسيتكم تجاه وثائقكم الشخصية والعائلية. نلتزم في {OFFICE_INFO.name} بحماية بيانات العملاء وعدم استخدامها إلا للأغراض المحددة لمعاملتكم فقط.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-6 py-3.5 rounded-2xl shadow shrink-0 flex items-center gap-2 transition-transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 fill-slate-950/20" />
            <span>تواصل آمن عبر الواتساب</span>
          </button>
        </section>

        {/* Quick FAQ Snapshot */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-[#1B4D3E] bg-[#E7F0ED] px-3.5 py-1.5 rounded-full border border-[#D1E1DA]">
              إجابات مباشرة
            </span>
            <h2 className="text-3xl font-black text-[#1B4D3E] font-['Cairo']">
              أسئلة يتكرر طرحها من العملاء
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-[#D1E1DA] shadow-sm space-y-2">
              <h3 className="font-bold text-[#1B4D3E] text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#1B4D3E]" />
                <span>ما الضمان لمعنى "الدفع بعد الإنجاز"؟</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                معناه أنك لا تدفع أي أتعاب مقدمة قبل البدء. يتم استلام الأوراق ومتابعتها، وعند صدور الموافقة والتصريح وتأكدك من صحتها رسمياً، يتم سداد الأتعاب.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#D1E1DA] shadow-sm space-y-2">
              <h3 className="font-bold text-[#1B4D3E] text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#1B4D3E]" />
                <span>هل يمكن متابعة معاملتي إذا كنت خارج الرياض؟</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                نعم، جميع خدماتنا تغطي كافة مدن ومناطق المملكة العربية السعودية عبر التواصل والتنسيق الإلكتروني المباشر عبر الواتساب.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1B4D3E] hover:text-[#12372c] bg-[#E7F0ED] px-4 py-2.5 rounded-xl border border-[#D1E1DA]"
            >
              <span>الانتقال لصفحة الأسئلة الشائعة الكاملة</span>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>

    </div>
  );
};
