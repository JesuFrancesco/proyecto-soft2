"use client";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

const SignUpOTPConfirm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string | null>(null);
  const [otpValue, setOtpValue] = useState("");

  useEffect(() => {
    const email = searchParams.get("email");
    if (!email) {
      toast({
        variant: "destructive",
        description: "Algo salio mal.",
      });
      router.push("/");
    }
    setEmail(email);
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 ">
      <h2 className="mb-4 text-xl font-semibold ">Confirmación de OTP</h2>
      <p className="text-lg  mb-7 ">
        Se te ha enviado un código de verificación a tu correo. Ingresa el
        código recibido a sigue las instrucciones{" "}
      </p>

      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        className="space-x-2"
        value={otpValue}
        onChange={(value) => setOtpValue(value)}
      >
        <InputOTPGroup className="flex justify-center space-x-2">
          <InputOTPSlot
            index={0}
            className="w-12 h-12 text-center border rounded-lg"
          />
          <InputOTPSlot
            index={1}
            className="w-12 h-12 text-center border rounded-lg"
          />
          <InputOTPSlot
            index={2}
            className="w-12 h-12 text-center border rounded-lg"
          />
          <InputOTPSlot
            index={3}
            className="w-12 h-12 text-center border rounded-lg"
          />
          <InputOTPSlot
            index={4}
            className="w-12 h-12 text-center border rounded-lg"
          />
          <InputOTPSlot
            index={5}
            className="w-12 h-12 text-center border rounded-lg"
          />
        </InputOTPGroup>
      </InputOTP>

      <Button asChild className="mt-6  py-2 px-6 rounded-lg">
        <Link
          className="btn btn-primary"
          href={`/auth/otp?token=${otpValue}&type=signup&email=${email}&next=/setup`}
        >
          Verificar
        </Link>
      </Button>
    </div>
  );
};

export default SignUpOTPConfirm;
