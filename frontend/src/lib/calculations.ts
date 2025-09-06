import { LEVEL_RULES } from "./commons/constants";
import { BadgeLevel } from "./commons/enums";
import { User } from "./commons/types";


export function getUserBadge(user: User): BadgeLevel {
  const { skills, totalExperience } = user;
  const skillCount = skills.length;

  // find first level where both skills + experience conditions match
  const level = LEVEL_RULES.find(
    (rule) =>
      skillCount >= rule.minSkills &&
      skillCount <= rule.maxSkills &&
      totalExperience >= rule.minExperience
  );

  return level ? level.level : BadgeLevel.RUBY;
}
