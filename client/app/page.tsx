import type { Metadata } from "next";

import { SITE } from "@/config";

import Hero from "@/components/widgets/Hero";
import FrameworksProof from "@/components/widgets/FrameworksProof";
import Features from "@/components/widgets/Features";
import Descripcion from "@/components/widgets/Content";
import { createClient, getAuthHeaders } from "@/utils/supabase/server";
import axios from "axios";

export const metadata: Metadata = {
  title: SITE.title,
};

export default async function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Descripcion />
      <FrameworksProof />
    </>
  );
}
