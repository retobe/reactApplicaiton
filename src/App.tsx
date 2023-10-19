import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Yemen", "Saudi Arabia", "Palestine", "Iraq"];

  return (
    <div>
      <ListGroup items={items} heading="Arab Countries" />
    </div>
  );
}

export default App;
