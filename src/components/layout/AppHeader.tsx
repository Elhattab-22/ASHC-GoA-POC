import { GoabMicrositeHeader } from "@abgov/react-components";

export default function AppHeader() {
  const onClick = () => {
    console.log("Feedback clicked");
    alert("Thank you for your feedback!");
  };

  return <GoabMicrositeHeader type="alpha" onFeedbackClick={onClick} />;
}
