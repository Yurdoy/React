import "./App.css";
import EventsComponent from "./components/EventsComponent";
import FeedbackForm from "./components/FeedbackForm";
import ImageCarousel from "./components/ImageCarousel";

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
    </>
  );
}

export default App;
