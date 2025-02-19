import "./App.css";
import CustomBlock from "./components/CustomBlock";
import CustomItem from "./components/CustomItem";
import Block from "./Block";
import { postList } from "./config/post";
import CustomItem2 from "./CustomItem2";
import CardList from "./components/CardList";

function App() {
  const buttonText = "Click btn";
  const titleForComponent = "Title for component";
  return (
    <>
      {postList.map((item) => (
        <CustomBlock
          postTitle={item.title}
          postDescription={item.description}
          postAuthor={item.author}
          postAuthorAge={item.authorAge}
          postMainContent={item.mainContent}
          textBtn={buttonText}
        />
      ))}
      <CustomItem title={titleForComponent} />

      {/* <Block itemCount={customItemCount} itemCount={descriptionText} /> */}
      <CardList />
      <Block />
    </>
  );
}
export default App;
