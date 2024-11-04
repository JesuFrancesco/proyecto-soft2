"use client";
import Image from "next/image";
import googleSVG from "@/public/google.svg";
import { googleSignUp } from "@/app/login/actions";
import { Button } from "../ui/button";

const GoogleSignUp = ({ title }: { title?: string }) => {
  const handleGoogleSubmit = async () => await googleSignUp();

  return (
    <div className="w-full flex justify-center">
      <Button
        className="p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-200"
        onClick={handleGoogleSubmit}
      >
        <div className="flex flex-row justify-around items-center">
          <Image
            className="mr-3.5"
            src={googleSVG}
            alt="google_svg"
            height={32}
            width={32}
          />
          <span className="text-black text-lg font-normal">
            {title ? title : "Registrarse con Google"}
          </span>
        </div>
      </Button>
    </div>
  );
};

export default GoogleSignUp;
