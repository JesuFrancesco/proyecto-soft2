import Image from "next/image";
import eduyachaLogo from "@/public/logo.png";

const Logo = () => (
  <>
    <Image src={eduyachaLogo} height={66} alt={""}></Image>
    <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
      Eduyacha
    </span>
  </>
);

export default Logo;
