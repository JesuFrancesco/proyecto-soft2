"use client";
import { Settings, Shield, Trash } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { ReactNode, useState } from "react";
import { Icon } from "@/shared/types";
import DeleteAccountForm from "./sidebar-items/DeleteAccount";
import AccountConfigureForm from "./sidebar-items/AccountCustomForm";

type Item = {
  title: string;
  body: ReactNode;
  icon: Icon;
  selected: boolean;
};

export function AccountSidebar() {
  const [index, setIndex] = useState<number | null>(0);
  const [items, _] = useState<Item[]>([
    {
      title: "Configuración",
      body: <AccountConfigureForm />,
      icon: Settings,
      selected: false,
    },
    {
      title: "Eliminar cuenta",
      body: <DeleteAccountForm />,
      icon: Trash,
      selected: false,
    },
  ]);

  const handleSelection = (newIndex: number) => {
    if (index !== null) items[index].selected = false;
    setIndex(newIndex);
    items[newIndex].selected = true;
  };

  return (
    <SidebarProvider>
      <div className="flex flex-row w-full">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item, index) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <button onClick={() => handleSelection(index)}>
                          <item.icon />
                          <span
                            className={`${item.selected ? "font-bold" : ""}`}
                          >
                            {item.title}
                          </span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <section className="w-full flex">
          {index !== null ? (
            items[index].body
          ) : (
            <div className="text-3xl font-bold">No hay contenido</div>
          )}
        </section>
      </div>
    </SidebarProvider>
  );
}
