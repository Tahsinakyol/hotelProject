import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaMinus, FaPlus } from "react-icons/fa";
const SliderDetail = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [number, setNumber] = useState(1);
  const [number2, setNumber2] = useState(0);
  return (
    <div className="generateSliderTops">
      <div className="container">
        <div className="slideDetailLine">
          <form>
            <div className="searchForSlider">
              <input placeholder="Otel Ara.." />
              <button type="submit" className="btnSearchedInput">
                <FaSearch />
              </button>
            </div>
            <div className="dateSelectedGenerate">
              <div className={`datePickerTopGenerate ${isOpen ? "open" : ""}`}>
                <div className="textGenerate">Giriş Tarihi</div>
                <div className="datePickerContainer">
                  <DatePicker
                    className="inDateStyles"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    onClickOutside={() => setIsOpen(false)}
                    onFocus={() => setIsOpen(true)}
                  />
                </div>
              </div>
              <div className={`datePickerTopGenerate ${isOpen ? "open" : ""}`}>
                <div className="textGenerate">Dönüş Tarihi</div>
                <div className="datePickerContainer">
                  <DatePicker
                    className="inDateStyles"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy"
                    onClickOutside={() => setIsOpen(false)}
                    onFocus={() => setIsOpen(true)}
                  />
                </div>
              </div>
            </div>
            <div className="dateSelectedGenerate">
              <div className="w49ButtonsGenerate">
                <div className="textGenerate">{number} Yetişkin</div>
                <div className="decAndInForSlider">
                  <button
                    className="plusMinusButtonLeft"
                    onClick={(event) => {
                      event.preventDefault();
                      if (number > 0) {
                        setNumber(number - 1);
                      }
                    }}
                  >
                    <FaMinus />
                  </button>
                  <input
                    className="centerGerateNumber"
                    value={number}
                    readOnly
                    type="number"
                  />
                  <button
                    type=""
                    className="plusMinusButtonRigh"
                    onClick={(event) => {
                      event.preventDefault();
                      setNumber(number + 1);
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className="w49ButtonsGenerate">
                <div className="textGenerate">{number2} Çocuk</div>
                <div className="decAndInForSlider">
                  <button
                    className="plusMinusButtonLeft"
                    onClick={(event) => {
                      event.preventDefault();
                      if (number2 > 0) {
                        setNumber2(number2 - 1);
                      }
                    }}
                  >
                    <FaMinus />
                  </button>
                  <input
                    className="centerGerateNumber"
                    value={number2}
                    readOnly
                    type="number"
                  />
                  <button
                    type=""
                    className="plusMinusButtonRigh"
                    onClick={(event) => {
                      event.preventDefault();
                      setNumber2(number2 + 1);
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SliderDetail;
