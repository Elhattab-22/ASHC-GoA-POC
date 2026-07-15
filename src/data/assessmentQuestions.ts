import type { AssessmentQuestionModel } from "../types/assessment";

export const assessmentQuestions: AssessmentQuestionModel[] = [
  {
    id: "supportType",
    label: "What type of housing support are you looking for?",
    helpText: "Choose the option that best describes your current need.",
    options: [
      {
        value: "affordable-rental",
        label: "Affordable rental housing",
      },
      {
        value: "family-housing",
        label: "Housing for a family",
      },
      {
        value: "seniors-housing",
        label: "Housing for a senior",
      },
    ],
  },
  {
    id: "householdSize",
    label: "How many people are in your household?",
    options: [
      { value: "1", label: "1 person" },
      { value: "2-3", label: "2 or 3 people" },
      { value: "4-plus", label: "4 or more people" },
    ],
  },
  {
    id: "region",
    label: "Where do you currently live?",
    options: [
      { value: "edmonton", label: "Edmonton region" },
      { value: "calgary", label: "Calgary region" },
      { value: "other", label: "Another Alberta community" },
    ],
  },
];