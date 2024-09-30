"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
function page() {
  return (
    <div>
      {" "}
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 mt-36 items-center justify-center px-60"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Contact Us
          </div>
          <div className="font-extralight text-base md:text-2xl dark:text-gray-400 pt-2 pb-4 text-center">
            We&apos;re here to help you with any questions about our courses,
            programs or events. Reach out and let us know how can we assist you
            in your musical journey.
          </div>
          <input
            className="bg-gray-900 h-20 w-[40rem] rounded-xl p-4 text-white text-md placholder:text-gray-400"
            placeholder="Enter your email "
            type="email"
          />
          <input
            className="bg-gray-900 h-44 w-[40rem] rounded-xl p-4 text-white text-md placholder:text-gray-400"
            placeholder="Your message "
            type="text"
          />
          <button className="bg-black mt-6 dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-4">
            Contact Us
          </button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}

export default page;
