import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../lib/commons/types';
import { IMAGES } from '../lib/commons/constants';


interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, type: 'student' | 'company') => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string, type: 'student' | 'company') => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      name: type === 'student' ? 'Alex Johnson' : 'TechCorp Inc.',
      email,
      type,
      avatar: IMAGES.avatars[0],
      university: type === 'student' ? 'Stanford University' : undefined,
      bio: type === 'student' ? 'Computer Science student passionate about AI and machine learning.' : 'Leading tech company focused on innovation.',
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};