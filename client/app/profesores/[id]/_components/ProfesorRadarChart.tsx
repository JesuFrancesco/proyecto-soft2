"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

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

type ProfesorScoreType = {
  habilidad: string;
  puntaje: number;
};

// const chartData = [
//   { habilidad: "Enseñanza", puntaje: 186 },
//   { habilidad: "Puntualidad", puntaje: 305 },
//   { habilidad: "Disponibilidad", puntaje: 237 },
//   { habilidad: "Comunicación", puntaje: 273 },
//   { habilidad: "Evaluación", puntaje: 209 },
//   { habilidad: "Empatía", puntaje: 214 },
// ];

const chartConfig = {
  puntaje: {
    label: "Puntaje",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ProfesorRadarScore({
  data: chartData,
}: {
  data: ProfesorScoreType[];
}) {
  return (
    <Card className="bg-[#0e131b]">
      <CardHeader className="items-center pb-4">
        <CardTitle>Habilidades</CardTitle>
        <CardDescription>
          Este el promedio de puntaje del profesor
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid gridType="circle" />
            <PolarAngleAxis dataKey="habilidad" />
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
