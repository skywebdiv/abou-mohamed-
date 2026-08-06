import React, { useState } from 'react';
import { NavPage } from '../types';
import { OFFICE_INFO } from '../data/officeData';
import { 
  Phone, 
  MessageCircle, 
  Send, 
  Globe, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (page: NavPage) => void;
  onOpenConsultation: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenConsultation }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('تصريح زواج سعودي من أجنبية');
  const [partnerNationality, setPartnerNationality] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_click',
        service_name: serviceType,
        page_location: '/contact'
      });
    }

    const msg = `السلام عليكم ورحمة الله،
أود طلب استشارة وتفاصيل عن معاملة تصريح زواج من موقع ${OFFICE_INFO.domain}:

• الاسم: ${fullName || 'غير محدد'}
• رقم الجوال: ${phone || 'الواتساب'}
• نوع المعاملة: ${serviceType}
• جنسية الطرف الثاني: ${partnerNationality || 'غير محددة'}
• الاستفسار: ${notes || 'أرجو التواصل لمعرفة الشروط والبدء في الإجراءات.'}

أتطلع لخدمتكم بمبدأ الدفع بعد الإنجاز وشكراً.`;

    window.open(`https://wa.me/${OFFICE_INFO.phoneClean}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Contact Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-[#1B4D3E] bg-[#E7F0ED] px-4 py-1.5 rounded-full border border-[#D1E1DA]">
          تواصل فوري وسريع
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1B4D3E] font-['Cairo']">
          اتصل بنا | {OFFICE_INFO.name}
        </h1>
        <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
          فريقنا جاهز على مدار الساعة لخدمتكم والإجابة على كافة استفساراتكم المتعلقة بتصاريح وتوثيق الزواج في السعودية.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Card */}
        <div className="lg:col-span-5 bg-[#1B4D3E] text-white p-8 rounded-3xl shadow-md border border-emerald-700/60 space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-['Cairo'] text-white">بيانات التواصل الرسمية</h2>
            <p className="text-xs text-emerald-100 mt-1">تواصل معنا بالطريقة التي تناسبك للرد الفوري</p>
          </div>

          <div className="space-y-4 text-sm">
            
            <div className="bg-[#12372c] p-4 rounded-2xl border border-emerald-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5 fill-amber-300/20" />
                </div>
                <div>
                  <p className="text-xs text-emerald-200">الواتساب المباشر</p>
                  <p className="font-bold text-white font-mono dir-ltr" dir="ltr">{OFFICE_INFO.phoneDisplay}</p>
                </div>
              </div>
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                      event: 'whatsapp_click',
                      service_name: 'واتساب مباشر',
                      page_location: '/contact'
                    });
                  }
                }}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-3.5 py-2 rounded-xl transition-colors"
              >
                محادثة
              </a>
            </div>

            <div className="bg-[#12372c] p-4 rounded-2xl border border-emerald-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-emerald-200">الاتصال الهاتفي</p>
                  <p className="font-bold text-white font-mono dir-ltr" dir="ltr">{OFFICE_INFO.phoneDisplay}</p>
                </div>
              </div>
              <a
                href={`tel:${OFFICE_INFO.phoneClean}`}
                className="bg-[#1B4D3E] hover:bg-[#0c241d] text-emerald-100 font-semibold text-xs px-3.5 py-2 rounded-xl border border-emerald-600/50 transition-colors"
              >
                اتصال
              </a>
            </div>

            <div className="bg-[#12372c] p-4 rounded-2xl border border-emerald-700/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-emerald-200">رابط الموقع الرسمي</p>
                <p className="font-bold text-emerald-100 font-mono">{OFFICE_INFO.domain}</p>
              </div>
            </div>

            <div className="bg-[#12372c] p-4 rounded-2xl border border-emerald-700/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-emerald-200">ساعات العمل والخدمة</p>
                <p className="font-semibold text-emerald-100">{OFFICE_INFO.workingHours}</p>
              </div>
            </div>

            <div className="bg-[#12372c] p-4 rounded-2xl border border-emerald-700/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center font-bold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-emerald-200">منطقة تقديم الخدمة</p>
                <p className="font-semibold text-emerald-100">{OFFICE_INFO.location}</p>
              </div>
            </div>

          </div>

          <div className="bg-[#12372c] p-4 rounded-2xl border border-emerald-700/60 text-xs text-emerald-100 space-y-1">
            <p className="font-bold text-amber-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-300" />
              ضمان السرية والدفع بعد الإنجاز:
            </p>
            <p>جميع بياناتكم ومستنداتكم محمية بنسبة 100%، ولا يتم سداد أية أتعاب إلا بعد إتمام المعاملة وتوثيقها.</p>
          </div>

        </div>

        {/* Instant Consultation Quick Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#D1E1DA] shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-['Cairo'] text-[#1B4D3E]">
              نموذج الاستشارة المباشرة (تحويل للواتساب)
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              قم بتعبئة النظرة السريعة وسنقوم بتحويلك مباشرة للواتساب مع رسالة جاهزة تحتوي تفاصيل طلبك.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                الاسم الكريم
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="أدخل اسمك"
                className="w-full px-4 py-3 rounded-xl border border-[#D1E1DA] text-sm focus:ring-2 focus:ring-[#1B4D3E] outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  نوع المعاملة المطلوبة
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full px-3 py-3 rounded-xl border border-[#D1E1DA] text-sm bg-white focus:ring-2 focus:ring-[#1B4D3E] outline-none"
                >
                  <option value="تصريح زواج سعودي من أجنبية">تصريح زواج سعودي من أجنبية</option>
                  <option value="تصريح زواج سعودية من أجنبي">تصريح زواج سعودية من أجنبي</option>
                  <option value="توثيق عقد زواج (ناجز والخارجية)">توثيق عقد زواج (ناجز والخارجية)</option>
                  <option value="تعديل مهنة واستثناءات">تعديل مهنة واستثناءات عمرية</option>
                  <option value="استشارة عامة ومتابعة">استشارة عامة</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  جنسية الطرف الثاني
                </label>
                <input
                  type="text"
                  value={partnerNationality}
                  onChange={(e) => setPartnerNationality(e.target.value)}
                  placeholder="مثال: يمنية، مصرية، سوريه..."
                  className="w-full px-4 py-3 rounded-xl border border-[#D1E1DA] text-sm focus:ring-2 focus:ring-[#1B4D3E] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                رقم الجوال
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="05xxxxxxxx"
                className="w-full px-4 py-3 rounded-xl border border-[#D1E1DA] text-sm focus:ring-2 focus:ring-[#1B4D3E] outline-none dir-ltr text-right"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                تفاصيل الاستفسار أو المعاملة
              </label>
              <textarea
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="اكتب هنا أية تفاصيل خاصة بحالتك..."
                className="w-full px-4 py-3 rounded-xl border border-[#D1E1DA] text-sm focus:ring-2 focus:ring-[#1B4D3E] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1B4D3E] hover:bg-[#12372c] text-white font-black text-base py-4 px-6 rounded-2xl shadow flex items-center justify-center gap-2 transition-transform active:scale-98"
            >
              <Send className="w-5 h-5 text-emerald-300" />
              <span>إرسال الاستشارة إلى الواتساب الرسمي (0567157760)</span>
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};
