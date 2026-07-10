import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Check,
  Circle,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { PageWrap, PageHeader, Panel, Metric, Bar } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Atlas Sanctum" },
      { name: "description", content: "The Atlas Sanctum dashboard: mission alignment, trust index, active missions, wisdom insights and incentive signals in one calm mission-control view." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageWrap>
      <PageHeader
        eyebrow="Sanctum · Situation Report"
        title={
          <>
            Good evening, Ada. The covenant <span className="italic text-primary">holds</span>.
          </>
        }
        subtitle="Four missions await your attention. Three stewards asked for guidance today. The Wisdom Engine flagged one long-horizon risk worth reviewing before you sign the ledger."
        actions={
          <>
            <Link to="/wisdom" className="px-4 py-2 text-sm rounded-md border border-border hover:bg-secondary transition">Consult Wisdom AI</Link>
            <Link to="/missions" className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90 transition inline-flex items-center gap-1.5">
              Open missions <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Metric label="Mission Alignment" value="87%" delta="▲ 3.1" hint="vs last cycle" />
        <Metric label="Trust Index" value="+12.4" accent="verdant" delta="▲ 0.8" hint="30-day rolling" />
        <Metric label="Stewardship Reach" value="1,204" accent="signal" hint="lives affected this month" />
        <Metric label="Long-Horizon Risk" value="Low" hint="2 signals under review" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <Panel eyebrow="Feed" title="Sanctum Feed" className="lg:col-span-1">
          <ul className="space-y-3 text-sm">
            {[
              { icon: ShieldCheck, tone: "verdant", label: "Verified — Nairobi library grant", meta: "2h · signed by 4 stewards" },
              { icon: Sparkles, tone: "signal", label: "Wisdom draft — Youth mentorship model", meta: "Awaiting your review" },
              { icon: Circle, tone: "muted", label: "Stewardship ping — Rural clinic sensors", meta: "3 unresolved threads" },
              { icon: AlertTriangle, tone: "warn", label: "Governance vote opens in 18h", meta: "Quorum: 12 of 21" },
            ].map((f, i) => {
              const Icon = f.icon;
              const toneClass = f.tone === "verdant" ? "text-verdant" : f.tone === "signal" ? "text-signal" : f.tone === "warn" ? "text-warn" : "text-muted-foreground";
              return (
                <li key={i} className="flex gap-3 pb-3 last:pb-0 border-b border-border/50 last:border-0">
                  <Icon className={`h-4 w-4 mt-0.5 shrink-0 ${toneClass}`} strokeWidth={1.5} />
                  <div>
                    <div className="text-foreground leading-snug">{f.label}</div>
                    <div className="rune mt-1 normal-case tracking-normal text-[0.7rem]">{f.meta}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>

        <Panel eyebrow="In flight" title="Current Missions" className="lg:col-span-2" action={<Link to="/missions" className="rune hover:text-foreground">View all →</Link>}>
          <ul className="divide-y divide-border/60">
            {[
              { name: "Restore Community Knowledge", horizon: "12 yr", funded: 68, stewards: 14, tone: "gold" },
              { name: "Fund Local Innovation", horizon: "5 yr", funded: 42, stewards: 9, tone: "signal" },
              { name: "Mentor Youth in the Delta", horizon: "20 yr", funded: 91, stewards: 22, tone: "verdant" },
              { name: "River-Basin Restoration", horizon: "40 yr", funded: 24, stewards: 6, tone: "warn" },
            ].map((m, i) => (
              <li key={i} className="py-4 first:pt-0 last:pb-0 grid grid-cols-12 gap-3 items-center">
                <div className="col-span-12 md:col-span-5">
                  <div className="text-foreground">{m.name}</div>
                  <div className="rune mt-1">Horizon · {m.horizon} · {m.stewards} stewards</div>
                </div>
                <div className="col-span-9 md:col-span-5">
                  <Bar label="Funded" value={m.funded} tone={m.tone as "gold"} />
                </div>
                <div className="col-span-3 md:col-span-2 text-right">
                  <button className="rune hover:text-foreground">Enter →</button>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <Panel eyebrow="Wisdom Engine" title="What the AI is thinking" className="lg:col-span-1">
          <div className="space-y-4 text-sm">
            <div className="border-l-2 border-signal pl-3">
              <div className="rune text-signal">Insight</div>
              <p className="text-foreground/90 leading-relaxed mt-1">Community trust rises fastest when funding decisions are co-signed by three or more stewards. You currently average 1.8.</p>
            </div>
            <div className="border-l-2 border-warn pl-3">
              <div className="rune text-warn">Risk</div>
              <p className="text-foreground/90 leading-relaxed mt-1">River-basin project shows 30-year climate volatility above tolerance. Consider phased milestones.</p>
            </div>
            <div className="border-l-2 border-verdant pl-3">
              <div className="rune text-verdant">Opportunity</div>
              <p className="text-foreground/90 leading-relaxed mt-1">Partnering with the Delta youth guild could double mentorship reach at 12% additional cost.</p>
            </div>
          </div>
        </Panel>

        <Panel eyebrow="What we reward" title="Incentive Map" className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <Bar label="Truth" value={91} tone="gold" />
            <Bar label="Trust" value={84} tone="verdant" />
            <Bar label="Stewardship" value={79} tone="signal" />
            <Bar label="Innovation" value={74} tone="gold" />
            <Bar label="Collaboration" value={88} tone="verdant" />
            <Bar label="Extraction" value={12} tone="warn" />
          </div>
          <p className="mt-6 text-xs text-muted-foreground max-w-md">
            Bars reflect what the Sanctum currently rewards across missions this quarter. Extraction is monitored, not amplified.
          </p>
        </Panel>
      </div>

      <Panel eyebrow="Community Activity" title="Timeline">
        <div className="space-y-6">
          {[
            { period: "Today", items: ["Ada co-signed the Nairobi grant · 14:20", "Wisdom AI issued 3 insights · 11:02", "5 new stewards joined the Delta guild · 09:47"] },
            { period: "Yesterday", items: ["Governance vote closed: 'Phase river-basin milestones' — passed 18/21", "Trust Index adjusted +0.4 after transparency report"] },
            { period: "This Week", items: ["Two long-horizon covenants renewed", "Community knowledge library reached 12,401 verified entries"] },
            { period: "This Month", items: ["Youth mentorship reached 1,204 participants across 6 regions"] },
          ].map((g) => (
            <div key={g.period} className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-2 rune">{g.period}</div>
              <ul className="col-span-12 md:col-span-10 space-y-2 border-l border-border pl-5 relative">
                {g.items.map((t, i) => (
                  <li key={i} className="text-sm text-foreground/90 relative">
                    <span className="absolute -left-[26px] top-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Panel>
    </PageWrap>
  );
}
