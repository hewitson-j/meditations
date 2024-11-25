import "./Home.css";
import NavButton from "./shared/NavButton";

export default function Home() {
  return (
    <div className="home">
      <h1>Meditations</h1>
      <NavButton to="/home">Home</NavButton>
    </div>
  );
}
