import { StoreProvider } from "easy-peasy";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
