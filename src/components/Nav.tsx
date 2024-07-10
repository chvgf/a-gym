import React from "react";
import styled from "styled-components";
import { logo1 } from "../imges";
import { useNavigate } from "react-router-dom";
const NavCompWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  left: auto;
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  .login {
    display: flex;
    p {
      margin: 0 5px;
    }
  }
  ul {
    display: flex;
    li {
      margin: 0 20px;
    }
  }
`;

function Nav(props: any) {
  const navigate = useNavigate();
  // 브랜드로고 || 주변헬스장, 지역검색, 지도검색, 이벤트, 커뮤니티?  || 로그인, 회원가입, 검색창     스크롤이벤트로 컬러 바꾸깅     로고 누키따야함
  return (
    <NavCompWrapper>
      <div>
        <img
          src={logo1}
          alt="로고"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <ul>
        <li>배드민턴좋아</li>
        <li>어쩌구저쩌구</li>
        <li>강아지귀여워</li>
        <li>고객센터</li>
      </ul>
      <div className="login">
        <p
          onClick={() => {
            navigate("/signin");
          }}
        >
          로그인
        </p>
        <p
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입
        </p>
      </div>
    </NavCompWrapper>
  );
}

export default Nav;
