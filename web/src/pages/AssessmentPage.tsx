import { GoabButton, GoabButtonGroup, GoabText } from "@abgov/react-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AssessmentQuestion } from "../components/assessment/AssessmentQuestion";
import { ProgressIndicator } from "../components/assessment/ProgressIndicator";
import { assessmentQuestions } from "../data/assessmentQuestions";
import { loadAssessment, saveAssessment } from "../services/assessmentStorage";
import type { AssessmentAnswers } from "../types/assessment";

export function AssessmentPage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<AssessmentAnswers>(loadAssessment);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  const question = assessmentQuestions[currentIndex];
  const value = answers[question.id];
  const isLast = currentIndex === assessmentQuestions.length - 1;

  function changeAnswer(nextValue: string) {
    const nextAnswers = {
      ...answers,
      [question.id]: nextValue,
    };

    setAnswers(nextAnswers);
    saveAssessment(nextAnswers);
    setError("");
  }

  function continueAssessment() {
    if (!value) {
      setError("Select an answer to continue.");
      return;
    }

    if (isLast) {
      navigate("/results");
      return;
    }

    setCurrentIndex((index) => index + 1);
    setError("");
  }

  function goBack() {
    if (currentIndex === 0) {
      navigate("/");
      return;
    }

    setCurrentIndex((index) => index - 1);
    setError("");
  }

  return (
    <main className="page-container">
      <div className="content-column">
        <GoabText tag="h1" size="heading-xl" mt="none" mb="m">
          Find housing support
        </GoabText>

        <GoabText tag="p" mb="xl">
          Answer a few questions to see housing options that may meet your
          needs.
        </GoabText>

        <ProgressIndicator
          current={currentIndex + 1}
          total={assessmentQuestions.length}
        />

        <AssessmentQuestion
          question={question}
          value={value}
          error={error}
          onChange={changeAnswer}
        />

        <GoabButtonGroup alignment="start" mt="2xl">
          <GoabButton type="primary" onClick={continueAssessment}>
            {isLast ? "View results" : "Continue"}
          </GoabButton>

          <GoabButton type="secondary" onClick={goBack}>
            Back
          </GoabButton>
        </GoabButtonGroup>
      </div>
    </main>
  );
}
