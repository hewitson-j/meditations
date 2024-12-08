import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import PageContainer from "../shared/PageContainer";

interface ErrorPageProps {
  title?: string;
  message?: string;
}

export default function ErrorPage({
  title = "Error",
  message = "You've come to the wrong page! Click the button to return home.",
}: ErrorPageProps) {
  const navigate = useNavigate();

  return (
    <PageContainer className="error">
      <div className="error-content">
        <h1>{title}</h1>
        <p>{message}</p>
        <button
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </button>
      </div>
    </PageContainer>
  );
}
