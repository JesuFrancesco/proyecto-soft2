import notFoundImage from "@/public/404.jpg";
import Image from "next/image";

export default function Error404Page() {
  return (
    <div className="flex mx-auto items-center justify-center align-middle">
      <Image src={notFoundImage} alt="ruta-no-encontrada" />
    </div>
  );
}
