import { GoabText } from "@abgov/react-components";

type Props = {
  current: number;
  total: number;
};

export function ProgressIndicator({ current, total }: Props) {
  return (
    <GoabText
      tag="p"
      size="body-s"
      color="secondary"
      mt="none"
      mb="l"
      aria-label={`Step ${current} of ${total}`}
    >
      Step {current} of {total}
    </GoabText>
  );
}
