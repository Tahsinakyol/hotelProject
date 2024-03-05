import Header from "../component/header";
import { FaPhone } from "react-icons/fa";
import Footer from "../component/footer";
import image1 from "../../src/images/slider1.jpg";
import image2 from "../../src/images/slider2.jpg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import ProductCard from "../component/productCard";
const ProductDetail = () => {
  const [modal, setModal] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);
  const [tabHeader, setTabHeader] = useState(1);
  const loremIpsums = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sollicitudin turpis. Etiam eget ex a sem dictum placerat. Sed porttitor lacus eu mauris cursus imperdiet. Sed nec est non odio commodo eleifend non ac purus. Suspendisse non purus lacinia, vestibulum urna sed, dictum arcu. Etiam lobortis mauris nisi, vitae porttitor orci condimentum quis. Sed massa nunc, porttitor ultricies justo et, gravida condimentum lacus. Cras porttitor lectus mi, eget tempor lorem malesuada sit amet. Pellentesque euismod, sem a mattis viverra, odio nunc pharetra dolor, nec semper tortor sapien efficitur dui. Maecenas tempor, felis id hendrerit lacinia, tellus metus blandit elit, in sollicitudin lacus erat id lorem.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sollicitudin turpis. Etiam eget ex a sem dictum placerat. Sed porttitor lacus eu mauris cursus imperdiet. Sed nec est non odio commodo eleifend non ac purus. Suspendisse non purus lacinia, vestibulum urna sed, dictum arcu. Etiam lobortis mauris nisi, vitae porttitor orci condimentum quis. Sed massa nunc, porttitor ultricies justo et, gravida condimentum lacus. Cras porttitor lectus mi, eget tempor lorem malesuada sit amet. Pellentesque euismod, sem a mattis viverra, odio nunc pharetra dolor, nec semper tortor sapien efficitur dui. Maecenas tempor, felis id hendrerit lacinia, tellus metus blandit elit, in sollicitudin lacus erat id lorem.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sollicitudin turpis. Etiam eget ex a sem dictum placerat. Sed porttitor lacus eu mauris cursus imperdiet. Sed nec est non odio commodo eleifend non ac purus. Suspendisse non purus lacinia, vestibulum urna sed, dictum arcu. Etiam lobortis mauris nisi, vitae porttitor orci condimentum quis. Sed massa nunc, porttitor ultricies justo et, gravida condimentum lacus. Cras porttitor lectus mi, eget tempor lorem malesuada sit amet. Pellentesque euismod, sem a mattis viverra, odio nunc pharetra dolor, nec semper tortor sapien efficitur dui. Maecenas tempor, felis id hendrerit lacinia, tellus metus blandit elit, in sollicitudin lacus erat id lorem.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sollicitudin turpis. Etiam eget ex a sem dictum placerat. Sed porttitor lacus eu mauris cursus imperdiet. Sed nec est non odio commodo eleifend non ac purus. Suspendisse non purus lacinia, vestibulum urna sed, dictum arcu. Etiam lobortis mauris nisi, vitae porttitor orci condimentum quis. Sed massa nunc, porttitor ultricies justo et, gravida condimentum lacus. Cras porttitor lectus mi, eget tempor lorem malesuada sit amet. Pellentesque euismod, sem a mattis viverra, odio nunc pharetra dolor, nec semper tortor sapien efficitur dui. Maecenas tempor, felis id hendrerit lacinia, tellus metus blandit elit, in sollicitudin lacus erat id lorem.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non sollicitudin turpis. Etiam eget ex a sem dictum placerat. Sed porttitor lacus eu mauris cursus imperdiet. Sed nec est non odio commodo eleifend non ac purus. Suspendisse non purus lacinia, vestibulum urna sed, dictum arcu. Etiam lobortis mauris nisi, vitae porttitor orci condimentum quis. Sed massa nunc, porttitor ultricies justo et, gravida condimentum lacus. Cras porttitor lectus mi, eget tempor lorem malesuada sit amet. Pellentesque euismod, sem a mattis viverra, odio nunc pharetra dolor, nec semper tortor sapien efficitur dui. Maecenas tempor, felis id hendrerit lacinia, tellus metus blandit elit, in sollicitudin lacus erat id lorem.",
  ];
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
  ];
  return (
    <div className="col-12">
      {/* header compnentinde number degerine göre state değişimi */}
      <Header selectMenu={3} />
      <div className="detailLineHotel">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="headerDetailName">
                Crystal Family Resort & Spa
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="headerDetailNameEnd">
                <FaPhone />
                0555 555 55 55
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchLineDetailPage">
        <div className="container">
          <div className="generateLineBannerSearched">
            <div className="whiteDetailPageGapsFleible">
              <div className="inputTopsGenerate">
                <div className="absChooseGenerate">Başlangıç</div>
                <input type="date" className="inputGeneratedate" />
              </div>
              <div className="inputTopsGenerate">
                <div className="absChooseGenerate">Bitiş</div>
                <input type="date" className="inputGeneratedate" />
              </div>
              <div className="inputTopsGenerate_flex">
                <div className="absChooseGenerate">Oda & Misafirler</div>
                <div
                  className="selectedOpend"
                  onClick={() => setOpenFilter(!openFilter)}
                >
                  <div className="textOpennsGeneratge">
                    {number} oda, {number2} Kişi, {number3} Çocuk
                  </div>
                  <IoMdArrowDropdown className="iconSelected" />
                </div>
                {openFilter == true ? (
                  <>
                    <div className="absNumberOpendGenerate">
                      <div className="spacesGenerated">
                        <div className="iconAndTextForOpens">
                          <FaBed className="iconBigs" />
                          Oda
                        </div>
                        <div className="numberAndPllusGenerate">
                          <button
                            type=""
                            className="minusIcons"
                            onClick={(event) => {
                              event.preventDefault();
                              if (number > 0) {
                                setNumber(number - 1);
                              }
                            }}
                          >
                            <FaMinus />
                          </button>
                          <input value={number} readOnly type="number" />
                          <button
                            type=""
                            className="plusIcons"
                            onClick={(event) => {
                              event.preventDefault();
                              setNumber(number + 1);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                      <div className="spacesGenerated">
                        <div className="iconAndTextForOpens">
                          <FaUser className="iconBigs" />
                          Kişi
                        </div>
                        <div className="numberAndPllusGenerate">
                          <button
                            type=""
                            className="minusIcons"
                            onClick={(event) => {
                              event.preventDefault();
                              if (number2 > 0) {
                                setNumber2(number2 - 1);
                              }
                            }}
                          >
                            <FaMinus />
                          </button>
                          <input value={number2} readOnly type="number" />
                          <button
                            type=""
                            className="plusIcons"
                            onClick={(event) => {
                              event.preventDefault();
                              setNumber2(number + 1);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>{" "}
                      <div className="spacesGenerated">
                        <div className="iconAndTextForOpens">
                          <FaUser className="iconBigs" />
                          Çocuk
                        </div>
                        <div className="numberAndPllusGenerate">
                          <button
                            type=""
                            className="minusIcons"
                            onClick={(event) => {
                              event.preventDefault();
                              if (number3 > 0) {
                                setNumber3(number2 - 1);
                              }
                            }}
                          >
                            <FaMinus />
                          </button>
                          <input value={number3} readOnly type="number" />
                          <button
                            type=""
                            className="plusIcons"
                            onClick={(event) => {
                              event.preventDefault();
                              setNumber3(number + 1);
                            }}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <button className="searchedRoomButtons">Oda Ara</button>
          </div>
        </div>
      </div>
      <div className="leftImageGenerateDetail col-12">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="clickedOpenImage" onClick={() => setModal(true)}>
                <img src={image1} alt="Resim Yok" />
                <div className="noneImageGeneratew">
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="row">
                <div className="col-6">
                  <div
                    className="clickedOpenImageRight"
                    onClick={() => setModal(true)}
                  >
                    <img src={image1} alt="Resim Yok" />
                    <div className="noneImageGeneratew">
                      <FaSearch />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="clickedOpenImageRight"
                    onClick={() => setModal(true)}
                  >
                    <img src={image1} alt="Resim Yok" />
                    <div className="noneImageGeneratew">
                      <FaSearch />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="clickedOpenImageRight"
                    onClick={() => setModal(true)}
                  >
                    <img src={image1} alt="Resim Yok" />
                    <div className="noneImageGeneratew">
                      <FaSearch />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    className="clickedOpenImageRight"
                    onClick={() => setModal(true)}
                  >
                    <img src={image1} alt="Resim Yok" />
                    <div className="noneImageGeneratew">
                      <FaSearch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="container">
        <div className="roomDetailHeader">
          <button
            onClick={() => setTabHeader(1)}
            className={
              tabHeader == 1 ? "activeButtonsDetail" : "pasiveButtonsDetail"
            }
          >
            Genel Bakış
          </button>
          <button
            onClick={() => setTabHeader(2)}
            className={
              tabHeader == 2 ? "activeButtonsDetail" : "pasiveButtonsDetail"
            }
          >
            Odalar
          </button>
          <button
            onClick={() => setTabHeader(3)}
            className={
              tabHeader == 3 ? "activeButtonsDetail" : "pasiveButtonsDetail"
            }
          >
            Tesisler
          </button>
          <button
            onClick={() => setTabHeader(4)}
            className={
              tabHeader == 4 ? "activeButtonsDetail" : "pasiveButtonsDetail"
            }
          >
            Çevre
          </button>
          <button
            onClick={() => setTabHeader(5)}
            className={
              tabHeader == 5 ? "activeButtonsDetail" : "pasiveButtonsDetail"
            }
          >
            SSS
          </button>
        </div>
      </div>
      {/* detail start */}
      <div className="container">
        <div className="detailCardGenerateText">
          <p>İzmir OtelAdı Başlık</p>
          {loremIpsums.map((ipsum, index) => (
            <span key={index}>{ipsum}</span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="detailCardGenerateText">
          <p>Oda Tipleri</p>
          <div className="topmr15">
            <div className="row">
              {/* componenet verilerini tek tek ver ve map içerisinde tanımla */}
              {products.map((product) => (
                <div
                  key={product.id}
                  className="col-xs-12 col-sm-12 col-md-4 col-lg-4"
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
      </div>
      <Footer />
      {/*modal sayfası */}
      {modal == true ? (
        <>
          <div className="fixedCenter">
            <div
              className="flexNoneModalTopAndBottom"
              onClick={() => setModal(false)}
            ></div>
            <div className="centerModalImage">
              <div
                className="flexNoneModal"
                onClick={() => setModal(false)}
              ></div>
              <img src={image1} alt="Resim yok" />
              <div
                className="flexNoneModal"
                onClick={() => setModal(false)}
              ></div>
            </div>
            <div
              className="flexNoneModalTopAndBottom"
              onClick={() => setModal(false)}
            ></div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ProductDetail;
