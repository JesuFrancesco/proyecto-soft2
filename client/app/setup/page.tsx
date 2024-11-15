"use server";

import { Config } from "@/config/credentials";
import { IAccount } from "@/interfaces/IAccount";
import { AuthHeaders, getAuthHeaders } from "@/utils/supabase/server";
import axios from "axios";
import { redirect } from "next/navigation";
import AccountSetupClientForm from "./_components/setup-client";

const AccountSetupPage = async () => {
  let headers: AuthHeaders;

  try {
    headers = await getAuthHeaders();
    const { data: cuenta } = await axios.get<IAccount>(
      Config.EXPRESS_API_URL + "/account",
      {
        headers,
      }
    );
    if (cuenta.role != "NA") {
      throw Error("No hay sesión");
    }
  } catch (error) {
    redirect("/");
  }

  return <AccountSetupClientForm />;
};

export default AccountSetupPage;
