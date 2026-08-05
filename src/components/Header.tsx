import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { OFFICE_INFO } from '../data/officeData';
import { 
  FileCheck2, 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  ChevronLeft,
  ShieldCheck,
  Home,
  Info,
  Briefcase,
  HelpCircle,
  PhoneCall,
  Lock
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'الرئيسية', icon: <Home className="w-4 h-4" /> },
    { path: '/about', label: 'من نحن', icon: <Info className="w-4 h-4" /> },
    { path: '/services', label: 'خدماتنا', icon: <Briefcase className="w-4 h-4" /> },
    { path: '/faq', label: 'الأسئلة الشائعة', icon: <HelpCircle className="w-4 h-4" /> },
    { path: '/contact', label: 'اتصل بنا', icon: <PhoneCall className="w-4 h-4" /> },
    { path: '/privacy', label: 'سياسة الخصوصية', icon: <Lock className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Office Title */}
          <Link 
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1B4D3E] text-amber-300 flex items-center justify-center shadow-md border border-emerald-600/30 group-hover:scale-105 transition-transform duration-300">
              <FileCheck2 className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold text-[#1B4D3E] tracking-tight font-['Cairo'] group-hover:text-emerald-900 transition-colors">
                  {OFFICE_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-md border border-amber-300">
                  <ShieldCheck className="w-3 h-3 text-amber-700" />
                  مكتب معتمد
                </span>
              </div>
              <p className="text-xs text-emerald-800/80 font-medium hidden sm:block">
                خدمات واستشارات تصاريح وتوثيق عقود الزواج بالسعودية
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#E7F0ED] p-1.5 rounded-full border border-[#D1E1DA]">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1B4D3E] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#1B4D3E] hover:bg-white/80'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Actions: Phone & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${OFFICE_INFO.phoneClean}`}
              className="flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-[#1B4D3E] bg-[#E7F0ED] hover:bg-[#D1E1DA] px-3 py-2 rounded-xl border border-[#D1E1DA] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B4D3E]" />
              <span dir="ltr">{OFFICE_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="relative group overflow-hidden bg-[#1B4D3E] hover:bg-[#12372c] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md border border-emerald-700/50 flex items-center gap-2 transition-all duration-300 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>استشارة واتساب فورية</span>
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden bg-emerald-600 text-white p-2.5 rounded-xl shadow-sm text-xs font-bold flex items-center gap-1"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-none"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200/60 mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-emerald-900">مكتب أبو محمد للتسهيل والتعقيب</p>
              <p className="text-[11px] text-emerald-700 font-medium">الدفع بعد الإنجاز والتأكد من التوثيق</p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded">
              0567157760
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-right transition-colors ${
                    isActive
                      ? 'bg-emerald-800 text-white'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>طلب استشارة مباشرة عبر الواتساب</span>
            </button>
            <a
              href={`tel:${OFFICE_INFO.phoneClean}`}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-center text-xs flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>اتصال مباشر: {OFFICE_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

