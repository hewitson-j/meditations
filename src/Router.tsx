import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/pages/LandingPage";
import HomePage from "./components/pages/HomePage";
import ErrorPage from "./components/pages/ErrorPage";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />

        {/* Error handling routes */}
        <Route path="/error" element={<ErrorPage />} />
        <Route
          path="/error/not-found"
          element={
            <ErrorPage
              title="Page Not Found"
              message="Whoops! Looks like you've come to a non-existent page. Press the button below to be redirected home."
            />
          }
        />
        <Route path="*" element={<Navigate to={"/error/not-found"} />} />
      </Routes>
    </HashRouter>
  );
}
