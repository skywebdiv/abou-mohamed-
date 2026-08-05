import React, { useState } from 'react';
import { FileCheck, CheckCircle2, AlertCircle, ArrowLeft, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { OFFICE_INFO } from '../data/officeData';

interface EligibilityCalculatorProps {
  onOpenConsultation: () => void;
}

export const EligibilityCalculator: React.FC<EligibilityCalculatorProps> = ({ onOpenConsultation }) => {
  const [applicantType, setApplicantType] = useState<'male' | 'female'>('male');
  const [residence, setResidence] = useState<'resident' | 'abroad'>('resident');
  const [maritalStatus, setMaritalStatus] = useState<'single' | 'divorced' | 'widowed'>('single');

  const getRequirements = () => {
    if (applicantType === 'male') {
      return {
        title: 'متطلبات زواج المواطن السعودي من امرأة غير سعودية',
        docs: [
          'الهوية الوطنية للمواطن السعودي (سارية المفعول)',
          residence === 'resident' ? 'صورة الإقامة سارية المفعول للطرف الثاني' : 'جواز سفر ساري المفعول للطرف الثاني',
          'مشهد إثبات دخل أو تعريف بالراتب موثق',
          'برينت إثبات الحالة الاجتماعية (أعزب / مطلق / أرمل)',
          'تقرير الفحص الطبي للزواج (معتمد عبر منصة صحتي)',
          residence === 'abroad' ? 'تأشيرة أو موافقة دخول واستيفاء الشروط' : 'خلو سوابق وإثبات السكن',
        ],
        estimatedDays: '7 إلى 15 يوم عمل',
        note: 'توجد استثناءات وتسهيلات خاصة بالفارق العمري أو صلة القرابة، يتم تقييمها مباشرة بواسطة فريقنا.'
      };
    } else {
      return {
        title: 'متطلبات زواج المواطنة السعودية من رجل غير سعودي',
        docs: [
          'الهوية الوطنية للمواطنة السعودية',
          'جواز السفر والإقامة النظامية للزوج الأجنبي',
          'برينت عدم وجود سوابق أمنية للزوج',
          'مشهد عمل وتعريف بالراتب للزوج الأجنبي',
          'إثبات الحالة الاجتماعية للطرفين',
          'فحص طبي زواجي معتمد من مستشفى حكومي أو منصة صحتي',
        ],
        estimatedDays: '10 إلى 20 يوم عمل',
        note: 'يلزم استيفاء شرط العمر والحد الأدنى للراتب مع مراعاة كافة الضوابط الخاصة بوزارة الداخلية.'
      };
    }
  };

  const reqData = getRequirements();

  const handleSendToWhatsApp = () => {
    const text = `السلام عليكم ورحمة الله، أود طلب خدمة تصريح زواج بناءً على نتائج حاسبة الشروط:
• المتقدم: ${applicantType === 'male' ? 'سعودي يتزوج غير سعودية' : 'سعودية تتزوج غير سعودي'}
• إقامة الطرف الثاني: ${residence === 'resident' ? 'مقيمة داخل المملكة' : 'قادمة من الخارج'}
• الحالة الاجتماعية: ${maritalStatus === 'single' ? 'أعزب / عزباء' : maritalStatus === 'divorced' ? 'مطلق / مطلقة' : 'أرمل / أرملة'}

أرجو التواصل معي للبدء في المعاملة بمبدأ (الدفع بعد الإنجاز).
المصدر: ${OFFICE_INFO.domain}`;

    window.open(`https://wa.me/${OFFICE_INFO.phoneClean}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-[#1B4D3E] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-700/50 my-8">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-emerald-700/60">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 mb-3 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            أداة التحقق الفوري للمتطلبات
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-['Cairo'] text-white">
            حاسبة الشروط والمستندات المطلوبة لتصريح الزواج
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            اختر بيانات حالتك لمعرفة كافة الأوراق المطلوبة وخطوات إنجاز معاملتك بضمان (الدفع بعد الإنجاز).
          </p>
        </div>

        <div className="bg-[#12372c] px-4 py-2.5 rounded-2xl border border-emerald-600/50 flex items-center gap-3 shrink-0">
          <ShieldCheck className="w-6 h-6 text-amber-300" />
          <div className="text-right">
            <p className="text-xs font-bold text-amber-300">مبدأنا في مكتب أبو محمد</p>
            <p className="text-[11px] text-emerald-100">الدفع بعد الإنجاز والتوثيق</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        
        {/* Interactive Controls */}
        <div className="lg:col-span-5 space-y-5 bg-[#12372c] p-6 rounded-2xl border border-emerald-700/50">
          
          <div>
            <label className="block text-xs font-bold text-emerald-200 mb-2">
              1. طرف التقديم الأساسي
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setApplicantType('male')}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                  applicantType === 'male'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400 shadow'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80 hover:bg-[#1B4D3E]'
                }`}
              >
                مواطن سعودي (رجل)
              </button>
              <button
                type="button"
                onClick={() => setApplicantType('female')}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                  applicantType === 'female'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400 shadow'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80 hover:bg-[#1B4D3E]'
                }`}
              >
                مواطنة سعودية (امرأة)
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-emerald-200 mb-2">
              2. مكان إقامة الطرف الأجنبي
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setResidence('resident')}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                  residence === 'resident'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400 shadow'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80 hover:bg-[#1B4D3E]'
                }`}
              >
                مقيم داخل السعودية
              </button>
              <button
                type="button"
                onClick={() => setResidence('abroad')}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                  residence === 'abroad'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400 shadow'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80 hover:bg-[#1B4D3E]'
                }`}
              >
                قادم من الخارج
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-emerald-200 mb-2">
              3. الحالة الاجتماعية للمتقدم
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setMaritalStatus('single')}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border ${
                  maritalStatus === 'single'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80'
                }`}
              >
                أعزب / عزباء
              </button>
              <button
                type="button"
                onClick={() => setMaritalStatus('divorced')}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border ${
                  maritalStatus === 'divorced'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80'
                }`}
              >
                مطلق / مطلقة
              </button>
              <button
                type="button"
                onClick={() => setMaritalStatus('widowed')}
                className={`py-2.5 px-2 rounded-xl text-xs font-semibold border ${
                  maritalStatus === 'widowed'
                    ? 'bg-[#1B4D3E] text-white border-emerald-400'
                    : 'bg-[#184235] text-emerald-200 border-emerald-800/80'
                }`}
              >
                أرمل / أرملة
              </button>
            </div>
          </div>

          <div className="p-3 bg-[#1B4D3E]/80 rounded-xl border border-emerald-600/40 text-amber-200 text-xs flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <p className="leading-snug">
              هل تواجه أي عقبة في السن أو الوثائق؟ يسعد مكتب أبو محمد بتقديم حلول وتسهيلات نظامية تناسب كافة الحالات.
            </p>
          </div>

        </div>

        {/* Generated Checklist & Action */}
        <div className="lg:col-span-7 bg-[#12372c]/90 p-6 rounded-2xl border border-emerald-700/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-emerald-800">
              <h4 className="font-bold text-lg text-emerald-200 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-300" />
                <span>{reqData.title}</span>
              </h4>
              <span className="text-xs bg-[#1B4D3E] text-emerald-100 px-3 py-1 rounded-full font-mono border border-emerald-600/50">
                المدة: {reqData.estimatedDays}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-emerald-50">
              {reqData.docs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-[#1B4D3E]/60 p-2.5 rounded-xl border border-emerald-700/40">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-emerald-200 leading-relaxed bg-[#1B4D3E]/40 p-3 rounded-xl border border-emerald-700/40">
              💡 <strong className="text-amber-300">ملاحظة نظامية:</strong> {reqData.note}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-emerald-100">
              <p className="font-bold">هل المستندات جاهزة لديك؟</p>
              <p className="text-emerald-200/80">تواصل معنا الآن للبدء في المعاملة والدفع بعد الإنجاز</p>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 px-6 rounded-xl shadow flex items-center justify-center gap-2 text-xs sm:text-sm transition-all"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>ارسل بياناتك عبر الواتساب (0567157760)</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
