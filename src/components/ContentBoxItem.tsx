import React from "react";
import styled from "styled-components";

const ContentBoxItemWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;
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
