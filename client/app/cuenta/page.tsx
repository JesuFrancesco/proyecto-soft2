"use server";
import axios from "axios";
import { AccountSidebar } from "./_components/AccountSidebar";
import { Config } from "@/config/credentials";
import { getAuthHeaders } from "@/utils/supabase/server";
import { IAccount } from "@/interfaces/IAccount";
import { redirect } from "next/navigation";

const CuentaPage = async () => {
  const headers = await getAuthHeaders();
  const { data: cuenta } = await axios.get<IAccount>(
    Config.EXPRESS_API_URL + "/account",
    {
      headers,
    }
  );

  if (cuenta.role == "NA") redirect("/setup");

  return <AccountSidebar />;
};

export default CuentaPage;
