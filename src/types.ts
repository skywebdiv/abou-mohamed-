export type NavPage = 'home' | 'about' | 'services' | 'faq' | 'contact' | 'privacy';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  requiredDocs: string[];
  features: string[];
  estimatedDays: string;
  paymentNote: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface WorkStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  serviceType: string;
  applicantType: 'saudi_male' | 'saudi_female' | 'other';
  partnerNationality: string;
  notes: string;
}
