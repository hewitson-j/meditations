import "./Home.css";
import NavButton from "./shared/NavButton";
import PageHead from "./shared/PageHead";

export default function Home() {
  return (
    <div className="home">
      <PageHead title="Home" />
      <div>
        <h1>Meditations</h1>
        <NavButton to="/home" type="navigation">
          Home
        </NavButton>
      </div>
    </div>
  );
}
