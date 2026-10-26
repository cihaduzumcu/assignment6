import { useEffect, useReducer } from "react";
import { fetchPosts } from "./api/postsApi";
import { postsReducer, initialState } from "./reducer/postsReducer";
import PostList from "./components/PostList";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts(controller.signal);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    }

    loadPosts();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Post Dashboard</h1>
      <PostList posts={state.posts} />
    </div>
  );
}

export default App;