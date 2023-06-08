"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useEffect, useRef } from "react";
import vector16 from "../../../public/Vector-16.svg";
import SlidingCards from "./SlidingCards2";
export default function Section2(
  {
    //   scale,
    //   leng,
    // }: {
    //   scale: number;
    //   leng: number;
    //
  }
) {
  const scrollTo = () => {
    const section3 = document.getElementById("section-3");
    section3?.scrollIntoView();
  };

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element: any = ref.current;
    gsap.fromTo(
      element.querySelector(".vector162"),

      {
        scale: 1,
      },
      {
        scale: 1.3,
        scrollTrigger: {
          trigger: "#section-2",
          start: "clamp(-15% bottom)",
          end: "top 75%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);
  useEffect(() => {
    const element: any = ref.current;
    gsap.fromTo(
      element.querySelector(".sec-2-parx"),
      {
        // y: 0,
        scale: 0.75,
      },
      {
        // y: 100,
        scale: 1.25,
        scrollTrigger: {
          trigger: ".sec-2-parx",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <section id="section-2" className="flex-col" ref={ref}>
      <Image
        className="vector162"
        src={vector16}
        alt="vector16"
        // style={{ scale: scale }}
      />

      <div className="rewards-container">
        <div className="btn-div">Our goal is simple:</div>
        <h4>To provide you best</h4>
        <h3>Offers and Rewards</h3>
        <h2 className="sec-2-parx">REWARDS</h2>
        <SlidingCards />
      </div>
      <div
        className="how-it-works"
        // style={{ transform: `scale(${leng}, 1` }}
      >
        <p
          //  style={{ transform: `scale(${1 / leng},1 ` }}
          onClick={scrollTo}
        >
          How it works
        </p>
      </div>
    </section>
  );
}
