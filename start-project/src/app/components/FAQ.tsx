import Image from "next/image";
import arrowColor from "../../../public/arrow-color.svg";
import iPhone from "../../../public/4k-iphone.png";
import ANDimg from "../../../public/AND-img.png";
import IOSimg from "../../../public/IOS-img.png";
import { useState } from "react";

export const Objects = {
  cardOptions: [
    {
      Id: 1,
      Qusetion: "What is Boost?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
    {
      Id: 2,
      Qusetion:
        "Why is my cash-back after redeeming still not updated in my Boost account?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
    {
      Id: 3,
      Qusetion: "What rewards do we get?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
    {
      Id: 4,
      Qusetion: "Are there any fees associated with the rewards program?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
  ],
};

export default function FAQ() {
  const [toggleBtn, setToggleBtn] = useState(true);

  const [selected, setSelected] = useState(0);

  const toggleDown = (toggleId: number) => {
    setToggleBtn(!toggleBtn);
    setSelected(toggleId);
  };

  return (
    <section id="FAQ-in">
      <div className="container">
        <div className="faq-heading">
          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>
          <p>
            Everything you need to know about the Offers and the Rewards. Can't
            find the answer you're looking for?{" "}
            <a href="#" className="link-black">
              Please chat to our friendly team
            </a>
          </p>
        </div>
        <div className="faq-accordion">
          {Objects.cardOptions && Objects.cardOptions.length > 0
            ? Objects.cardOptions.map((post) => (
                <div key={post.Id} className="accordion">
                  <div
                    className="accordion-btn"
                    onClick={() => toggleDown(post.Id)}
                  >
                    <p>{post.Qusetion}</p>
                    <div
                      className={
                        !toggleBtn && selected == post.Id
                          ? "toggle-btn-ico toggele-selected "
                          : "toggle-btn-ico "
                      }
                    >
                      {" "}
                      {!toggleBtn && selected == post.Id ? "-" : "+"}
                    </div>
                  </div>
                  {!toggleBtn && selected == post.Id ? (
                    <div className="panel">{post.Answer}</div>
                  ) : (
                    <></>
                  )}
                </div>
              ))
            : null}
        </div>
        <button className="view-all-faq">
          <Image className="button-ico" src={arrowColor} alt="arrowRound" />
          <p>View all FAQs</p>
        </button>
        <div className="download-info">
          <div className="download-info-left">
            <div className="app-heading">
              <div className="app-heading-1">Malaysia's most loved </div>
              <div className="app-heading-2">
                property app
                <div className="blue-line"></div>
              </div>
            </div>
            <p>
              The only property app you need. More than 200,000 sale/rent
              listings and daily property news.
            </p>
            <Image className="IOS-img app-img" src={IOSimg} alt="arrowRound" />
            <Image className="AND-img app-img" src={ANDimg} alt="arrowRound" />
          </div>
          <div className="download-info-right">
            <Image className="iphone" src={iPhone} alt="IPHONE" />
          </div>
        </div>
      </div>
    </section>
  );
}
