import WhyRow from "./WhyRow";

const WhySection = () => {
  return (
    <section id="space" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold">Why NGC</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
        <WhyRow
          text="Get a solid foundation by working on real-world projects dytjugkghj fgrhtjhbm
          fdhfdrvjxvgdkjx tdhgfxiuk"
          image="/assets/img/hero1.jpg"
        />

        <WhyRow
          text="Learn from qualified instructors vbfohrkidshfrekusdhverkjfdgh
          erjgfvbjfdbk kvk,fgxh efdbvjrdfkb"
          image="/assets/img/hero1.jpg"
          reverse
        />

        <WhyRow
          text="Personalized Learning — Max of 5 students per session"
          image="/assets/img/hero1.jpg"
        />

        <WhyRow
          text="Laptops provided at the space"
          image="/assets/img/hero1.jpg"
          reverse
        />
      </div>
    </section>
  );
};

export default WhySection;

// const WhySection = () => {
//   return (
//     <section className="h-screen bg-pink-200" id="space">
//       <div
//         className="container mx-auto max-w-6xl px-4 sm:px-6
//       lg:px-12 py-20"
//       >
//         <h1 className="text-4xl md:text-5xl font-semibold text-center">
//           Why NGC
//         </h1>
//         <div
//           className="flex flex-col md:flex-row justify-center items-center
//            gap-10 mt-16"
//         >
//           <p className="text-left text-lg md:text-xl">
//             Get a solid foundation by
//             <br /> working on real world projects
//           </p>
//           <Image
//             src="/assets/img/hero1.jpg"
//             alt=""
//             width={200}
//             height={48}
//             className="rounded-xl object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhySection;
