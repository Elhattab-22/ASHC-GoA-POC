import {
  GoabBadge,
  GoabButton,
  GoabContainer,
  GoabText,
} from "@abgov/react-components";
import type { HousingOption } from "../../types/housing";

type Props = {
  option: HousingOption;
  onViewMap: () => void;
};

export function HousingResultCard({ option, onViewMap }: Props) {
  return (
    <GoabContainer
      type="non-interactive"
      accent="thin"
      padding="relaxed"
      width="full"
    >
      <div className="result-card-header">
        <GoabText tag="h2" size="heading-m" mt="none" mb="none">
          {option.name}
        </GoabText>

        <GoabBadge type="information" content={option.housingType} />
      </div>

      <GoabText tag="p" mt="m" mb="l">
        {option.description}
      </GoabText>

      <dl className="result-meta">
        <dt>Location</dt>
        <dd>{option.location}</dd>

        <dt>Estimated wait</dt>
        <dd>{option.estimatedWait}</dd>

        <dt>Rent</dt>
        <dd>{option.rent}</dd>

        <dt>Suitable for</dt>
        <dd>{option.suitableFor}</dd>
      </dl>

      <GoabButton
        type="tertiary"
        trailingIcon="arrow-forward"
        mt="l"
        onClick={onViewMap}
      >
        View on map
      </GoabButton>
    </GoabContainer>
  );
}
