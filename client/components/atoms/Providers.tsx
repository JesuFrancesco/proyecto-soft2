"use client";

import { ThemeProvider } from "next-themes";
import { ToastProvider } from "../ui/toast";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider attribute="class" disableTransitionOnChange>
    <QueryClientProvider client={queryClient}>
      <ToastProvider>{children}</ToastProvider>
      <ProgressBar
        height="3px"
        color="#0891b2"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </QueryClientProvider>
  </ThemeProvider>
);

export default Providers;
