import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
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

// 비동기 액션 (1초 지연 후 증가)
const slowIncrementThunk = createAsyncThunk(
  "counter/slowIncrement",
  (value, { dispatch }) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.increment());
    }, 1000);
  }
);

// 비동기 액션 (1초 지연 후 감소)
const slowDecrementThunk = createAsyncThunk(
  "counter/slowDecrement",
  (value, { dispatch }) => {
    setTimeout(() => {
      dispatch(counterSlice.actions.decrement());
    }, 1000);
  }
);

// Redux store 생성 및 slice 등록
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default function App() {
  const counter = useSelector((state) => state.counter); // 상태 구독
  const dispatch = useDispatch(); // dispatch 함수 가져오기

  return (
    <>
      <div>Counter : {counter}</div>
      {/* 동기 액션 */}
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

      {/* 비동기 액션 */}
      <button
        onClick={() => {
          dispatch(slowIncrementThunk());
        }}
      >
        Slow +
      </button>
      <button
        onClick={() => {
          dispatch(slowDecrementThunk());
        }}
      >
        Slow -
      </button>
    </>
  );
}
