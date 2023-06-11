import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1Container from "./Section1Container";
import Section1Nav from "./Section1Nav";
export default function Section1() {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  //==================useref from to=====================
  useEffect(() => {
    const element: any = ref.current;
    gsap.fromTo(
      element.querySelector(".bg-elements-text"),
      {
        y: 0,
      },
      {
        y: 300,
        scrollTrigger: {
          trigger: "#section-2",
          start: "clamp(-15% bottom)",
          end: "clamp(top top)",
          scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);
  useEffect(() => {
    const element: any = ref.current;
    gsap.fromTo(
      element.querySelector("#sect-1-cont"),
      {
        y: 0,
      },
      {
        y: 150,
        scrollTrigger: {
          trigger: "#section-2",
          start: "clamp(-15% bottom)",
          end: "clamp(top top)",
          scrub: 0.5,
          // markers: true,
        },
      }
    );
  }, []);
  useEffect(() => {
    const element: any = ref.current;
    // const navClass = element.querySelector(".nav-holder");
    ScrollTrigger.create({
      trigger: ".nav-holder",
      start: "100% top",
      endTrigger: ".home",
      end: "bottom -1000%",
      toggleClass: "bg-clr",
      // markers: true,
    });
  }, []);
  //==================non css bg lock=========================
  // useEffect(() => {
  //   const element: any = ref.current;
  //   gsap.fromTo(
  //     element.querySelector(".bg-elements-grad"),
  //     {
  //       y: 0,
  //     },
  //     {
  //       y: 500,
  //       scrollTrigger: {
  //         trigger: "#section-2",
  //         start: "-10% bottom",
  //         end: "top top",
  //         scrub: 0.5,
  //         // markers: true,
  //       },
  //     }
  //   );
  // }, []);
  //================================data speed method=========
  // useEffect(() => {
  //   gsap.to("[data-speed]", {
  //     y: (i, el) =>
  //       (1 - parseFloat(el.getAttribute("data-speed"))) *
  //       ScrollTrigger.maxScroll(window),
  //     ease: "none",
  //     scrollTrigger: {
  //       start: 0,
  //       end: "max",
  //       invalidateOnRefresh: true,
  //       scrub: 0,
  //       // markers: true,
  //     },
  //   });
  // }, []);

  return (
    <section id="section-1" className="header-section" ref={ref}>
      <div className="nav-holder  fixed-top">
        <Section1Nav />
      </div>

      <div className="bg-elements">
        <h1 className="bg-elements-text parx " data-speed="0.3">
          START
        </h1>
        <div className="bg-elements-grad parx" data-speed="0.1"></div>
      </div>
      <Section1Container />
    </section>
  );
}
