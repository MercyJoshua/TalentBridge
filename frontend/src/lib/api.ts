import { User } from "./commons/types";
import mockUser from "./data";

export async function fetchUser(): Promise<User> {
  return new Promise((resolve) => setTimeout(() => resolve(mockUser), 500));
}

export async function addSkill(skillName: string): Promise<User> {
  const newSkill = { id: Date.now().toString(), name: skillName };
  mockUser.skills.push(newSkill);
  return mockUser;
}
