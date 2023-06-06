import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Section1Container from "./Section1Container";
export default function Section1() {
  useEffect(() => {
    gsap.fromTo(
      ".bg-elements-text",
      {
        y: 0,
      },
      {
        y: 300,
        scrollTrigger: {
          trigger: "#section-2",
          start: "-12% bottom",
          end: "top top",
          scrub: true,
          markers: true,
        },
      }
    );

    gsap.fromTo(
      "#sect-1-cont",
      {
        y: 0,
      },
      {
        y: 150,
        scrollTrigger: {
          trigger: "#section-2",
          start: "-12% bottom",
          end: "top top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);
  // useEffect(() => {

  // }, []);
  // useEffect(() => {
  //   gsap.fromTo(
  //     ".bg-elements-grad",
  //     {
  //       y: 0,
  //     },
  //     {
  //       y: 500,
  //       scrollTrigger: {
  //         trigger: "#section-2",
  //         start: "-10% bottom",
  //         end: "top top",
  //         scrub: true,
  //         // markers: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <section id="section-1" className="header-section">
      <div className="bg-elements">
        <h1 className="bg-elements-text">START</h1>
        <div className="bg-elements-grad"></div>
      </div>
      <Section1Container />
    </section>
  );
}
