import { GoabButton } from "@abgov/react-components";
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
        <p className="eyebrow">Your sample results</p>
        <h1>Housing options to explore</h1>
        <p className="lead">
          Based on your answers, these sample options may be relevant to your
          situation.
        </p>

        <section className="results-grid">
          {results.map((option) => (
            <HousingResultCard key={option.id} option={option} />
          ))}
        </section>

        <div className="button-row">
          <GoabButton
            type="secondary"
            onClick={() => navigate("/assessment")}
          >
            Change answers
          </GoabButton>
          <GoabButton type="primary" onClick={() => navigate("/")}>
            Start again
          </GoabButton>
        </div>

        <p className="disclaimer">
          Demo only: all programs, properties, wait times and rent amounts are
          fabricated.
        </p>
      </div>
    </main>
  );
}