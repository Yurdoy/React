import "./App.css";
import Animals from "./components/Animals";
import Counter from "./components/Counter";
import EventsComponent from "./components/EventsComponent";
import FeedbackForm from "./components/FeedbackForm";
import ImageCarousel from "./components/ImageCarousel";
import MyForm from "./components/MyForm";
import Title from "./components/Title";

function App() {
  const sayHello = () => {
    console.log("Hello, word!");
  };

  return (
    <>
      <button onClick={sayHello}>Click me</button>
      <EventsComponent />
      <FeedbackForm />
      <ImageCarousel />
      <MyForm />
      <Title />
      <Counter />
      <Animals />
    </>
  );
}

export default App;
