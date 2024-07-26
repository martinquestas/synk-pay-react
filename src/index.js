import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MobileMenuProvider } from "./context/MobileMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MobileMenuProvider>
      <App />
    </MobileMenuProvider>
  </React.StrictMode>
);
