import type { AssessmentQuestionModel } from "../../types/assessment";

type Props = {
  question: AssessmentQuestionModel;
  value?: string;
  error?: string;
  onChange: (value: string) => void;
};

export function AssessmentQuestion({
  question,
  value,
  error,
  onChange,
}: Props) {
  return (
    <fieldset className="question-card">
      <legend>{question.label}</legend>

      {question.helpText && <p>{question.helpText}</p>}

      {question.options.map((option) => (
        <label className="radio-option" key={option.value}>
          <input
            type="radio"
            name={question.id}
            value={option.value}
            checked={value === option.value}
            onChange={(event) => onChange(event.target.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}

      {error && (
        <p className="error-text" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}