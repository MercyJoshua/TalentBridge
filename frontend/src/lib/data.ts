import { Opp, User } from "./commons/types";

let mockUser: User = {
  id: "1",
  name: "Ethan Carter",
  university: "Stanford University",
  skills: [],
  totalExperience: 8, 
   avatar: "https://i.pravatar.cc/150?img=3",
};

const mockOpportunities: Opp[] = [
  { id: "1", title: "Marketing Internship", company: "Acme Co.", location: "Remote", image: require("../../assets/dashboard/4.png") },
  { id: "2", title: "Software Engineering Project", company: "TechCorp", location: "San Francisco", image: require("../../assets/dashboard/2.png") },
  { id: "3", title: "Product Design Internship", company: "DesignHub", location: "New York", image: require("../../assets/dashboard/7.png") },
  { id: "4", title: "Research Assistant", company: "Uni Labs", location: "Hybrid", image: require("../../assets/dashboard/6.png") },
  { id: "5", title: "Data Analyst Trainee", company: "Insight Ltd", location: "Remote", image: require("../../assets/dashboard/5.png") },
];

export default mockUser;
export const mockOpportunitiesData = mockOpportunities;
// { id: "1", name: "Teamwork" }, { id: "2", name: "Presentation" }