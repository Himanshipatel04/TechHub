"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Testimonials() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-evenly">
      <div className="">
        <p className="text-6xl font-semibold tracking-wider text-center mt-10">
          Hear from Tech GOATs
        </p>
      </div>
      <div className="">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default Testimonials;

const testimonials = [
  {
    quote:
      "Software is not just about writing code; it’s about solving problems, creating possibilities, and connecting people. As engineers, we have the power to change the world through technology. Every line of code we write can make a difference, and it's essential to approach our craft with both creativity and responsibility.",
    name: "Bill Gates",
    title: "Co-founder of Microsoft",
  },
  {
    quote:
      "I believe that everyone should learn to code because it teaches you how to think critically and approach complex problems methodically. In today’s world, coding isn’t just a skill; it’s a language of innovation that empowers individuals to bring their ideas to life. The ability to create software opens doors to endless possibilities.",
    name: "Steve Jobs",
    title: "Co-founder of Apple Inc.",
  },
  {
    quote:
      "The best way to predict the future is to invent it. In Computer Science, we are not just consumers of technology; we are the architects of the future. The tools and solutions we develop today will shape the lives of generations to come. Embrace your role as an innovator and dreamer in this ever-evolving landscape.",
    name: "Alan Kay",
    title: "Computer Scientist",
  },
  {
    quote:
      "Technology has become an inseparable part of our lives, and understanding it is crucial. It’s not just about using devices; it's about understanding the impact they have on our society. We must strive to create technology that enhances human experience while being mindful of ethical considerations and societal implications.",
    name: "Godfrey Reggio",
    title: "Filmmaker",
  },
  {
    quote:
      "Artificial intelligence has the potential to transform industries and revolutionize the way we live. However, with this power comes great responsibility. It’s important to approach AI with caution and to prioritize ethical guidelines in its development. As engineers, we must ensure that technology serves humanity, not the other way around.",
    name: "Elon Musk",
    title: "CEO of SpaceX and Tesla",
  },
];
