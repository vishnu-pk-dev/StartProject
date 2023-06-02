import SlidingCardArray from "./SlidingCardArray";

export default function SlidingCards() {
  return (
    <div className="sliding-cards">
      <div className="sliding-cards-top slider">
        <SlidingCardArray />
        <SlidingCardArray />
      </div>

      <div className="sliding-cards-bottom slider">
        <SlidingCardArray />
        <SlidingCardArray />
      </div>
    </div>
  );
}
