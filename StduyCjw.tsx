import React from "react";

function Stduycjw(props: any) {
  /* 튜플: 순서 중요 */
  let xxx: [string, number];

  /////////////////////////////////////////
  type Score = "A" | "B" | "C" | "D";

  interface User {
    name: string;
    age: number;
    readonly birthYear?: string;
    [xxxxxx: number]: Score /* num키로 Score타입으로 받음 */;
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
  let a = add(1, 2);
  console.log(a);

  return <div>연습장이앾</div>;
}

export default Stduycjw;
