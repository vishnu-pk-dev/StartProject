"use client";

import { useState } from "react";
// import Image from 'next/image'
// import logo from '../../public/START_logo_fullwhite.svg'
// import logo3d from '../../public/start-3D.svg'
// import arrowRuond from '../../public/Vector-arrow-round.svg'
// import women1 from '../../public/joyful-afro-woman.png'
// import mouseScroll from '../../public/Mouse-icon.svg'
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
let i = 1;
let scrllY: any = 0;
export default function Home() {
  const [scale, setScale] = useState(1);
  function myFun() {
    const element = document.querySelector("#section-2");
    let rect: any = element?.getBoundingClientRect();
    if (rect?.y < scrllY && i <= 2) {
      i += 0.01;
      setScale(i);
    } else if (i >= 1) {
      i -= 0.01;
      setScale(i);
    }
    scrllY = rect?.y;
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
    </div>
  );
}
