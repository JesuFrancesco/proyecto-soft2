"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart,PolarRadiusAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import colors from "tailwindcss/colors";

type ClassScoreType = {
  habilidad: string;
  puntaje: number;
};

const chartConfig = {
  puntaje: {
    label: "Puntaje",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RadarScoreChart({
  data: chartData,
}: {
  data: ClassScoreType[];
}) {
  return (
    <Card className="bg-[#0e131b]">
      <CardHeader className="items-center pb-4">
        <CardTitle>Puntaje</CardTitle>
        <CardDescription>
          Este el promedio de puntaje de la clase
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square" style={{ width: "50%", height: "50%" }}>
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="habilidad" />
            <PolarRadiusAxis domain={[0, 5]} tickCount={6} />
            <Radar
              dataKey="puntaje"
              fill={colors.cyan[500]}
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
