import ShowCalc from "./components/ShowCalc";
import CarList from "./components/CarList";
import RandomPhrase from "./components/RandomPhrase";
import Content from "./components/Content";
import Card from "./components/Card";
import TodoItem from "./components/TodoItem";
import Box from "./components/Box";
import AlbumList from "./components/AlbumList";

function App() {
  return (
    <>
      <ShowCalc />
      <CarList />
      <RandomPhrase />
      <Content
        titleText="First component"
        paragraphText="Paragraph text of first component"
        imageLink="https://images.unsplash.com/photo-1579019154498-df5c364cc469?q=80&w=
        1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f
        GVufDB8fHx8fA%3D%3D"
        imageAlt="lamp"
      />
      <Content
        titleText="Second component"
        paragraphText="Paragraph text of second component"
        imageLink="https://images.unsplash.com/photo-1592093397571-36323190f372?q=80&w=
        1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f
        GVufDB8fHx8fA%3D%3D"
        imageAlt="city"
      />
      <Content
        titleText="Third component"
        paragraphText="Paragraph text of third component"
        imageLink="https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=
        1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8f
        GVufDB8fHx8fA%3D%3D"
        imageAlt="hands"
      />

      <Card itemTitle="Milk" isInStock={true} itemPrice={5} />
      <Card itemTitle="Apple" isInStock={false} itemPrice={2} />
      <Card itemTitle="Cheese" isInStock={true} itemPrice={6} />

      <TodoItem text="React to be learned" isCompleted={true} />

      <Box>
        <p>This is text inside block</p>
        <p>And this is one more paragraph inside the same block</p>
      </Box>

      <AlbumList />
    </>
  );
}

export default App;
