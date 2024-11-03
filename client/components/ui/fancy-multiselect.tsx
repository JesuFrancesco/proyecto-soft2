"use client";

import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";
import React, { useCallback, useRef, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { AccountSetupSchemaType } from "@/schema/AccountSetupSchema";

type IData = {
  label: string;
  value: number;
};

export function FancyMultiSelect({
  data,
  selected,
  setSelected,
}: {
  data: IData[];
  selected: number[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSelected: (...event: any[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  // const [selected, setSelected] = useState<IData[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleUnselect = useCallback(
    (element: number) => {
      setSelected(selected.filter((s) => s !== element));
    },
    [selected, setSelected]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            const newSelected = selected;
            newSelected.pop();
            setSelected(newSelected);
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [selected, setSelected]
  );

  const selectables = data
    ? data.filter((elem) => !selected.includes(elem.value))
    : [];

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((element) => {
            return (
              <Badge key={element} variant="secondary">
                {data.find((e) => e.value === element)?.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(element);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(element)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={selected.length === 0 ? "Elige tus opciones..." : ""}
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((element) => (
                  <CommandItem
                    key={element.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={(value) => {
                      setInputValue("");
                      setSelected([...selected, element.value]);
                      // setSelected((prev) => [...prev, element]);
                    }}
                    className={"cursor-pointer"}
                  >
                    {element.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
