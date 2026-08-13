"use client";

import {
  ArrowsLeftRight,
  Brain,
  Broadcast,
  ChartScatter,
  Cloud,
  FileText,
  MagnifyingGlass,
  Package,
  type Icon as PhosphorIcon,
  Robot,
  TestTube,
  TextAa,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { getTechIcon, type TechIcon } from "@/lib/tech-icons";

const CONCEPT_ICON_COMPONENTS: Record<string, PhosphorIcon> = {
  ArrowsLeftRight,
  Brain,
  Broadcast,
  ChartScatter,
  Cloud,
  FileText,
  MagnifyingGlass,
  Package,
  Robot,
  TestTube,
  TextAa,
};

function TechGlyph({
  techIcon,
  fallback,
  fallbackColor,
}: {
  techIcon?: TechIcon | null;
  fallback: string;
  fallbackColor: string;
}) {
  if (techIcon?.kind === "brand") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={11}
        height={11}
        fill="currentColor"
        role="img"
        aria-hidden="true"
        className="shrink-0"
      >
        <path d={techIcon.path} />
      </svg>
    );
  }

  if (techIcon?.kind === "concept") {
    const ConceptIcon = CONCEPT_ICON_COMPONENTS[techIcon.key];
    if (ConceptIcon) {
      return (
        <ConceptIcon size={11} weight="bold" aria-hidden className="shrink-0" />
      );
    }
  }

  return (
    <span className="text-[11px]" style={{ color: fallbackColor }}>
      {fallback}
    </span>
  );
}

type SkillCategory = { key: string; label: string; items: string[] };

type GridItem = {
  name: string;
  color: string;
  iconColor: string;
  icon: string;
  techIcon?: TechIcon | null;
};

type Line =
  | { id: number; kind: "text"; text: string; color: string }
  | { id: number; kind: "grid"; items: GridItem[] };

