import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { counterReducer } from "./reducer";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { thunk } from "redux-thunk";

// 액션 객체 (Action): 상태를 변경할 '의도'를 나타내는 객체
const increment1 = {
  type: "increment1",
};

const decrement1 = {
  type: "decrement1",
};

const increment2 = {
  type: "increment2",
};

const decrement2 = {
  type: "decrement2",
};
// - type 프로퍼티는 필수, 추가 데이터도 작성할 수 있다
// - 현재는 counter1, counter2 각각에 대해 + / - 정의
// → action.js로 분리하고, 상수/함수로 관리

// 리듀서 (Reducer): 이전 state와 action을 받아 새로운 state를 반환하는 함수
const counter1Reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment1":
      return state + 1;
    case "decrement1":
      return state - 1;
    default:
      return state;
  }
};

const counter2Reducer = (state = 0, action) => {
  switch (action.type) {
    case "increment2":
      return state + 1;
    case "decrement2":
      return state - 1;
    default:
      return state;
  }
};
// - combineReducers로 합쳐서 하나의 store에서 사용 가능
// → reducer.js로 분리

// combineReducers: 여러 개의 리듀서를 하나로 합치는 Redux 유틸 함수
const rootReducer = combineReducers({ counter1Reducer, counter2Reducer });

// store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
// - Redux의 중앙 상태 저장소, legacy_createStore는 구버전 API (학습용으로 사용)
// - 실제 프로젝트에서는 Redux Toolkit의 configureStore 사용 권장
// → store.js로 분리

// redux-thunk
// - 원래 dispatch는 객체만 받을 수 있다, thunk 미들웨어를 추가하면 dispatch에 함수도 전달할 수 있다.
// - dispatch에 함수가 전달되면, 미들웨어가 이 함수를 실행하면서 인자로 dispatch, getState를 넘겨준다.
// - 따라서 함수 안에서 비동기 로직을 수행한 뒤, 필요할 때 dispatch를 호출해 상태를 변경할 수 있다.
// - 실무에서는 보통 이 안에서 fetch/axios 같은 API 호출을 수행하고, 성공/실패 결과에 따라 dispatch를 실행한다고 한다.

// App
export default function App() {
  // useSelector: store의 state를 구독
  const counter1 = useSelector((state) => state.counter1Reducer);
  const counter2 = useSelector((state) => state.counter2Reducer);
  // useDispatch: 액션을 store에 전달
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>Counter: {counter1}</div>
        {/* 버튼 클릭 시 1초 뒤에 액션을 dispatch */}
        <button
          onClick={() =>
            dispatch((dispatch) => {
              setTimeout(() => {
                dispatch(increment1); // 1초 후에 증가 액션 실행
              }, 1000);
            })
          }
        >
          +
        </button>
        <button
          onClick={() =>
            dispatch((dispatch) => {
              setTimeout(() => {
                dispatch(decrement1); // 1초 후에 감소 액션 실행
              }, 1000);
            })
          }
        >
          -
        </button>
      </div>
      <div>
        <div>Counter: {counter2}</div>
        <button onClick={() => dispatch(increment2)}>+</button>
        <button onClick={() => dispatch(decrement2)}>-</button>
      </div>
    </>
  );
}
// - 각각 counter1, counter2 상태를 구독하고 버튼 클릭 시 액션 dispatch
