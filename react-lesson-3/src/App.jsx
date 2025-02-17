import "./App.css";
import CustomBlock from "./components/CustomBlock";
import { postList } from "./config/post";

function App() {
  return (
    <>
      {postList.map((item) => (
        <CustomBlock
          postTitle={item.title}
          postDescription={item.description}
          postAuthor={item.author}
          postAuthorAge={item.authorAge}
          postMainContent={item.mainContent}
        />
      ))}
    </>
  );
}
export default App;
