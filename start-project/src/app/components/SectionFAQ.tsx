import Footer from "./Footer";
import FAQ from "./FAQ";

export const Objects = {
  cardOptions: [
    {
      Id: 1,
      Qusetion: "What is Boost?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
    {
      Id: 2,
      Qusetion:
        "Why is my cash-back after redeeming still not updated in my Boost account?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
    {
      Id: 3,
      Qusetion: "What rewards do we get?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
    {
      Id: 4,
      Qusetion: "Are there any fees associated with the rewards program?",
      Answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit, Facerevel sequi id veritatis! Perferendis dolores ipsum.",
    },
  ],
};

export default function SectionFAQ() {
  return (
    <section id="FAQ">
      <FAQ />
      <Footer />
    </section>
  );
}
