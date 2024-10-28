"use client";
import { Shield, Trash } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ReactNode, useState } from "react";
import { Icon } from "@/shared/types";
import AccountSetupForm from "./AccountSetupForm";

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
      title: "Setup",
      body: <AccountSetupForm />,
      icon: Shield,
      selected: true,
    },
    {
      title: "Eliminar cuenta",
      body: <>test</>,
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
                        <span className={`${item.selected ? "font-bold" : ""}`}>
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
  );
}
