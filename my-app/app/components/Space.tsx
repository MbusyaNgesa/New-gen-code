import CarouselSection from "./CarouselSection";

const Space = () => {
  return (
    <section className="h-full bg-teal-200" id="space">
      <div className="  items-center justify-center py-22">
        <div className=" text-center">
          <h1 className="text-4xl md:text-5xl font-semibold "> Hackerspace</h1>
          <h1 className="text-lg md:text-xl font-semibold mt-2 m-4">
            Amentities Offered at NGC
          </h1>
        </div>

        <div className="flex items-center justify-center mb-6 ">
          <CarouselSection />
        </div>
      </div>
    </section>
  );
};

export default Space;
