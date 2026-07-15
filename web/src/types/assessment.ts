export type AssessmentOption = {
  value: string;
  label: string;
};

export type AssessmentQuestionModel = {
  id: string;
  label: string;
  helpText?: string;
  options: AssessmentOption[];
};

export type AssessmentAnswers = Record<string, string>;