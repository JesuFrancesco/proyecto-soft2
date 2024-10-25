"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "../ui/toast";

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);

export default Providers;
