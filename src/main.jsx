import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.less";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
let queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
