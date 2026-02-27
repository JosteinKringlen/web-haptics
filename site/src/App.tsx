import Home from "./components/homepage";
import { ParticlesProvider } from "./components/particles";

function App() {
  return (
    <ParticlesProvider>
      <Home />
    </ParticlesProvider>
  );
}

export default App;
