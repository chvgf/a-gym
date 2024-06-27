import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import Stttt from "./Stttt"; /* 천준우 메모장 */
import Admin from "./admin/Admin"; /* 관리자 페이지 */
import MainPg from "./pages/MainPg";
import DetailPg from "./pages/DetailPg";

const GlobalStyle = createGlobalStyle`
    ${reset}
  `;
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/admin" element={<Admin />}></Route> {/* 관리자 테스트 */}
          <Route path="/st" element={<Stttt />}></Route> {/* 천준우 메모장 */}
          <Route path="/" element={<MainPg />}></Route>
          <Route path="/detail" element={<DetailPg />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
