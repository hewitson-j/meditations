import { HashRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}
