import { createSlice } from "@reduxjs/toolkit";
import "./App.css";

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

export default function App() {
  return (
    <>
      <div>Counter : 0</div>
      <button>+</button>
      <button>-</button>
    </>
  );
}
