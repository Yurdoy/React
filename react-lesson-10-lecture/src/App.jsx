import "./App.css";
import Header from "./components/Header";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className={styles.main}>
          <PostList />
          <PostForm />
        </main>
      </div>
    </>
  );
}

export default App;
