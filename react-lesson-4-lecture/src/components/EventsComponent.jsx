function EventsComponent() {
  return (
    <div>
      <h1 onClick={() => console.log("Click")}>Single Click</h1>
      <h1 onClick={() => console.log("Double Click")}>Double Click</h1>
      <h1
        onMouseDown={() => console.log("Button pressed")}
        onMouseOut={() => console.log("Button Released")}
      >
        Hold Mouse Button
      </h1>
      <h1
        onMouseOver={() => console.log("Cursor pointed")}
        onMouseOut={() => console.log("Cursor Out")}
      >
        Cursor point
      </h1>
      <h1 onMouseMove={() => console.log("Cursor Moved")}>Move Cursor</h1>
    </div>
  );
}

export default EventsComponent;
