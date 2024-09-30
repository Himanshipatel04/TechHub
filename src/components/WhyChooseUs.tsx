"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Coding",
    description:
      "Enhance your coding experience by working together with peers in real time. Share code snippets, debug together, and build projects collaboratively. With our platform, collaboration becomes seamless, improving your learning and productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-2xl text-white">
        Collaborative Coding
      </div>
    ),
  },
  {
    title: "Code Reviews",
    description:
      "Simplify the code review process. Our platform allows for easy feedback and suggestions, enabling you to improve code quality and learn from your peers. Ensure that your projects maintain high standards through collaborative reviews.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-2xl text-white">
          Code Reviews
        </div>
      </div>
    ),
  },
  {
    title: "Version Control Systems",
    description:
      "Master version control with our integrated tools. Track changes, revert to previous versions, and collaborate on projects without the fear of losing progress. Embrace the power of Git and other VCS for efficient project management.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-2xl text-white">
        Version Control Systems
      </div>
    ),
  },
  {
    title: "Project Management",
    description:
      "Stay organized with advanced project management tools designed for developers. Plan your sprints, allocate tasks, and track progress in real time. Our platform helps ensure that your projects stay on schedule and meet deadlines.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom-right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-2xl text-white">
        Project Management
      </div>
    ),
  },
];


const WhyChooseUs = () => {
  return (
    <div>
      <div className="">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default WhyChooseUs;
