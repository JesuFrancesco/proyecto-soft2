"use server";
import { createClient } from "@/utils/supabase/server";

export const getSupabaseUserEmail = async () => {
  const sb = createClient();
  const {
    data: { user },
  } = await sb.auth.getUser();

  if (!user) throw new Error();

  return user?.email;
};
