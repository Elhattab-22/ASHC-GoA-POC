import { housingOptions } from "../data/housingOptions";
import type { AssessmentAnswers } from "../types/assessment";
import type { HousingOption } from "../types/housing";

export function findHousingMatches(
  answers: AssessmentAnswers,
): HousingOption[] {
  return housingOptions
    .map((option) => {
      let score = 0;

      if (
        answers.supportType &&
        option.supportTypes.includes(answers.supportType)
      ) {
        score += 2;
      }

      if (answers.region && option.regions.includes(answers.region)) {
        score += 1;
      }

      return { option, score };
    })
    .sort((left, right) => right.score - left.score)
    .map(({ option }) => option);
}