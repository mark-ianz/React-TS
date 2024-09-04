import Button from "./components/Button";

const App = () => {
  const name = "Ian";

  const test = (name: String = "tite", age: Number = 12) => {
    return console.log(name, age);
  };

  test("ian", 24);

  return (
    <div>
      {name}
      <Button className="bg-red-500" onClick={() => console.log("test")}>
        <p>Hello</p>
      </Button>
    </div>
  );
};

export default App;
