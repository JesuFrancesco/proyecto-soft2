import React from "react";
import { Button } from "@/components/ui/button";

const TabGrupos = () => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold text-lg">Grupos de trabajo</h4>
      <p>👥 Grupo 1: Juan, María, Carlos</p>
      <p>👥 Grupo 2: Ana, Jorge, Sara</p>
      <Button className="mt-2">Unirse a un grupo</Button>
    </div>
  );
};

export default TabGrupos;
