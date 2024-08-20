import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";

const App = () => {
  const name = "Ian";

  const test = (name: String = "tite", age: Number = 12) => {
    return console.log(name, age);
  };

  test("ian", 24);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {name}
      <Button className="bg-red-500" onClick={() => console.log("test")}>
        <p>Hello</p>
      </Button>
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <div className="border p-10 rounded-md bg-white">
          <p>Modal</p>
        </div>
      </Modal>
    </div>
  );
};

export default App;
