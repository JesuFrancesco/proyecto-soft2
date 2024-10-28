"use client";
import { AccountSidebar } from "./_components/AccountSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const CuentaPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AccountSidebar />
      </SidebarProvider>
    </QueryClientProvider>
  );
};

export default CuentaPage;
