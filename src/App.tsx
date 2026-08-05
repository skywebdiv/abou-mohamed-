import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { OFFICE_INFO } from './data/officeData';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const handleOpenConsultation = (serviceName?: string) => {
    const message = serviceName
      ? `السلام عليكم ورحمة الله وبركاته، أود الحصول على استشارة بخصوص خدمة (${serviceName}) من مكتب أبو محمد.`
      : `السلام عليكم ورحمة الله وبركاته، أود الحصول على استشارة فورية بخصوص تصاريح وإجراءات الزواج من مكتب أبو محمد.`;
    
    const whatsappUrl = `https://wa.me/${OFFICE_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-['Tajawal','Cairo',sans-serif] selection:bg-emerald-200 selection:text-emerald-900">
      <ScrollToTop />
      
      {/* Top Google Ads Non-Government Disclaimer Banner */}
      <DisclaimerBanner />

      {/* Main Header / Navigation Menu */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Dynamic Page Content Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<AboutPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/services" element={<ServicesPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/faq" element={<FaqPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/contact" element={<ContactPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/privacy" element={<PrivacyPolicyPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="*" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />

      {/* Floating WhatsApp Live Chat Trigger */}
      <FloatingWhatsApp onOpenConsultation={handleOpenConsultation} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

