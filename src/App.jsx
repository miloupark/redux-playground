import "./App.css";

// App.jsx 안에 액션 객체 직접 정의했었으나,
// const increment = {
//   type: "increment",
// };

// const decrement = {
//   type: "decrement",
// };
// → action.js로 분리하고, 상수/함수로 관리

// 액션 type에 따라 상태를 변경하는 함수
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
// → reducer.js로 분리 예정

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
