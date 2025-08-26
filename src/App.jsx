import { configureStore, createSlice } from "@reduxjs/toolkit";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

// counter 상태를 관리하는 slice 생성
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    // state는 현재 상태, action은 액션 객체
    increment(state, action) {
      return state + 1;
    },
    decrement(state, action) {
      return state - 1;
    },
  },
});
// - name: slice의 고유 키 (state.counter로 접근 가능)
// - initialState: 상태의 초기값
// - reducers: 상태를 변경하는 함수 모음

// store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter : {counter}</div>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(counterSlice.actions.decrement());
        }}
      >
        -
      </button>
    </>
  );
}
