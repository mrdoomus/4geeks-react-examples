import "./style.css";
import CountA from "./use-context-beginner-friendly/CountA";
import CountB from "./use-context-beginner-friendly/CountB";
import { CountProvider } from "./use-context-beginner-friendly/CountContext";

function App() {
  return (
    <div>
      <CountProvider>
        <CountA />
        <CountB />
      </CountProvider>
    </div>
  );
}

export default App;
