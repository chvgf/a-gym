import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPg from "./pages/MainPg";
import DetailPg from "./pages/DetailPg";
import Stttt from "./Stttt"; /* 천준우 메모장 */
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
  `;
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/st" element={<Stttt />}></Route> {/* 천준우 메모장 */}
          <Route path="/" element={<MainPg />}></Route>
          <Route path="/detail" element={<DetailPg />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
