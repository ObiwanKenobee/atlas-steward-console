import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 mb-10 pb-6 border-b border-border/70">
      <div className="max-w-2xl">
        {eyebrow && <div className="rune mb-3">{eyebrow}</div>}
        <h1 className="font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function Panel({
  children,
  className,
  title,
  eyebrow,
  action,
}: {
  children: ReactNode;
  className?: string;
  title?: ReactNode;
  eyebrow?: string;
  action?: ReactNode;
}) {
  return (
    <section className={cn("panel p-6", className)}>
      {(title || eyebrow || action) && (
        <header className="flex items-start justify-between mb-5">
          <div>
            {eyebrow && <div className="rune mb-1">{eyebrow}</div>}
            {title && (
              <h2 className="font-display text-2xl leading-tight text-foreground">{title}</h2>
            )}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

export function Metric({
  label,
  value,
  delta,
  hint,
  accent = "gold",
}: {
  label: string;
  value: ReactNode;
  delta?: string;
  hint?: string;
  accent?: "gold" | "signal" | "verdant";
}) {
  const accentColor =
    accent === "signal" ? "text-signal" : accent === "verdant" ? "text-verdant" : "text-primary";
  return (
    <div className="panel p-6">
      <div className="rune">{label}</div>
      <div className={cn("mt-3 font-display text-5xl leading-none", accentColor)}>{value}</div>
      <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
        {delta && (
          <span className="inline-flex items-center gap-1 text-verdant font-mono">{delta}</span>
        )}
        {hint && <span>{hint}</span>}
      </div>
    </div>
  );
}

export function Bar({ label, value, max = 100, tone = "gold" }: { label: string; value: number; max?: number; tone?: "gold" | "signal" | "verdant" | "warn" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const toneClass =
    tone === "signal" ? "bg-signal" : tone === "verdant" ? "bg-verdant" : tone === "warn" ? "bg-warn" : "bg-primary";
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm text-foreground">{label}</span>
        <span className="font-mono text-xs text-muted-foreground">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
        <div className={cn("h-full rounded-full", toneClass)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function PageWrap({ children }: { children: ReactNode }) {
  return <div className="px-4 md:px-8 py-8 md:py-12 max-w-[1400px] mx-auto">{children}</div>;
}
