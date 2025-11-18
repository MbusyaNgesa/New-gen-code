import Image from "next/image";
import LearnMoreBtn from "./LearnMoreBtn";

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full ">
      <Image
        src="/assets/img/hero1.jpg"
        alt=""
        fill
        className="object-cover object-center"
        priority
      />
      <div
        className="absolute inset-0 bg-linear-to-l from-black/0
      via-black/50 to-black/70 z-10 "
      ></div>

      <div
        className="container mx-auto h-full flex items-center 
      max-w-6xl px-4 sm:px-6 lg:px-12"
      >
        <div
          className="z-20 mb-20 text-white py-6 sm:py-8 
        md:py-10 xl:p-12"
        >
          <h1
            className="text-white mb-4 font-bold text-3xl sm:text-4xl
             md:text-5xl lg:text-6xl xl:text-6xl "
          >
            <span className="text-fuchsia-500"> Build</span> your future.
          </h1>
          <h1
            className="font-bold text-3xl sm:text-4xl
             md:text-5xl lg:text-6xl xl:text-6xl"
          >
            Learn Tech & AI.
          </h1>
          <p
            className="mb-9 mt-10 text-gray-100
          text-base sm:text-lg md:text-xl "
          >
            Join our beginner-friendly course
            <br /> in web-development & AI to secure
            <br /> your future in tech
          </p>

          <LearnMoreBtn />
        </div>
      </div>
    </section>
  );
};

export default Hero;
