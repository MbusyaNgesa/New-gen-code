import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="">
      <Image
        src="/assets/img/logo1.jpeg"
        width={120}
        height={50}
        alt=""
        className="w-auto h-10 object-contain"
        id="home"
      />
    </Link>
  );
};

export default Logo;
