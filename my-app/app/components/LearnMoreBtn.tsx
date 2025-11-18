"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

// const links = [
//   {
//     name: "programs",
//     path: "programs",
//   },]

const LearnMoreBtn = () => {
  return (
    <ScrollLink
      to="contact"
      smooth
      spy
      className="cursor-pointer"
      activeClass="text-accent"
    >
      <Button
        className="w-[210px] h-[60px] py-[5px]
            pl-12 pr-[5px] flex items-center justify-between
            min-w-[200px] group bg-fuchsia-300 text-xl text-center"
      >
        {/* <Link href="#contact" className="scroll-smooth "> */}
        Learn More
        {/* </Link> */}
      </Button>
    </ScrollLink>
  );
};

export default LearnMoreBtn;
