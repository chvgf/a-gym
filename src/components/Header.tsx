import React from "react";
import styled from "styled-components";
import { MainBg03 } from "../imges";

const HeaderCompWrapper = styled.div`
  width: 70%;
  height: 25rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderBg = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${MainBg03});
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    font-size: 1rem;
    color: #fff;
  }
`;
function Header(props: any) {
  // 백그라운드 이미지, 설명글...
  return (
    <HeaderCompWrapper>
      <HeaderBg>
        <p>오늘도 내일도 언제 어디서나</p>
        <p>
          운동을 일상처럼 <br />
          짐랫폼
        </p>
      </HeaderBg>
    </HeaderCompWrapper>
  );
}

export default Header;
