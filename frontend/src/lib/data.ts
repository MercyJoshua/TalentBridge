import { IMAGES } from "./commons/constants";
import { Opportunity, Skill } from "./commons/types";


export const mockOpportunities: Opportunity[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp',
    companyLogo: IMAGES.companies[0],
    location: 'San Francisco, CA',
    type: 'hybrid',
    duration: '3 months',
    isPaid: true,
    description: 'Join our dynamic team to build cutting-edge web applications using React and TypeScript.',
    skills: ['React', 'TypeScript', 'CSS'],
  },
  {
    id: '2',
    title: 'UX Design Internship',
    company: 'DesignStudio',
    companyLogo: IMAGES.companies[1],
    location: 'Remote',
    type: 'remote',
    duration: '6 months',
    isPaid: true,
    description: 'Create beautiful and intuitive user experiences for mobile and web applications.',
    skills: ['Figma', 'User Research', 'Prototyping'],
  },
  {
    id: '3',
    title: 'Data Science Trainee',
    company: 'DataTech',
    companyLogo: IMAGES.companies[2],
    location: 'New York, NY',
    type: 'onsite',
    duration: '4 months',
    isPaid: true,
    description: 'Analyze large datasets and build machine learning models to drive business insights.',
    skills: ['Python', 'Machine Learning', 'SQL'],
  },
];

export const mockSkills: Skill[] = [
  { id: '1', name: 'React', level: 'intermediate', category: 'Frontend' },
  { id: '2', name: 'Python', level: 'advanced', category: 'Programming' },
  { id: '3', name: 'Figma', level: 'beginner', category: 'Design' },
];