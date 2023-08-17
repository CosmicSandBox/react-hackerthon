import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import CharacterChange from "./components/CharacterChange/CharacterChange";
import HomePage from "./components/HomePage/HomePage";
import MyCharacter from "./components/MyCharacter/MyCharacter";
import MyPage from "./components/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Category} />
      <Route path="/CharacterChange" component={CharacterChange} />
      <Route path="/HomePage" component={HomePage} />
      <Route path="/MyCharacter" component={MyCharacter} />
      <Route path="/MyPage" component={MyPage} />
    </BrowserRouter>
  );
}

export default App;