export function StackTerminal() {
  const t = useTranslations("stack.terminal");
  const tStack = useTranslations("stack");
  const categories = tStack.raw("categories") as SkillCategory[];
  const whoami = t("whoami");

  const nextId = useRef(0);
  const textLine = (text: string, color: string): Line => ({
    id: nextId.current++,
    kind: "text",
    text,
    color,
  });
  const gridLine = (items: GridItem[]): Line => ({
    id: nextId.current++,
    kind: "grid",
    items,
  });

  const [lines, setLines] = useState<Line[]>(() => [
    textLine("❯ whoami", "var(--faint)"),
    textLine(whoami, "var(--bright)"),
  ]);
  const [input, setInput] = useState("");
  const termRef = useRef<HTMLDivElement>(null);

  const dirGrid = (names: string[]): Line =>
    gridLine(
      names.map((name) => ({
        name,
        icon: "▰",
        iconColor: "var(--accent-dir)",
        color: "var(--accent-dir)",
      })),
    );

  const fileGrid = (names: string[]): Line =>
    gridLine(
      names.map((name) => ({
        name,
        icon: "▱",
        iconColor: "var(--faint)",
        color: "var(--bright)",
        techIcon: getTechIcon(name),
      })),
    );

  function print(next: Line[]) {
    setLines((prev) => [...prev, ...next].slice(-80));
    requestAnimationFrame(() => {
      const el = termRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  function runCommand(raw: string) {
    const cmd = raw.trim();
    if (!cmd) return;

    const out: Line[] = [textLine(`❯ ${cmd}`, "var(--faint)")];
    const parts = cmd.toLowerCase().split(/\s+/);
    const verb = parts[0];
    const arg = parts.slice(1).join(" ");

    if (verb === "help") {
      out.push(
        textLine(t("helpIntro"), "var(--bright)"),
        textLine(`  ls                 ${t("helpLs")}`, "var(--muted2)"),
        textLine(`  ls <diretório>     ${t("helpLsArg")}`, "var(--muted2)"),
        textLine(`  all                ${t("helpAll")}`, "var(--muted2)"),
        textLine(`  clear              ${t("helpClear")}`, "var(--muted2)"),
      );
    } else if (verb === "ls" && !arg) {
      out.push(dirGrid(categories.map((category) => category.key)));
    } else if (verb === "cat" || (verb === "ls" && arg)) {
      const category = categories.find(
        (c) => c.key === arg || c.label.toLowerCase() === arg,
      );
      if (category) {
        out.push(fileGrid(category.items));
      } else {
        out.push(
          textLine(`ls: ${arg || "?"}: ${t("notFound")}`, "var(--muted)"),
        );
      }
    } else if (verb === "all") {
      for (const category of categories) {
        out.push(textLine(`${category.key}/`, "var(--accent-dir)"));
        out.push(fileGrid(category.items));
      }
    } else if (verb === "clear") {
      setLines([]);
      setInput("");
      return;
    } else if (verb === "whoami") {
      out.push(textLine(whoami, "var(--bright)"));
    } else {
      out.push(
        textLine(
          `zsh: ${t("commandNotFound")}: ${verb} — ${t("tryHelp")}`,
          "var(--muted)",
        ),
      );
    }

    setInput("");
    print(out);
  }

  const suggestions = [
    { hint: "?", label: "help", cmd: "help" },
    { hint: "l", label: "ls", cmd: "ls" },
    { hint: "a", label: "all", cmd: "all" },
    ...categories.map((category, i) => ({
      hint: String(i + 1),
      label: category.key,
      cmd: `ls ${category.key}`,
    })),
    { hint: "c", label: "clear", cmd: "clear" },
  ];

  return (
    <section
      aria-label={t("title")}
      className="overflow-hidden rounded-xl border"
      style={{ background: "var(--term-bg)", borderColor: "var(--line)" }}
    >
      <div
        className="flex items-center gap-2 border-b px-3.5 py-2.5"
        style={{ borderColor: "var(--line)" }}
      >
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full"
          style={{ background: "var(--line-strong)" }}
        />
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full"
          style={{ background: "var(--line-strong)" }}
        />
        <span
          aria-hidden="true"
          className="size-2.5 rounded-full"
          style={{ background: "var(--line-strong)" }}
        />
        <span className="ml-2 font-mono text-[11px] text-[var(--faint)]">
          {t("title")}
        </span>
      </div>

      <div
        ref={termRef}
        aria-live="polite"
        className="term-body h-[290px] overflow-x-hidden overflow-y-auto px-4 py-[18px] font-mono text-[13px] text-[var(--bright)] leading-[1.85]"
      >
        {lines.map((entry) =>
          entry.kind === "grid" ? (
            <div
              key={entry.id}
              className="mt-1 mb-2.5 grid gap-x-[18px] gap-y-0.5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(148px, 1fr))",
              }}
            >
              {entry.items.map((item) => (
                <span
                  key={item.name}
                  className="flex items-center gap-2 whitespace-nowrap"
                  style={{ color: item.color }}
                >
                  <TechGlyph
                    techIcon={item.techIcon}
                    fallback={item.icon}
                    fallbackColor={item.iconColor}
                  />
                  {item.name}
                </span>
              ))}
            </div>
          ) : (
            <div
              key={entry.id}
              className="whitespace-pre-wrap"
              style={{ color: entry.color }}
            >
              {entry.text}
            </div>
          ),
        )}
        <div className="mt-1 flex items-center gap-2">
          <span className="text-[var(--fg)]">❯</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") runCommand(input);
            }}
            placeholder={t("placeholder")}
            aria-label={t("inputLabel")}
            spellCheck={false}
            className="flex-1 border-none bg-transparent font-mono text-[13px] text-[var(--fg)] outline-none"
          />
        </div>
      </div>

      <div
        className="flex flex-wrap items-center gap-x-[18px] gap-y-1 border-t px-4 py-2.5 font-mono text-[11.5px]"
        style={{ borderColor: "var(--line)" }}
      >
        {suggestions.map((s) => (
          <button
            key={s.cmd}
            type="button"
            onClick={() => runCommand(s.cmd)}
            className="tui-key flex items-center gap-1.5 border-none bg-transparent p-0 font-mono text-[11.5px]"
          >
            <span className="text-[var(--faintest)]">{s.hint}</span>
            <span className="tui-cmd">{s.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
