import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ManagerWrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #eee;
  padding-top: 100px;
`;

function Admin(props: any) {
  const [insertTest1, setInsertTest1] = useState();
  const [insertTitle, setInsertTitle] = useState();
  const changeContent = (e: any) => setInsertTest1(e.target.value); //콘텐
  const changeTitle = (e: any) => setInsertTitle(e.target.value); // 타이틀
  const handleTest = async () => {
    await axios.post(`${process.env.REACT_APP_ADDRESS}/testInsert`, int);
  };
  const int = {
    title: insertTitle,
    content: insertTest1,
  };

  return (
    <ManagerWrapper>
      <form>
        <label htmlFor="title">
          제목입력<span>*</span>
        </label>
        <textarea id="title" placeholder="제목 입력" value={insertTitle} onChange={changeTitle} />
        <label htmlFor="content">
          내용입력<span>*</span>
        </label>
        <textarea id="content" placeholder="내용 입력" value={insertTest1} onChange={changeContent} />
      </form>
      <button
        type="submit"
        onClick={() => {
          handleTest();
          alert("게시글작성 테스트");
        }}
      >
        버튼
      </button>
    </ManagerWrapper>
  );
}

export default Admin;
