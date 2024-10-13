import { headerData } from "@/shared/layout.data";
import { Home } from "lucide-react";
import React from "react";
import AuthActionsButton from "./CTA";
import { createClient } from "@/utils/supabase/server";

const AuthWidget = async () => {
  const { actions } = headerData;

  const client = createClient();

  const {
    data: { user },
  } = await client.auth.getUser();

  return (
    actions &&
    actions.length > 0 && (
      <div className="ml-4 flex w-max gap-4 flex-row justify-end align-bottom items-center">
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
            <div className="flex">{user.email}</div>
            <a href="/mis-cursos" className="flex">
              <Home />
            </a>
          </>
        )}
      </div>
    )
  );
};

export default AuthWidget;
