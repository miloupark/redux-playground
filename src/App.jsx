import "./App.css";

const increment = {
  type: "increment",
};

const decrement = {
  type: "decrement",
};

function App() {
  return (
    <>
      <div>Counter: 0</div>
      <button>-</button>
      <button>+</button>
    </>
  );
}

export default App;
