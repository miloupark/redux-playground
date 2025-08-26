// 상태와 액션에 따라 새로운 상태를 반환하는 함수
const counterReducer = (state = 0, action) => {
  // 카운터 초기값 0
  switch (
    action.type // action.type에 따라 분기 처리
  ) {
    case "increment":
      return state + 1; // 기존 state + 1
    case "decrement":
      return state - 1; // 기존 state - 1
    default: // 일치하는 액션이 없으면 state를 그대로 반환
      return state;
  }
};
// - 현재는 단일 상태(숫자 카운터)만 관리
// - 추후 combineReducers 등을 사용해 다른 reducer와 합칠 수 있음
