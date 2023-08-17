import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category"; // 확장자 .jsx는 생략합니다.
import CharacterChange from "./components/CharacterChange/CharacterChange";
/*import CorrectionNote from "./components/CorrectionNote/CorrectionNote";*/
import HomePage from "./components/HomePage/HomePage";
import MyCharacter from "./components/MyCharacter/MyCharacter";
import MyPage from "./components/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/Category" element={<Category />} />
      <Route path="/CharacterChange" element={<CharacterChange />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/MyCharacter" element={<MyCharacter />} />
      <Route path="/MyPage" element={<MyPage />} />
    </BrowserRouter>
  );
}

export default App;
