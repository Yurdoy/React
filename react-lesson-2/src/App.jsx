import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  const arr = ["Hello", "World", "Earth"];
  return (
    <>
      {arr.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      {arr.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      <Header />
      <Posts title="Orange" description="Orange Drum" price="100" />
      <Posts title="Apple" description="Apple Box" price="100" />
      <Posts title="Banana" description="Banana Box" price="100" />
    </>
  );
}

export default App;
