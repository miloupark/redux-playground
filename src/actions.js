// 액션 타입 상수 정의
export const INCREMENT = "counter/increment";
export const DECREMENT = "counter/decrement";

// 액션 생성 함수
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
// - 단순 객체 { type: "..." }를 직접 쓰는 대신 함수로 감싸서 재사용/확장 가능
// - payload, meta 등 추가 데이터도 쉽게 넣을 수 있다
