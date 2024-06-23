import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPg from "./pages/MainPg";
import DetailPg from "./pages/DetailPg";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPg />}></Route>
          <Route path="/detail" element={<DetailPg />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
