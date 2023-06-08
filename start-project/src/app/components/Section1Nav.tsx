import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

import logo from "../../../public/START_logo_fullwhite.svg";
export default function Section1Nav() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <nav className="nav-top" data-speed="0">
      <div>
        <Image className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <a href="">Rewards</a>
        <a href="">Contact us</a>
        <a href="">FAQs</a>
      </div>
      <button>Sign in</button>
    </nav>
  );
}
