import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  console.log("REQUEST.URL");
  console.log(request.url);

  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("code");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      redirect(next);
    } else {
      console.error("error");
      console.error(error);
    }
  }

  console.log("TOKEN_HASH");
  console.log(token_hash);
  console.log("TYPE");
  console.log(type);

  redirect("/error");
}
