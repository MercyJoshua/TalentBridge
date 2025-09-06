import { BadgeLevel } from "./enums";

export const LEVEL_RULES = [
  { level: BadgeLevel.RUBY, minSkills: 0, maxSkills: 2, minExperience: 0 },
  { level: BadgeLevel.SILVER, minSkills: 3, maxSkills: 5, minExperience: 6 }, // 6 months+
  { level: BadgeLevel.GOLD, minSkills: 6, maxSkills: 9, minExperience: 12 }, // 1 year+
  { level: BadgeLevel.PLATINUM, minSkills: 10, maxSkills: Infinity, minExperience: 24 }, // 2 years+
];
