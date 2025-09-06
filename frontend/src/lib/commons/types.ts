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
