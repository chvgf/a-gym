import React from "react";
import styled from "styled-components";
const NavCompWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  left: auto;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: rgba(116, 116, 116, 0.3);
`;

function Nav(props: any) {
  // 브랜드로고 || 주변헬스장, 지역검색, 지도검색, 이벤트, 커뮤니티?  || 로그인, 회원가입, 검색창
  return (
    <NavCompWrapper>
      <div>네브바입니담마마마마마마</div>
      <div>네브바입니담마마마마마마</div>
      <div>네브바입니담마마마마마마</div>
    </NavCompWrapper>
  );
}

export default Nav;
