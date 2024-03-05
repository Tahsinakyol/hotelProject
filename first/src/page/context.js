import React from "react";
import Header from "../component/header";

import Footer from "../component/footer";
const Content = () => {
  return (
    <div className="col-12">
      {/* header compnentinde number degerine göre state değişimi */}
      <Header selectMenu={2} />
      <div className="generateContentCenter">
        <h1>Oppss</h1>
        <span>Sayfa Yapım Aşamasında !</span>
      </div>
      {/* footer componenet */}
      <Footer />
    </div>
  );
};

export default Content;
