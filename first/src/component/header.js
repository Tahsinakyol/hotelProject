import logo from "../../src/images/logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { TiTimes } from "react-icons/ti";
const Header = ({ selectMenu }) => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="menuGenerate">
      <div className="container">
        <div className="inItemForMenu col-12">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 noneMobile">
              <a href="/">
                <img className="logoGenerated" src={logo} alt=" logo" />
              </a>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-9">
              <div className="endMobileMenuOpensGenerate">
                <img className="logoGenerated" src={logo} alt=" logo" />
                <button
                  className="endButton40w"
                  onClick={() => setMobile(true)}
                >
                  <FaBars />
                </button>
              </div>
              <div className="endMenuItemsGenerate">
                <a
                  className={selectMenu == 1 ? "activeMenu" : "pasiveMenu"}
                  href="/"
                >
                  AnaSayfa
                </a>
                <a
                  className={selectMenu == 2 ? "activeMenu" : "pasiveMenu"}
                  href="/Content"
                >
                  Hakkımızda
                </a>
                <a
                  className={selectMenu == 3 ? "activeMenu" : "pasiveMenu"}
                  href="/ProductDetail"
                >
                  Otel Detayı
                </a>
                <a
                  className={selectMenu == 4 ? "activeMenu" : "pasiveMenu"}
                  href=""
                >
                  İletişim
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {mobile == true ? (
        <>
          <div className="mobileMenuGenerateInde">
            <div
              className="leftGenerate"
              onClick={() => setMobile(false)}
            ></div>
            <div className="mobileMenuGenerate">
              <div className="endTimesButtonsGenertate">
                <button
                  className="iconsCenterGeneratge"
                  onClick={() => setMobile(false)}
                >
                  <TiTimes />
                </button>
              </div>
              <a className="MenuMobileHrefAllsOfThem" href="/">
                AnaSayfa
              </a>
              <a className="MenuMobileHrefAllsOfThem" href="/Content">
                Hakkımızda
              </a>
              <a className="MenuMobileHrefAllsOfThem" href="/ProductDetail">
                Otel Detayı
              </a>
              <a className="MenuMobileHrefAllsOfThem" href="/">
                İletişim
              </a>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Header;
