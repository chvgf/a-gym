/* 튜플: 순서 중요 */
let xxx: [string, number];

/////////////////////////////////////////
/* 객체 타입을 아예 정해버려 */
type Score = "A" | "B" | "C" | "D";

interface User {
  name: string;
  age: number;
  [xxxxxx: number]: Score;
}
let user: User = {
  name: "1",
  age: 11,
  1: "A",
  2: "B",
  3: "C",
};

///////////////////////////////////////

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = (num1, num2) => {
  return num1 + num2;
};
