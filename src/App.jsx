import "./App.css";

// App.jsx 안에 액션 객체 직접 정의했었으나,
// const increment = {
//   type: "increment",
// };

// const decrement = {
//   type: "decrement",
// };
// → action.js로 분리하고, 상수/함수로 관리

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
