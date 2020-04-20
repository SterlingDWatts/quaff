import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QuizListProvider } from "./contexts/QuizListContext";
import { QuizProvider } from "./contexts/QuizContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizListProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </QuizListProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
