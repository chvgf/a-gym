import React from "react";
import styled from "styled-components";
import { MainBg03 } from "../imges";

const HeaderCompWrapper = styled.header`
  width: 70%;
  height: 25rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderBg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${MainBg03});
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  p:first-child {
    font-size: 1.5rem;
    color: #fff;
    margin: 15px 0 15px 30px;
  }
  p:last-child {
    font-size: 2rem;
    color: #fff;
    margin: 15px 0 15px 30px;
  }
`;
function Header(props: any) {
  // 백그라운드 이미지, 설명글...  사진 왼쪽 살짝 이상
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
