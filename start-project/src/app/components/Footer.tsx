import Image from "next/image";
import footerLogo from "../../../public/footer-logo.svg";
import malaFlag from "../../../public/image12.png";
import singFlag from "../../../public/image13.png";
import facebook from "../../../public/facebook.svg";
import instagram from "../../../public/instagram.svg";
import twitter from "../../../public/twitter.svg";
export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              <Image src={footerLogo} alt="logo" />
            </div>
            <div className="footer-text">
              <p>
                EdgeProp.my is Malaysia's most useful property website for home
                buyers and investors. At EdgeProp.my, you can find daily
                breaking news on property, and hundreds of thousands of
                properties for sale and rent with detailed information such as
                past transacted prices, maps and photos. Whether you are looking
                to buy or rent properties, we have the most comprehensive
                property listings in Malaysia, for all popular property types in
                the market - condominiums and apartments, landed properties,
                residential land and commercial properties.
              </p>
              <p>
                With property tools like the{" "}
                <span>
                  Edge Reference Price, Past Transacted Prices, Home Advisor
                  Report
                </span>{" "}
                as well as <span>Area</span> and <span>Project insights</span> ,
                you have all the resources you need to make better property
                decisions, anytime and every time.
              </p>
              <p>
                Interested in new property launches in Malaysia? Check out our
                featured new launches by top property developers in Malaysia.
              </p>
            </div>
          </div>
          <div className="footer-right flex-col">
            <div className="footer-links">
              <ul>
                <li>Company</li>
                <li>Careers</li>
                <li>About Us</li>
                <li>Terms and conditions</li>
                <li>Privacy Policy</li>
                <li>Contact us</li>
              </ul>
              <ul>
                <li>Our websites</li>
                <li>
                  <Image src={malaFlag} alt="flag1" />
                  <p>Malaysia</p>
                </li>
                <li>
                  <Image src={singFlag} alt="flag2" />
                  <p> Singapore </p>
                </li>
              </ul>
            </div>
            <div className="footer-sub">
              <input
                type="email"
                name="subscribe"
                id="subscribe"
                placeholder="Email"
              />
              <button>subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom-line"></div>
        <div className="footer-bottom">
          <div className="social">
            <span>Follow us</span>
            <Image src={facebook} alt="fb" />
            <Image src={instagram} alt="insta" />
            <Image src={twitter} alt="twitter" />
          </div>
          <p className="copyright">© Copyright 2021 | EdgeProp.my</p>
        </div>
      </div>
    </section>
  );
}
