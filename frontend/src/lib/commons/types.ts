export interface Skill {
  id: string;
  name: string;
}

export interface User {
  id: string;
  name: string;
  university: string;
  skills: Skill[];
  totalExperience: number;
   avatar: string;
}

export interface Opp {
  id: string;
  title: string;
  company: string;
  location: string;
  image: any; 
};