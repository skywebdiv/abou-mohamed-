import React from 'react';
import { NavPage } from '../types';
import { OFFICE_INFO } from '../data/officeData';
import { ShieldCheck, Lock, FileText, CheckCircle2, AlertTriangle, Building2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate?: (page: NavPage) => void;
  onOpenConsultation?: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="bg-[#1B4D3E] text-white p-8 sm:p-10 rounded-3xl shadow-md border border-emerald-700/60 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-[#12372c] px-3 py-1 rounded-full border border-emerald-600/50">
          <ShieldCheck className="w-4 h-4 text-amber-300" />
          وثيقة الحماية والامتثال القانوني
        </span>
        <h1 className="text-3xl sm:text-4xl font-black font-['Cairo'] text-white">
          سياسة الخصوصية وإخلاء المسؤولية القانونية
        </h1>
        <p className="text-xs sm:text-sm text-emerald-100 font-medium">
          موقع {OFFICE_INFO.domain} | {OFFICE_INFO.fullName}
        </p>
      </div>

      {/* Main Legal Clauses */}
      <div className="bg-white p-8 rounded-3xl border border-[#D1E1DA] shadow-sm space-y-8 text-slate-800 text-sm leading-relaxed">
        
        {/* Section 1: Non-Government Entity Disclaimer */}
        <section className="space-y-3 bg-amber-50 p-6 rounded-2xl border border-amber-200">
          <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2 font-['Cairo']">
            <AlertTriangle className="w-5 h-5 text-amber-700" />
            <span>1. إخلاء مسؤولية عدم التبعية للجهات الحكومية (Google Ads Compliance Notice)</span>
          </h2>
          <p className="text-amber-900 font-medium text-xs sm:text-sm">
            {OFFICE_INFO.disclaimerFull}
          </p>
          <p className="text-amber-900/80 text-xs">
            نحن نقتصر على مساعدة العملاء في تجهيز أوراقهم وتدقيقها وفق الاشتراطات المعلنة نظامياً، وتنسيق المواعيد والرفع والمتابعة. الموافقة النهائية وتصدير التصريح تخضع لسلطة وإجراءات الجهات الحكومية المختصة حتماً.
          </p>
        </section>

        {/* Section 2: Data Confidentiality */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B4D3E] flex items-center gap-2 font-['Cairo']">
            <Lock className="w-5 h-5 text-[#1B4D3E]" />
            <span>2. سرية الوثائق والبيانات الشخصية</span>
          </h2>
          <p className="text-slate-600 font-medium">
            في <strong className="text-[#1B4D3E]">{OFFICE_INFO.name}</strong>، ندرك تماماً حساسية المستندات والوثائق العائلية والشخصية (مثل الهويات الوطنية، جوازات السفر، تقارير الفحص الطبي، والشهادات).
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 font-medium pr-2">
            <li>لا يتم مشاركة أية معلومات أو مستندات مع أي طرف ثالث خارج إطار المعاملة الرسمية والجهات المعتمدة بمعالجتها.</li>
            <li>تُحفظ جميع الملفات الإلكترونية في بيئة مشفرة وآمنة تماماً.</li>
            <li>يحق للعميل طلب مسح أو إتلاف أي ملفات إلكترونية تم تسليمها فور انتهاء المعاملة.</li>
          </ul>
        </section>

        {/* Section 3: Transparent Pricing & Payment Guarantee */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B4D3E] flex items-center gap-2 font-['Cairo']">
            <CheckCircle2 className="w-5 h-5 text-[#1B4D3E]" />
            <span>3. الشفافية وسياسة الدفع بعد الإنجاز</span>
          </h2>
          <p className="text-slate-600 font-medium">
            تلتزم سياسة مكتبنا بمبدأ أمان العميل التام:
          </p>
          <div className="bg-[#E7F0ED] p-4 rounded-xl border border-[#D1E1DA] text-xs sm:text-sm text-[#1B4D3E] font-semibold space-y-1">
            <p>• لا يُطالب العميل بسداد أية رسوم أو أتعاب للمكتب بشكل مسبق قبل البدء في المعاملة.</p>
            <p>• السداد يتم حصراً بعد صدور التوثيق/الموافقة وتأكد العميل من صحتها بنفسه.</p>
          </div>
        </section>

        {/* Section 4: Cookies & Communication */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#1B4D3E] flex items-center gap-2 font-['Cairo']">
            <FileText className="w-5 h-5 text-[#1B4D3E]" />
            <span>4. ملفات تعريف الارتباط والتواصل الإلكتروني</span>
          </h2>
          <p className="text-slate-600 font-medium text-xs sm:text-sm">
            قد يستخدم موقع {OFFICE_INFO.domain} ملفات تعريف ارتباط خفيفة (Cookies) لتحسين تجربة تصفح المستخدم وتسريع تحميل الصفحات. المراسلات والتواصل عبر الواتساب يخضع أيضاً لبنود الأمان والتشفير الخاصة بتطبيق الواتساب.
          </p>
        </section>

        {/* Contact Info */}
        <div className="pt-6 border-t border-[#D1E1DA] text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>لأي استفسارات قانونية بخصوص سياسة الخصوصية، يمكنكم التواصل معنا عبر الواتساب: <strong className="text-slate-800">{OFFICE_INFO.phoneDisplay}</strong></p>
          <span className="text-[#1B4D3E] font-bold bg-[#E7F0ED] px-3 py-1 rounded border border-[#D1E1DA]">
            تحديث: أغسطس 2026
          </span>
        </div>

      </div>

    </div>
  );
};
