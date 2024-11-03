"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "../ui/toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    <ToastProvider>{children}</ToastProvider>
    <ProgressBar
      height="3px"
      color="#0891b2"
      options={{ showSpinner: false }}
      shallowRouting
    />
  </ThemeProvider>
);

export default Providers;
