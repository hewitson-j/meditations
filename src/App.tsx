import EntriesProvider from "./components/shared/EntriesProvider";
import Router from "./Router";
import ParticlesBg from "particles-bg";

export default function App() {
  return (
    <>
      <ParticlesBg type="cobweb" bg />
      <EntriesProvider>
        <Router />
      </EntriesProvider>
    </>
  );
}
