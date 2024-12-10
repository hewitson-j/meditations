import "./ErrorPage.css";
import PageContainer from "../shared/PageContainer";
import NavButton from "../shared/NavButton";

interface ErrorPageProps {
  title?: string;
  message?: string;
}

export default function ErrorPage({
  title = "Error",
  message = "You've come to the wrong page! Click the button to return home.",
}: ErrorPageProps) {
  return (
    <PageContainer className="error">
      <div className="error-content">
        <h1>{title}</h1>
        <p>{message}</p>
        <NavButton type="navigation" to={"/home"}>
          Home
        </NavButton>
      </div>
    </PageContainer>
  );
}
