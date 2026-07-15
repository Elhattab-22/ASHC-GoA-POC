import {
  GoabFormItem,
  GoabRadioGroup,
  GoabRadioItem,
} from "@abgov/react-components";
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
    <GoabFormItem
      label={question.label}
      labelSize="large"
      helpText={question.helpText}
      error={error}
      type="radio-group"
      maxWidth="640px"
    >
      <GoabRadioGroup
        name={question.id}
        value={value ?? ""}
        error={Boolean(error)}
        onChange={(event) => onChange(event.value)}
      >
        {question.options.map((option) => (
          <GoabRadioItem
            key={option.value}
            value={option.value}
            label={option.label}
          />
        ))}
      </GoabRadioGroup>
    </GoabFormItem>
  );
}
