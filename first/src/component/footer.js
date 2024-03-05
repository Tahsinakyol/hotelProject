import logo from "../../src/images/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footerGenerate">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <img className="logoGenerated" src={logo} alt=" logo" />
            <div className="explainTextFooter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              dignissim pretium dolor, sed fringilla ante ultricies ut.
              Pellentesque dignissim dui congue massa porta, ut gravida magna
              consequat. Ut tempus et tellus vitae varius. Sed id aliquet nisl.
              In accumsan sed erat in vulputate.
            </div>
            <div className="iconsFootersAllGenerate">
              <a
                href="https://www.facebook.com/?locale=tr_TR"
                className="iconsSocial"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.facebook.com/?locale=tr_TR"
                className="iconsSocial"
                target="_blank"
              >
                <CiInstagram />
              </a>
              <a
                href="https://www.facebook.com/?locale=tr_TR"
                className="iconsSocial"
                target="_blank"
              >
                <FaXTwitter />
              </a>{" "}
              <a
                href="https://www.facebook.com/?locale=tr_TR"
                className="iconsSocial"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            <div className="footerMenuLine">
              <p>Sözleşmeler</p>
              <a href="" className="hrefFooter">
                Gizlilik Sözleşmesi
              </a>
              <a href="" className="hrefFooter">
                Üyelik Sözleşmesi
              </a>
              <a href="" className="hrefFooter">
                KVKK
              </a>
              <a href="" className="hrefFooter">
                Diğer
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            <div className="footerMenuLine">
              <p>Site Haritası</p>
              <a href="" className="hrefFooter">
                AnaSayfa
              </a>
              <a href="" className="hrefFooter">
                Hakkımızda
              </a>
              <a href="" className="hrefFooter">
                İletişim
              </a>
              <a href="" className="hrefFooter">
                Diğer
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            <div className="footerMenuLine">
              <p>Popüler Oteller</p>
              <a href="" className="hrefFooter">
                Otel 1
              </a>
              <a href="" className="hrefFooter">
                Otel 2
              </a>
              <a href="" className="hrefFooter">
                Otel 3
              </a>
              <a href="" className="hrefFooter">
                Diğer
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
            <div className="footerMenuLine">
              <p>Diğer Oteller</p>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <p>Diğer Oteller</p>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
              <a href="" className="hrefFooter">
                Lorem Ipsum 1
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
