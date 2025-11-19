import Image from "next/image";

interface WhyRowProps {
  text: string;
  image: string;
  reverse?: boolean;
}

const WhyRow = ({ text, image, reverse = false }: WhyRowProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-between gap-12 md:gap-20`}
    >
      <p className="text-lg md:flex-1 md:max-w-md">{text}</p>

      <div className="md:shrink-0">
        <Image
          src={image}
          alt=""
          width={250}
          height={50}
          className="rounded-md w-full  md:w-lg  h-[278px] "
        />
      </div>
    </div>
  );
};

export default WhyRow;
