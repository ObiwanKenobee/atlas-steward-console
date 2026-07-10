import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Compass,
  Bot,
  ScrollText,
  Network,
  Target,
  Globe2,
  LineChart,
  Settings,
  Bell,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, glyph: "01" },
  { to: "/missions", label: "Missions", icon: Compass, glyph: "02" },
  { to: "/wisdom", label: "Wisdom AI", icon: Bot, glyph: "03" },
  { to: "/ledger", label: "Covenant Ledger", icon: ScrollText, glyph: "04" },
  { to: "/graph", label: "Knowledge Graph", icon: Network, glyph: "05" },
  { to: "/incentives", label: "Incentive Engine", icon: Target, glyph: "06" },
  { to: "/communities", label: "Communities", icon: Globe2, glyph: "07" },
  { to: "/analytics", label: "Stewardship Analytics", icon: LineChart, glyph: "08" },
  { to: "/settings", label: "Settings", icon: Settings, glyph: "09" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen w-full flex text-foreground">
      <aside className="hidden md:flex w-64 shrink-0 flex-col border-r border-border bg-sidebar/60 backdrop-blur-xl">
        <div className="px-6 pt-7 pb-5 border-b border-sidebar-border">
          <div className="rune mb-2">Sanctum · MMXXVI</div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl leading-none text-foreground">Atlas</span>
            <span className="font-display italic text-3xl leading-none text-primary">Sanctum</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Mission Control</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "group flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all relative",
                  active
                    ? "bg-sidebar-accent text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50",
                )}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-[2px] bg-primary rounded-r-full" />
                )}
                <span className="rune text-[0.6rem] w-6 shrink-0 opacity-70">{item.glyph}</span>
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} />
                <span className="tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="rounded-md border border-border/70 bg-background/40 p-3">
            <div className="rune mb-1">Steward</div>
            <div className="text-sm text-foreground">Ada Okonkwo</div>
            <div className="text-xs text-muted-foreground mt-0.5">Trust +12.4 · Tier III</div>
          </div>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 h-14 border-b border-border bg-background/70 backdrop-blur-xl flex items-center gap-3 px-4 md:px-8">
          <div className="md:hidden font-display text-xl">Atlas <span className="italic text-primary">Sanctum</span></div>
          <div className="hidden md:flex items-center gap-2 rune">
            <span className="h-1.5 w-1.5 rounded-full bg-verdant animate-pulse" />
            All systems in covenant
          </div>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-border bg-background/60 text-xs text-muted-foreground">
              <Search className="h-3.5 w-3.5" />
              Search the Sanctum
              <span className="rune ml-4">⌘K</span>
            </div>
            <button className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary transition">
              <Bell className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground text-xs font-medium">
              AO
            </div>
          </div>
        </header>
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
