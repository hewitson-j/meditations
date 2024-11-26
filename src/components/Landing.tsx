import "./Landing.css";
import Header from "./shared/Header";
import NavButton from "./shared/NavButton";
import PageHead from "./shared/PageHead";

export default function Landing() {
  return (
    <div className="landing">
      <PageHead title="Home" />
      <div>
        <Header size="h1">Meditations</Header>
        <h2>A Site for Reflection</h2>
        <NavButton to="/home" type="navigation">
          Home
        </NavButton>
      </div>
    </div>
  );
}
