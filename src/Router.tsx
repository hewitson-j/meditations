import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </HashRouter>
  );
}
