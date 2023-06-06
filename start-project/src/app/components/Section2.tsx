"use client";
import Image from "next/image";
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
        <p style={{ transform: `scale(${1 / leng},1 ` }}>How it works</p>
      </div>
    </section>
  );
}
