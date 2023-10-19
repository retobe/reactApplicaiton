import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Yemen", "Saudi Arabia", "Palestine", "Iraq"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Arab Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
