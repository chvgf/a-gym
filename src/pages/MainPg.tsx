import React from "react";
import DetailPg from "./DetailPg";

function MainPg(props: any) {
  const Res = {
    _id: "abc",
    title: "a",
  };

  interface User {
    name: string;
    age: number;
    readonly j: string;
  }
  let user: User = {
    name: "1",
    age: 1,
    j: "1",
  };

  return (
    <div>
      <DetailPg test={Res}></DetailPg>
      {Res.title}
    </div>
  );
}

export default MainPg;
