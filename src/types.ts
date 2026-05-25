export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDetails: string;
  category: 'criminal' | 'family' | 'civil' | 'contract' | 'cyber' | 'cheque' | 'trademark' | 'consultation';
}

export interface PracticeArea {
  id: string;
  name: string;
  icon: string;
  summary: string;
  commonIssues: string[];
  checklist: string[];
}

export interface StatItem {
  number: string;
  label: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
}

export interface BlogItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
