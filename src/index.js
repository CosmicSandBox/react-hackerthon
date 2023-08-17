import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route } from "react-router-dom";
import Category from "./components/Category/Category";
import HomePage from "./components/HomePage/HomePage";
/*import CorrectionNote from "./components/CorrectionNote/CorrectionNote";*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/Category" element={<Category />} />
      <Route path="/HomePage" element={<HomePage />} />
      {/* 추가로 더 많은 경로와 컴포넌트를 설정할 수 있습니다 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
