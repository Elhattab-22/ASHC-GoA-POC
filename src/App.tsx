import AppLayout from "./components/layout/AppLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import { AssessmentPage } from "./pages/AssessmentPage";
import HomePage from "./pages/HomePage";
import { ResultsPage } from "./pages/ResultsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
