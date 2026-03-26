import { useId } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

import { Switch } from "@/components/Shadcn/switch";
import { useTheme } from "./theme-provider";

const ThemeSwitch = () => {
  const id = useId();

  const { theme, setTheme } = useTheme();

  const prefersDark =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const resolvedTheme =
    theme === "system" ? (prefersDark ? "dark" : "light") : theme;
  const checked = resolvedTheme === "dark";

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={checked ? "checked" : "unchecked"}
    >
      <span
        id={`${id}-light`}
        className="cursor-pointer text-left text-sm font-medium group-data-[state=checked]:text-muted-foreground/70"
        aria-controls={id}
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-4" aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={(val) => setTheme(val ? "dark" : "light")}
        aria-labelledby={`${id}-dark ${id}-light`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-dark`}
        className="cursor-pointer text-right text-sm font-medium group-data-[state=unchecked]:text-muted-foreground/70"
        aria-controls={id}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-4" aria-hidden="true" />
      </span>
    </div>
  );
};

export default ThemeSwitch;
