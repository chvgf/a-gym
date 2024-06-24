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
`;

function ContentBoxItem(props: any) {
  return (
    <ContentBoxItemWrapper>
      {props.title}
      {props.content}
      {props.img}
      {props.convenience}
    </ContentBoxItemWrapper>
  );
}

export default ContentBoxItem;
