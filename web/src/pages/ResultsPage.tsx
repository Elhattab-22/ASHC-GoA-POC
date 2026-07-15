import {
  GoabButton,
  GoabButtonGroup,
  GoabCallout,
  GoabText,
} from "@abgov/react-components";
import { useNavigate } from "react-router-dom";
import { HousingResultCard } from "../components/results/HousingResultCard";
import { loadAssessment } from "../services/assessmentStorage";
import { findHousingMatches } from "../services/housingService";

export function ResultsPage() {
  const navigate = useNavigate();
  const results = findHousingMatches(loadAssessment());

  return (
    <main className="page-container">
      <div className="content-column">
        <GoabText tag="p" size="body-s" color="secondary" mt="none" mb="s">
          Your sample results
        </GoabText>

        <GoabText tag="h1" size="heading-xl" mt="none" mb="m">
          Housing options to explore
        </GoabText>

        <GoabText tag="p" size="body-l" mt="none" mb="xl">
          Based on your answers, these sample options may be relevant to your
          situation.
        </GoabText>

        <GoabCallout type="information" heading="About these results" mb="xl">
          These results are examples for this demonstration. They are not real
          housing listings or eligibility decisions.
        </GoabCallout>

        <section aria-label="Housing results" className="results-grid">
          {results.map((option) => (
            <HousingResultCard
              key={option.id}
              option={option}
              onViewMap={() => navigate(`/map?location=${option.id}`)}
            />
          ))}
        </section>

        <GoabButtonGroup alignment="start" mt="2xl">
          <GoabButton type="secondary" onClick={() => navigate("/assessment")}>
            Change answers
          </GoabButton>

          <GoabButton type="primary" onClick={() => navigate("/")}>
            Start again
          </GoabButton>
        </GoabButtonGroup>
      </div>
    </main>
  );
}
