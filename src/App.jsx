import "./style.css";
import { PostProvider } from "./use-context/PostContext";
import PostList from "./use-context/PostList";

function App() {
  return (
    <div>
      <PostProvider>
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
