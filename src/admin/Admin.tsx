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
  const [insertTitle, setInsertTitle] = useState();
  const [insertContent, setInsertContent] = useState();
  const [insertImg, setInsertImg] = useState();
  const [insertConvenience, setInsertConvenience] = useState();
  const [insertRegion, setInsertRegion] = useState();
  const [insertRoadName, setInsertRoadName] = useState();
  const changeTitle = (e: any) => setInsertTitle(e.target.value); // 타이틀
  const changeContent = (e: any) => setInsertContent(e.target.value); //콘텐
  const changeImg = (e: any) => setInsertImg(e.target.value); //이미지
  const changeConvenience = (e: any) => setInsertConvenience(e.target.value); //편의
  const changeRegion = (e: any) => setInsertRegion(e.target.value); //지역
  const changeRoadName = (e: any) => setInsertRoadName(e.target.value); //도로명주소
  const handleTest = async () => {
    await axios.post(`${process.env.REACT_APP_ADDRESS}/admin/testInsert`, adminContentBoxItemUp);
  };
  const adminContentBoxItemUp = {
    title: insertTitle,
    content: insertContent,
    img: insertImg,
    convenience: insertConvenience,
    region: { region: insertRegion, roadName: insertRoadName },
    // 정보 뭐 넣을지 생각
  };

  return (
    <ManagerWrapper>
      <form>
        {/* title */}
        <label htmlFor="title">
          title입력<span>*</span>
        </label>
        <textarea id="title" placeholder="제목 입력" value={insertTitle} onChange={changeTitle} />
        <br />
        <br />
        {/* content */}
        <label htmlFor="content">
          content입력<span>*</span>
        </label>
        <textarea id="content" placeholder="내용입력" value={insertContent} onChange={changeContent} />
        <br />
        <br />
        {/* img경로 */}
        <label htmlFor="img">
          img입력<span>*</span>
        </label>
        <textarea id="img" placeholder="img입력" value={insertImg} onChange={changeImg} />
        <br />
        <br />
        {/* convenience */}
        <label htmlFor="convenience">
          convenience입력<span>*</span>
        </label>
        <textarea id="convenience" placeholder="convenience입력" value={insertConvenience} onChange={changeConvenience} />
        <br />
        <br />
        {/* region */}
        <label htmlFor="region">
          region입력<span>*</span>
        </label>
        <textarea id="region" placeholder="region입력" value={insertRegion} onChange={changeRegion} />
        <br />
        <br />
        {/* region */}
        <label htmlFor="RoadName">
          RoadName입력<span>*</span>
        </label>
        <textarea id="RoadName" placeholder="RoadName입력" value={insertRoadName} onChange={changeRoadName} />
        <br />
        <br />
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
