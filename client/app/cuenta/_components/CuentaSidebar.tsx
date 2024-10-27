"use client";
import { Inbox, Shield, Trash } from "lucide-react";

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

export function ContentSidebar() {
  const [body, setBody] = useState<ReactNode | null>(null);

  const items = [
    {
      title: "Setup",
      onClick: () => setBody(<div>test 1</div>),
      icon: Shield,
    },
    {
      title: "Inbox",
      onClick: () => setBody(<div>test 2</div>),
      icon: Inbox,
    },
    {
      title: "Eliminar cuenta",
      onClick: () => setBody(<div>test 3</div>),
      icon: Trash,
    },
  ];

  return (
    <div className="flex flex-row">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <button onClick={item.onClick}>
                        <item.icon />
                        <span>{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div>{body}</div>
    </div>
  );
}
