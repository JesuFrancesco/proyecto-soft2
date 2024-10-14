"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { IAuthStrategy } from "../../interfaces/IAuthStrategy";

class SupabaseAuthStrategy implements IAuthStrategy {
  async logout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    revalidatePath("/", "layout");
    redirect("/");
  }

  async login(formData: FormData) {
    const supabase = createClient();

    const data = {
      email: formData.get("email") as string,
      password: formData.get("contrasena") as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
      console.error(error);
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
  }

  async signup(formData: FormData) {
    const supabase = createClient();
    const data = {
      email: formData.get("email") as string,
      password: formData.get("contrasena") as string,
    };

    const { error } = await supabase.auth.signUp(data);
    if (error) {
      console.error(error);
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
  }

  async googleSignUp(formData: FormData) {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error(error);
      redirect("/error");
    }
    if (data.url) {
      redirect(data.url);
    }
    revalidatePath("/", "layout");
    redirect("/");
  }
}

const authStrategy = new SupabaseAuthStrategy();

export const logout = () => authStrategy.logout();
export const login = (formData: FormData) => authStrategy.login(formData);
export const signup = (formData: FormData) => authStrategy.signup(formData);
export const googleSignUp = (formData: FormData) =>
  authStrategy.googleSignUp(formData);
