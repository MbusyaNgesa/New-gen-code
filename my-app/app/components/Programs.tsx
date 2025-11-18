// import { Card } from "@/components/ui/card";
// import Image from "next/image";
// import Link from "next/link";
import { Program } from "../types/program";
import ProgramCard from "./ProgramCard";

const programsData: Program[] = [
  {
    image: "/assets/img/hero1.jpg",
    title: "Web Development",
    description:
      "Learn how to build beautiful and functional websites using modern web tools.",
    link: "/webdev",
  },
  {
    image: "/assets/img/hero1.jpg",
    title: "Artificial Intelligence",
    description:
      "Explore the world of AI, automation, and machine learning for real-world projects.",
    link: "/ai",
  },
  {
    image: "/assets/img/hero1.jpg",
    title: "Mobile App Development",
    description:
      "Learn to create Android & iOS apps using modern frameworks and tools.",
    link: "/mobile",
  },
];

const Programs = () => {
  return (
    <section className="h-full bg-fuchsia-200 " id="programs">
      <div
        className="  items-center 
        justify-center py-22 "
      >
        <div className=" text-center">
          <h1 className="text-lg md:text-xl font-semibold ">NGC Programs</h1>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2 m-6">
            Our Popular Programs
          </h1>
        </div>

        <div
          className="max-w-6xl mx-auto grid grid-cols-1 
        sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6"
        >
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
