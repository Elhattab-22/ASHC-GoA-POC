import type { AssessmentAnswers } from "../types/assessment";

const storageKey = "ashc-goa-poc-assessment";

export function loadAssessment(): AssessmentAnswers {
  try {
    const value = localStorage.getItem(storageKey);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

export function saveAssessment(answers: AssessmentAnswers): void {
  localStorage.setItem(storageKey, JSON.stringify(answers));
}

export function clearAssessment(): void {
  localStorage.removeItem(storageKey);
}