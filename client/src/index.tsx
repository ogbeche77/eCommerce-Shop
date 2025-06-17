import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./Components/Layout/AppLayout";
import ProductList from "./Components/ProductList/ProductList";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/checkout"
            element={
              <div style={{ padding: 40, fontSize: 24 }}>
                Checkout Page (Warenkorb)
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
