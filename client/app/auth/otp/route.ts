import { type EmailOtpType } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const email = searchParams.get("email") ?? null;
  const type = searchParams.get("type") as EmailOtpType | null;
  const token = searchParams.get("token");
  const next = searchParams.get("next") ?? "/";

  if (email && token && type) {
    const supabase = createClient();

    const { error } = await supabase.auth.verifyOtp({
      email: email,
      type,
      token,
    });

    if (!error) {
      revalidatePath(next);
      redirect(next);
    } else {
      console.error("error");
      console.error(error);
    }
  }

  redirect("/error");
}
