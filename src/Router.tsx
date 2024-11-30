import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
