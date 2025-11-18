import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Program } from "../types/program";

const ProgramCard = ({ image, title, description, link }: Program) => {
  return (
    <Card
      className="p-5 shadow-md rounded-2xl bg-white
       border-gray-100/10 "
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-2xl object-cover h-[180px] w-full"
      />

      <h5 className="mt-4 mb-2 text-xl font-semibold">{title}</h5>

      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <Link href={link} className="text-fuchsia-600 font-medium">
        Learn More →
      </Link>
    </Card>
  );
};

export default ProgramCard;
