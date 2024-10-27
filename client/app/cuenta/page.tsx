import React from "react";
import { ContentSidebar } from "./_components/CuentaSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const CuentaPage = () => {
  return (
    <div className="mx-auto">
      <SidebarProvider>
        <ContentSidebar />
      </SidebarProvider>
    </div>
  );
};

export default CuentaPage;
