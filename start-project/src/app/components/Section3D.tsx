import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import step01 from "../../../public/step01.svg";
import step02 from "../../../public/step02.svg";
import step03 from "../../../public/step03.svg";
import step04 from "../../../public/step04.svg";
import step05 from "../../../public/step05.svg";
import number01 from "../../../public/number1.svg";
import number02 from "../../../public/number2.svg";
import number03 from "../../../public/number3.svg";
import number04 from "../../../public/number4.svg";
import number05 from "../../../public/number5.svg";

export const Objects = {
  cardOptions: [
    {
      Id: 1,
      title: "Credit check",
      desc: " Fill in your details and obtain your credit report for free.",
      step: "step 01",
      countImg: number01,
      className: "step-slide-1",
      bgImg: step01,
    },
    {
      Id: 2,
      title: "Get invite",
      desc: " Receive an email invitation within 24 hours to the boost deals.",
      step: "step 02",
      countImg: number02,
      className: "step-slide-2",
      bgImg: step02,
    },
    {
      Id: 3,
      title: "Download vouchers",
      desc: " Find property deals from our partners and download any vouchers you need.",
      step: "step 03",
      countImg: number03,
      className: "step-slide-3",
      bgImg: step03,
    },
    {
      Id: 4,
      title: "Redeem vouchers",
      desc: " To redeem, submit your SPA as proof of purchase by 28 February 2023. For non-property vouchers, please refer to the T&C on respective vouchers.",
      step: "step 04",
      countImg: number04,
      className: "step-slide-4",
      bgImg: step04,
    },
    {
      Id: 5,
      title: "Get paid",
      desc: " You will receive the payment via bank transfer within 6 months or by 31 August 2023.",
      step: "step 05",
      countImg: number05,
      className: "step-slide-5",
      bgImg: step05,
    },
  ],
};

export default function Section3() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    // gsap.set("#section-3", { height: "100vh" });
    gsap.from(".step-slides", {
      stagger: 0.5,
      xPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "#section-3",
        start: "top top",
        // end: "bottom top",
        end: () => "+=" + window.innerWidth * 2,
        pin: "#section-3",
        // pinSpacing: false,
        scrub: true,
        snap: 1 / 5,
        // markers: true,
      },
    });
  }, []);
  useEffect(() => {
    gsap.from("#section-3", {
      scrollTrigger: {
        trigger: "#section-3",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
      // scale: 0,
      // borderRadius: 500,
      transform: "scale(0.92,1)",
    });
  }, []);
  return (
    <section id="section-3" className="section-3" ref={ref}>
      {Objects.cardOptions && Objects.cardOptions.length > 0
        ? Objects.cardOptions.map((post) => (
            <div
              key={post.Id}
              className={`step-slides ${post.className} `}
              style={{ zIndex: post.Id }}
            >
              <div className="container flex ">
                <div className="steps-left flex">
                  <Image
                    className="bg-step-count"
                    src={post.countImg}
                    alt="number"
                  />
                  <button className="btn-div">{post.step}</button>
                  <div className="step-text">
                    <h3 className="step-heading">{post.title}</h3>
                    <p className="step-des">{post.desc}</p>
                  </div>
                </div>
                <div className="steps-right">
                  <Image className="bg-step-img" src={post.bgImg} alt="step" />
                </div>
              </div>
              {/* <div className="side-carousel-pos"></div> */}
            </div>
          ))
        : null}
    </section>
  );
}
