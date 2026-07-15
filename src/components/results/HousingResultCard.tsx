import type { HousingOption } from "../../types/housing";

type Props = {
  option: HousingOption;
};

export function HousingResultCard({ option }: Props) {
  return (
    <article className="result-card">
      <h2>{option.name}</h2>
      <p>{option.description}</p>

      <dl className="result-meta">
        <dt>Location</dt>
        <dd>{option.location}</dd>

        <dt>Housing type</dt>
        <dd>{option.housingType}</dd>

        <dt>Estimated wait</dt>
        <dd>{option.estimatedWait}</dd>

        <dt>Rent</dt>
        <dd>{option.rent}</dd>
      </dl>
    </article>
  );
}