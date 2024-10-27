import { headerData } from "@/shared/layout.data";
import { Home, LogOut } from "lucide-react";
import React from "react";
import AuthActionsButton from "../common/CTA";
import { createClient } from "@/utils/supabase/server";
import { logout } from "@/app/login/actions";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const HomeButton = () => (
  <a href="/cuenta" className="flex">
    <Home />
  </a>
);

const LogoutButton = () => {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    await logout();

    revalidatePath("/", "layout");
    redirect("/");
  };

  return (
    <form>
      <button formAction={handleSubmit} className="flex text-red-500">
        <LogOut />
      </button>
    </form>
  );
};

const AuthWidget = async () => {
  const { actions } = headerData;

  const client = createClient();

  const {
    data: { user },
  } = await client.auth.getUser();

  return (
    actions &&
    actions.length > 0 && (
      <div className="justify-center md:justify-end md:ml-4 flex py-3 md:py-2 gap-4 flex-shrink-0  align-middle items-center">
        {!user ? (
          actions.map((acciones, index) => (
            <AuthActionsButton
              key={`item-action-${index}`}
              callToAction={acciones}
              linkClass="btn btn-primary m-1 py-2 px-5 text-sm font-semibold shadow-none md:px-6"
            />
          ))
        ) : (
          <>
            <HomeButton />
            <div className="flex">
              Bienvenido de vuelta {user.user_metadata.name}
            </div>
            |
            <LogoutButton />
          </>
        )}
      </div>
    )
  );
};

export default AuthWidget;
