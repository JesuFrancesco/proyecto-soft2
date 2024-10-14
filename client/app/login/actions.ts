"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { IAuthStrategy } from "../../interfaces/IAuthStrategy";

class SupabaseAuthStrategy implements IAuthStrategy {
  private supabase = createClient();

  async logout() {
    await this.supabase.auth.signOut();
    revalidatePath("/", "layout");
    redirect("/");
  }

  async login(formData: FormData) {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("contrasena") as string,
    };

    const { error } = await this.supabase.auth.signInWithPassword(data);
    if (error) {
      console.error(error);
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
  }

  async signup(formData: FormData) {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("contrasena") as string,
    };

    const { error } = await this.supabase.auth.signUp(data);
    if (error) {
      console.error(error);
      redirect("/error");
    }

    revalidatePath("/", "layout");
    redirect("/");
  }

  async googleSignUp(formData: FormData) {
    console.log("WIP");

    // const { data, error } = await this.supabase.auth.signInWithOAuth({
    //   provider: "google",
    // });
    // if (error) {
    //   console.error(error);
    //   redirect("/error");
    // }
    // if (data.url) {
    //   redirect(data.url);
    // }
    // revalidatePath("/", "layout");
    // redirect("/");
  }
}

const authStrategy = new SupabaseAuthStrategy();

export const logout = () => authStrategy.logout();
export const login = (formData: FormData) => authStrategy.login(formData);
export const signup = (formData: FormData) => authStrategy.signup(formData);
export const googleSignUp = (formData: FormData) =>
  authStrategy.googleSignUp(formData);
