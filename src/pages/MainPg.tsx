import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Test1 from "../components/Test1";
import Test2 from "../components/Test2";
import ContentBox from "../components/ContentBox";

const MainPgWrapper = styled.div`
  // 각 페이지 마다 wrapper 동일하게.. 하고 header 컴포넌트 그 안에 넣는걸로~  Wrapper Pg , Comp로 나눠서 같이 쓰기
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  background-color: #0f0f0f;
  width: 100%;
  height: auto;
`;

function MainPg(props: any) {
  return (
    <MainPgWrapper>
      <Header></Header>
      <ContentBox></ContentBox>
      <Test1></Test1>
      <Test2></Test2>
    </MainPgWrapper>
  );
}

export default MainPg;
