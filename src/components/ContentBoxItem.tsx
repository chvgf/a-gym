import React from "react";
import styled from "styled-components";

const ContentBoxItemWrapper = styled.section`
  width: 250px;
  height: 333px;
  margin: 10px;
  padding: 10px;
  background-color: #252525;
  color: #fff;
  border: 1px solid #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImgBox = styled.div`
  width: 230px;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;
const Title = styled.div`
  width: 200px;
  height: 50px;
  background-color: #376c9b;
`;
const Convenience = styled.div`
  width: 200px;
  background-color: blanchedalmond;
`;
function ContentBoxItem(props: any) {
  // 이미지 안에 찜버튼  밑에  제목과 찜 갯수  밑에  도로명주소?   밑에  ㅡ 긋고 해시태그 #ㅇㅇ동헬스장, 편의시설들
  return (
    <ContentBoxItemWrapper>
      <ImgBox>
        <img src={props.img} alt="더미이미지"></img>
        <div>📌</div>
      </ImgBox>
      <Title>
        <div>{props.title}</div>
        <div>{"찜갯수"}</div>
      </Title>
      {props.content}
      <Convenience>{props.convenience}</Convenience>
    </ContentBoxItemWrapper>
  );
}

export default ContentBoxItem;
