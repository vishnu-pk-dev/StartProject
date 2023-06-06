"use client";

import { useEffect, useState } from "react";
// import Image from 'next/image'
// import logo from '../../public/START_logo_fullwhite.svg'
// import logo3d from '../../public/start-3D.svg'
// import arrowRuond from '../../public/Vector-arrow-round.svg'
// import women1 from '../../public/joyful-afro-woman.png'
// import mouseScroll from '../../public/Mouse-icon.svg'
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3B";
import SectionFAQ from "./components/SectionFAQ";

//========var==========
let i = 1;
let j = 1;
let k = 0;
let scrllY: any = 0;
let scrll2Y: any = 0;
let setLast: any = 0;
//======================
export default function Home() {
  const [scale, setScale] = useState(1);
  const [leng, setLeng] = useState(1);
  const [firstPos, setFirstPos] = useState(1);
  //====================scale i useeffet======================
  useEffect(() => {
    const element = document.querySelector("#section-1");
    let rect: any = element?.getBoundingClientRect();
    setFirstPos(rect.y);
    // console.log(rect.y, "y");
  }, []);
  //=========================================================
  // window.addEventListener("scroll", scrollEffect);
  //======================scroll trigger functuion=============================
  function scrollEffect() {
    //======================scroll trigger rect=============================
    const element = document.querySelector("#section-1");
    let rect: any = element?.getBoundingClientRect();
    // console.log(rect.y, "rect-y");
    if (rect?.y < scrllY && i <= 1.3) {
      i += 0.01;
      setScale(i);
      setLast = rect?.y;
    } else if (i >= 1 && rect?.y > setLast && rect?.y > scrllY) {
      i -= 0.01;
      setScale(i);
      // console.log(i, "in if else");
    }
    if (rect?.y >= firstPos && i != 1) {
      setScale(1);
      i = 1;
    }
    // console.log(i, "out if");

    scrllY = rect?.y;
    //======================scroll trigger howto=============================

    const howTo: any = document.querySelector(".how-it-works");
    const winSize: any = window.innerHeight;
    //=======================scale how it==================================

    if (
      howTo?.getBoundingClientRect().top <= winSize &&
      scrll2Y > howTo?.getBoundingClientRect().top
    ) {
      // console.log("same");

      {
        if (j <= 2) {
          j += 0.005;
          setLeng(j);
        }
      }
    }
    if (scrll2Y < howTo?.getBoundingClientRect().top) {
      if (j > 1) {
        j -= 0.005;
        setLeng(j);
      }
    }

    //========================== goto section 3=================================

    // if (
    //   howTo?.getBoundingClientRect().bottom <= winSize &&
    //   howTo?.getBoundingClientRect().bottom >= 0 &&
    //   k == 0
    // ) {
    //   // const section3 = document.getElementById("section-3");
    //   // section3?.scrollIntoView({ behavior: "smooth" });
    //   // location.hash = "section-3";
    //   setTimeout(() => {
    //     const section3 = document.getElementById("section-3");
    //     section3?.scrollIntoView({ behavior: "smooth" });
    //   }, 50);

    //   k = 1;
    // }
    // if (howTo?.getBoundingClientRect().bottom >= winSize) {
    //   k = 0;
    // }
    //===============================================================
    scrll2Y = howTo?.getBoundingClientRect().top;
    //======================scroll trigger step-slides=============================
    const elements = document.querySelectorAll(".step-slides");

    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top <= 0) {
        elements[i]?.classList.add("opacity1");
        elements[i - 1]?.classList.remove("opacity1");
      } else {
        elements[i]?.classList.remove("opacity1");
      }
    }
    if (
      elements[0]?.getBoundingClientRect().top <= 0 &&
      elements[1]?.getBoundingClientRect().top <= 0
    ) {
      elements[0]?.classList.remove("opacity1");
    } else {
      // elements[0]?.classList.add("opacity1");
    }
  }
  //==================function end =========================
  // console.log(leng);

  return (
    <div
      className="home"
      onScroll={() => {
        scrollEffect();
      }}
    >
      <Section1 />
      <Section2 scale={scale} leng={leng} />
      <Section3 />
      <SectionFAQ />
    </div>
  );
}
