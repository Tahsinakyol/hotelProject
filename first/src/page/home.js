import React from "react";
import Header from "../component/header";
import SliderMain from "../component/slider";
import image1 from "../../src/images/slider1.jpg";
import image2 from "../../src/images/slider2.jpg";
import SliderDetail from "../component/sliderDetail";
import ProductCard from "../component/productCard";
import Footer from "../component/footer";
const Home = () => {
  const products = [
    {
      id: "1",
      imageCom: image1,
      percantage: true,
      percant: "10",
      name: "Verde Blu Bungalow Otel",
      detail: "Edremit - Oda Kahvaltı",
      price: "900",
    },
    {
      id: "2",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
    {
      id: "3",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
    {
      id: "4",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
    {
      id: "5",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
    {
      id: "6",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
    {
      id: "7",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
    {
      id: "8",
      imageCom: image2,
      percantage: false,
      percant: "5",
      name: "Deneme 2",
      detail: "Edremit - Oda Kahvaltı",
      price: "1200",
    },
  ];
  return (
    <div className="col-12">
      {/* header compnentinde number degerine göre state değişimi */}
      <Header selectMenu={1} />

      <SliderMain>
        <div className="sliderDetailImage">
          <img src={image1} alt="slider" />
          <SliderDetail />
        </div>
        <div className="sliderDetailImage">
          <img src={image2} alt="slider" />
          <SliderDetail />
        </div>
      </SliderMain>
      <div className="container">
        <div className="col-12">
          <div className="TextHeader_index">Popüler Oteller</div>
          <div className="row">
            {/* componenet verilerini tek tek ver ve map içerisinde tanımla */}
            {products.map((product) => (
              <div
                key={product.id}
                className="col-xs-12 col-sm-12 col-md-4 col-lg-3"
              >
                <ProductCard
                  imageCom={product.imageCom}
                  percantage={product.percantage}
                  percant={product.percant}
                  name={product.name}
                  detail={product.detail}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* footer componenet */}
      <Footer />
    </div>
  );
};

export default Home;
