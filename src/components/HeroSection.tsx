import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <p className="md:text-7xl font-bold md:mt-0 text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Transform Passion into Career!
        </p>
        <p className="md:text-xl mt-6 text-base font-normal text-neutral-300 max-w-lg mx-auto tracking-wide">
          Join our courses to acquire essential skills and knowledge that will
          set you up for a successful career in the tech industry.
        </p>
        <div className="mt-8">
          <Link href="/allcourses" passHref>
            <Button
              borderRadius="1.75rem"
              className="bg-white text-lg dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
