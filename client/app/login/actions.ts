"use server";
import { createClient } from "@/utils/supabase/server";
import { IAuthStrategy } from "../../interfaces/IAuthStrategy";
import { SignUpSchemaType } from "@/schema/SignUpSchema";
import { LoginSchemaType } from "@/schema/LogInSchema";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

class SupabaseAuthStrategy implements IAuthStrategy {
  async logout() {
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    return error
      ? {
          error: true,
          msg: error.message,
        }
      : {
          error: false,
        };
  }

  async login(data: LoginSchemaType) {
    const supabase = createClient();

    const { email, contrasena } = data;

    const { data: logoutData, error } = await supabase.auth.signInWithPassword({
      email,
      password: contrasena,
    });

    return error
      ? {
          error: true,
          msg: error.message,
        }
      : { error: false, ...logoutData };
  }

  async signup(data: SignUpSchemaType) {
    const origin = headers().get("origin");

    const supabase = createClient();
    const { nombre, email, contrasena } = data;

    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password: contrasena,
      options: {
        data: {
          name: nombre,
        },
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (
      signUpData.user &&
      signUpData.user.identities &&
      signUpData.user.identities.length === 0
    ) {
      return {
        error: true,
        msg: "Ya encontramos una cuenta asociada a tu correo electrónico.",
      };
    }

    if (error) {
      return {
        error: true,
        msg: error.message,
      };
    }

    console.log("signUpData");
    console.log(signUpData);

    return {
      error: false,
      ...signUpData,
    };
  }

  async googleSignUp() {
    const origin = headers().get("origin");
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return {
        error: true,
        msg: error.message,
      };
    }

    if (data.url) {
      redirect(data.url);
    }
  }
}

// exports
const authStrategy = new SupabaseAuthStrategy();

export const logout = () => authStrategy.logout();
export const login = (data: LoginSchemaType) => authStrategy.login(data);
export const signup = (data: SignUpSchemaType) => authStrategy.signup(data);
export const googleSignUp = () => authStrategy.googleSignUp();
