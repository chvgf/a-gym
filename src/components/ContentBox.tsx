import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ContentBoxItem from "./ContentBoxItem";
import axios from "axios";

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
const MoreButton = styled.button`
  width: 150px;
  height: 50px;
  margin: 30px;
  background-color: chartreuse;
`;
function ContentBox(props: any) {
  const [contentBoxItemsRes, setContentBoxItemsRes]: any = useState([]);
  const [contentBoxItemsResMore, setContentBoxItemsResMore]: any = useState([]);
  // tset용
  interface ContentBoxItems {
    title: string;
    content: string;
    img: string;
    convenience: string;
  }
  useEffect(() => {
    const getItems = async () => {
      try {
        const response: any = await axios.get(`${process.env.REACT_APP_ADDRESS}/content`);
        setContentBoxItemsRes(response.data.data[0]);
        setContentBoxItemsResMore(response.data.data[1]);
      } catch (error) {
        console.error(error);
      }
    };
    getItems();
  }, []);
  const moreBtn = () => {
    setContentBoxItemsRes(contentBoxItemsRes.concat(contentBoxItemsRes.length, contentBoxItemsResMore));
  };

  // 콘텐트 박스형태로 나열하고 더보기 만들어서 밑으로 쭊쭊 가게.. 맨 위에 소트기능 만들어서 검색가능하게 만들기, db 연동 수정
  return (
    <ContentBoxCompWrapper>
      <FilterBox>필터버튼들들들</FilterBox>
      <ContentList>
        {contentBoxItemsRes.map((itemTestMap: ContentBoxItems, index: number) => {
          return (
            <ContentBoxItem
              key={index}
              title={itemTestMap.title}
              content={itemTestMap.content}
              img={itemTestMap.img}
              convenience={itemTestMap.convenience}
            />
          );
        })}
      </ContentList>
      <MoreButton onClick={moreBtn}>더보기</MoreButton>
    </ContentBoxCompWrapper>
  );
}

export default ContentBox;
