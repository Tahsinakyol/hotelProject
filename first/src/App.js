import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/home";
import ProductDetail from "./page/productDetail";
import Content from "./page/context";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </Router>
  );
};

export default App;
