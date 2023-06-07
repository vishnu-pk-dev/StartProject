import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SlidingCardArray from "./SlidingCardArray2";

export default function SlidingCards() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element: any = ref.current;
    // console.log("element", element);
    gsap.fromTo(
      element.querySelector(".card-left"),
      {
        x: 0,
      },
      {
        x: -500,
        scrollTrigger: {
          trigger: ".sliding-cards",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element: any = ref.current;
    // console.log("element", element);
    gsap.fromTo(
      element.querySelector(".card-right"),
      {
        x: -1000,
      },
      {
        x: -500,
        scrollTrigger: {
          trigger: ".sliding-cards",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="sliding-cards" ref={ref}>
      <div className="card-left slider">
        <SlidingCardArray />
        <SlidingCardArray />
      </div>

      <div className="card-right slider">
        <SlidingCardArray />
        <SlidingCardArray />
      </div>
    </div>
  );
}
