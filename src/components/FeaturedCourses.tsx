"use client";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

const FeaturedCourses = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
  }
  const data = courseData.courses.filter((item: Course) => item.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-2xl italic text-red-300 font-semibold tracking-wide">
            Featured Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-light text-white sm:text-5xl">
            Learn with the best
          </p>
        </div>
        <div className="mt-10">
          <div className="mx-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center ">
            {data.map((item: Course, key) => (
              <div key={key} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className=" relative py-5 min-h-56 flex flex-col  items-center justify-between text-center gap-4">
                    <p className="text-2xl">{item.title}</p>
                    <p>{item.description}</p>
                    <Link
                      href={`/courses/${item.slug}`}
                      className="bg-white text-lg p-2  dark:bg-slate-700 rounded-lg text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                      Go to Course
                    </Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-20 ">
          <Link href={"/allcourses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white text-lg dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
