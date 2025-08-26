import { legacy_createStore } from "redux";
// import { counterReducer } from "./reducer";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

// App.jsx 안에 액션 객체 직접 정의했었으나,
const increment = {
  type: "increment",
};

const decrement = {
  type: "decrement",
};
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
// → reducer.js로 분리

// 상태 저장소: legacy_createStore는 구버전 API (학습용으로 사용)
// 실제 프로젝트에서는 Redux Toolkit의 configureStore 사용 권장
export const store = legacy_createStore(counterReducer);
// → store.js로 분리

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment)}>+</button>
      <button onClick={() => dispatch(decrement)}>-</button>
    </>
  );
}

export default App;
