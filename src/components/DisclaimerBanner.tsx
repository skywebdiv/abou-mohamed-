import React from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';
import { OFFICE_INFO } from '../data/officeData';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-[#12372c] text-emerald-50 border-b border-[#1B4D3E] text-xs sm:text-sm py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-right">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong className="text-amber-300 font-semibold">تنويه وإخلاء مسؤولية:</strong> {OFFICE_INFO.disclaimerShort}
          </span>
        </div>
        <div className="flex items-center gap-2 bg-[#1B4D3E] px-3 py-1 rounded-full text-emerald-100 border border-emerald-700/40 text-xs shrink-0 font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>الضمان الذهبي: <strong className="text-white">الدفع فقط بعد الإنجاز النهائي</strong></span>
        </div>
      </div>
    </div>
  );
};

