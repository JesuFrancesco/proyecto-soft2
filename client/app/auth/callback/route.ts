"use server";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const supabase = createClient();
  const { searchParams, origin } = new URL(request.url);

  const code = searchParams.get("code");

  // const next = searchParams.get("next") ?? "/setup";
  const next = searchParams.get("next") ?? "/setup";

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      const forwardedHost = headers().get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        return redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return redirect(`https://${forwardedHost}${next}`);
      } else {
        return redirect(`${origin}${next}`);
      }
    }
  }

  return redirect("/error");
}
