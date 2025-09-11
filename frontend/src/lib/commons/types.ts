export interface User {
  id: string;
  name: string;
  email: string;
  type: 'student' | 'company';
  avatar?: string;
  university?: string;
  bio?: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  duration: string;
  isPaid: boolean;
  description: string;
  skills: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export interface Badge {
  id: string;
  name: string;
  level: 'Ruby' | 'Silver' | 'Gold' | 'Platinum';
  description: string;
  unlockedAt?: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  type: 'opportunity' | 'message' | 'achievement';
}