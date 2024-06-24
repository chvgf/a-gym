import React from "react";
import styled from "styled-components";
import ContentBoxItem from "./ContentBoxItem";

const ContentBoxCompWrapper = styled.section`
  width: 70%;
  height: 40rem;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
`;
const ContentList = styled.div`
  background-color: cadetblue;
`;
function ContentBox(props: any) {
  interface ContentBoxItems {
    title: string;
    content: string;
    img: string;
    convenience: string;
  }
  const itemTest: ContentBoxItems[] = [
    {
      title: "준우짐",
      content: "준우짐내용",
      img: "사진경로",
      convenience: "편의시설들",
    },
    {
      title: "준우짐2",
      content: "준우짐내용2",
      img: "사진경로2",
      convenience: "편의시설들2",
    },
    {
      title: "준우짐3",
      content: "준우짐내용3",
      img: "사진경로3",
      convenience: "편의시설들3",
    },
  ];

  // 콘텐트 박스형태로 나열하고 더보기 만들어서 밑으로 쭊쭊 가게.. 맨 위에 소트기능 만들어서 검색가능하게 만들기, db 연동 수정
  return (
    <ContentBoxCompWrapper>
      <ContentList>
        {itemTest.map((itemTestMap) => {
          return (
            <ContentBoxItem
              key={1}
              title={itemTestMap.title}
              content={itemTestMap.content}
              img={itemTestMap.img}
              convenience={itemTestMap.convenience}
            />
          );
        })}
      </ContentList>
    </ContentBoxCompWrapper>
  );
}

export default ContentBox;
