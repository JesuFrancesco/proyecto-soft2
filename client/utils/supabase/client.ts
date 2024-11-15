import { createBrowserClient } from "@supabase/ssr";
import { AuthHeaders } from "./server";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const getAuthHeaders = async (): Promise<AuthHeaders> => {
  const session = await createClient().auth.getSession();

  return {
    Authorization: `Bearer ${session.data.session?.access_token}`,
    RefreshToken: session.data.session?.refresh_token,
  };
};
