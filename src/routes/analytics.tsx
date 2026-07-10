import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel, Metric } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Stewardship Analytics — Atlas Sanctum" },
      { name: "description", content: "Trust growth, knowledge created, youth engaged, environmental impact — the metrics that outlast a quarter." },
    ],
  }),
  component: AnalyticsPage,
});

function AnalyticsPage() {
  const series = [12, 18, 22, 26, 31, 38, 44, 48, 55, 61, 68, 74, 79];
  const max = Math.max(...series);
  return (
    <PageWrap>
      <PageHeader
        eyebrow="08 Stewardship Analytics"
        title={<>Metrics that <span className="italic text-primary">outlast</span> a quarter.</>}
        subtitle="We do not measure attention. We measure whether communities are stronger, wiser, and freer than they were a decade ago."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <Metric label="Trust growth (yr)" value="+18%" accent="verdant" />
        <Metric label="Knowledge entries" value="12.4k" accent="gold" />
        <Metric label="Youth engaged" value="1,204" accent="signal" />
        <Metric label="Partnerships formed" value="38" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Panel eyebrow="12-year arc" title="Trust Index" className="lg:col-span-2">
          <div className="h-64 flex items-end gap-2">
            {series.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div className="rounded-t-sm bg-gradient-to-t from-primary/40 to-primary" style={{ height: `${(v / max) * 100}%` }} />
                <div className="rune text-center mt-2 text-[0.6rem]">'{13 + i}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-4 max-w-md leading-relaxed">A twelve-year view of trust accrued across every steward and covenant. Steady, patient, compounding.</p>
        </Panel>
        <Panel eyebrow="Long-horizon" title="Progress toward mission goals">
          <ul className="space-y-4 text-sm">
            {[
              { label: "5,000 youth mentored (20 yr)", pct: 24 },
              { label: "1M entries restored (30 yr)", pct: 12 },
              { label: "River basin restored (40 yr)", pct: 6 },
              { label: "40 partnerships (10 yr)", pct: 95 },
            ].map((g) => (
              <li key={g.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-foreground/90">{g.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">{g.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${g.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </PageWrap>
  );
}