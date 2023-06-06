"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import { useEffect } from "react";
import vector16 from "../../../public/Vector-16.svg";
import SlidingCards from "./SlidingCards2";
export default function Section2({
  scale,
  leng,
}: {
  scale: number;
  leng: number;
}) {
  // { leng }: { leng: number }
  // console.log("leng", leng);
  const scrollTo = () => {
    const section3 = document.getElementById("section-3");
    section3?.scrollIntoView();
    // window.location.href = "#section-3";
  };
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".vector162",
      {
        scale: 1,
      },
      {
        scale: 1.3,
        scrollTrigger: {
          trigger: "#section-2",
          start: "-12% bottom",
          end: "top 75%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <section id="section-2" className="flex-col">
      <Image
        className="vector162"
        src={vector16}
        alt="vector16"
        style={{ scale: scale }}
      />

      <div className="rewards-container">
        <div className="btn-div">Our goal is simple:</div>
        <h4>To provide you best</h4>
        <h3>Offers and Rewards</h3>
        <h2>REWARDS</h2>
        <SlidingCards />
      </div>
      <div className="how-it-works" style={{ transform: `scale(${leng}, 1` }}>
        <p style={{ transform: `scale(${1 / leng},1 ` }} onClick={scrollTo}>
          How it works
        </p>
      </div>
    </section>
  );
}
