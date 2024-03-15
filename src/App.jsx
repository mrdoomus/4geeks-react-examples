import "./style.css";
import { PostProvider } from "./use-context/PostContext";
import PostList from "./use-context/PostList";
import Routes from "./routes/Routes";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
