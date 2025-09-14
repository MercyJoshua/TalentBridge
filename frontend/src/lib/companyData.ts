import { IMAGES } from "./commons/constants";
import { CompanyStats, JobPosting, Candidate } from "./commons/types";

export const mockCompanyStats: CompanyStats = {
  activePostings: 8,
  totalApplicants: 142,
  shortlistedCandidates: 23,
  messagesUnread: 5,
};

export const mockJobPostings: JobPosting[] = [
  {
    id: '1',
    title: 'Frontend Developer Intern',
    company: 'TechCorp Inc.',
    companyLogo: IMAGES.companyLogos[0],
    location: 'San Francisco, CA',
    type: 'internship',
    compensation: '$25/hour',
    duration: '3 months',
    description: 'Join our frontend team to build amazing user experiences.',
    skills: ['React', 'TypeScript', 'CSS'],
    status: 'open',
    applicantsCount: 24,
    postedAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'DataFlow Labs',
    companyLogo: IMAGES.companyLogos[1],
    location: 'Remote',
    type: 'internship',
    compensation: '$30/hour',
    duration: '6 months',
    description: 'Work on machine learning projects with real-world data.',
    skills: ['Python', 'Machine Learning', 'SQL'],
    status: 'open',
    applicantsCount: 18,
    postedAt: new Date('2024-01-12'),
  },
];

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@university.edu',
    avatar: IMAGES.candidates[0],
    university: 'Stanford University',
    skills: ['React', 'Node.js', 'Python'],
    level: 'Gold',
    bio: 'Computer Science student with passion for full-stack development.',
    appliedJobs: ['1'],
    shortlisted: true,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus.j@college.edu',
    avatar: IMAGES.candidates[1],
    university: 'MIT',
    skills: ['Python', 'TensorFlow', 'Data Analysis'],
    level: 'Platinum',
    bio: 'AI/ML enthusiast with research experience in deep learning.',
    appliedJobs: ['2'],
    shortlisted: false,
  },
];