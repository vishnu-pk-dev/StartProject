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
import Section3 from "./components/Section3";
let i = 1;
let scrllY: any = 0;
let setLast: any = 0;

export default function Home() {
  const [scale, setScale] = useState(1);
  const [firstPos, setFirstPos] = useState(1);

  useEffect(() => {
    const element = document.querySelector("#section-1");
    let rect: any = element?.getBoundingClientRect();
    setFirstPos(rect.y);
  }, []);

  function myFun() {
    const element = document.querySelector("#section-1");
    let rect: any = element?.getBoundingClientRect();
    if (rect?.y < scrllY && i <= 1.3) {
      i += 0.01;
      setScale(i);
      setLast = rect?.y;
    } else if (i >= 1 && rect?.y > setLast) {
      i -= 0.01;
      setScale(i);
    }
    if (rect?.y >= firstPos && i != 1) {
      setScale(1);
      i = 1;
    }
    scrllY = rect?.y;
    const elements = document.querySelectorAll(".step-slides");
    let sticky;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].getBoundingClientRect().top <= 0) {
        elements[i]?.classList.add("opacity1");
        elements[i - 1]?.classList.remove("opacity1");
      } else {
        elements[i]?.classList.remove("opacity1");
      }
    }

    // const element1 = document.querySelector(".step-slide-1");
    // const element2 = document.querySelector(".step-slide-2");
    // const element3 = document.querySelector(".step-slide-3");
    // const element4 = document.querySelector(".step-slide-4");
    // const element5 = document.querySelector(".step-slide-5");
    // let rect1: any = element1?.getBoundingClientRect();
    // let rect2: any = element2?.getBoundingClientRect();
    // let rect3: any = element3?.getBoundingClientRect();
    // let rect4: any = element4?.getBoundingClientRect();
    // let rect5: any = element5?.getBoundingClientRect();
    // if (rect1.top == 0) {
    //   element1?.classList.add("opacity1");
    // }if (rect2.top == 0) {
    //   element2?.classList.add("opacity1");
    //   element1?.classList.remove("opacity1");

    // }if (rect3.top == 0) {
    //   element3?.classList.add("opacity1");
    //   element2?.classList.remove("opacity1");

    // }if (rect4.top == 0) {
    //   element4?.classList.add("opacity1");
    //   element1?.classList.remove("opacity1");

    // }if (rect4.top == 0) {
    //   element1?.classList.add("opacity1");
    // }
    // console.log(rect1.top);
  }
  return (
    <div
      className="home"
      onScroll={() => {
        myFun();
      }}
    >
      <Section1 />
      <Section2 scale={scale} />
      <Section3 />
    </div>
  );
}
