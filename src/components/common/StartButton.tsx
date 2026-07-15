import { GoabButton } from "@abgov/react-components";
import { useNavigate } from "react-router-dom";

export default function StartButton() {
  const navigate = useNavigate();

  return (
    <div className="page-container start-button-section">
      <GoabButton type="start" onClick={() => navigate("/assessment")}>
        Start
      </GoabButton>
    </div>
  );
}
