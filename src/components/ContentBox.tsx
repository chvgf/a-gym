import React from "react";
import styled from "styled-components";
import ContentBoxItem from "./ContentBoxItem";

const ContentBoxCompWrapper = styled.main`
  width: 100%;
  height: auto;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #131313;
  padding: 30px 0;
`;
const FilterBox = styled.div`
  width: 66%;
  height: 100px;
  background-color: red;
  margin: 10px;
`;
const ContentList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 66%;
  background-color: cadetblue;
`;
function ContentBox(props: any) {
  // tset용
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
    {
      title: "준우짐3",
      content: "준우짐내용3",
      img: "사진경로3",
      convenience: "편의시설들3",
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
      <FilterBox>필터버튼들들들</FilterBox>
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
