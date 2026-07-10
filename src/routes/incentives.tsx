import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel, Bar } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/incentives")({
  head: () => ({
    meta: [
      { title: "Incentive Engine — Atlas Sanctum" },
      { name: "description", content: "The Sanctum makes its values explicit. See exactly what the system rewards, and what it declines to amplify." },
    ],
  }),
  component: IncentivesPage,
});

function IncentivesPage() {
  const rewards = [
    { label: "Truth", value: 91, tone: "gold" as const },
    { label: "Trust", value: 84, tone: "verdant" as const },
    { label: "Stewardship", value: 79, tone: "signal" as const },
    { label: "Innovation", value: 74, tone: "gold" as const },
    { label: "Community", value: 88, tone: "verdant" as const },
  ];
  const declines = [
    { label: "Extraction", value: 12 },
    { label: "Vanity metrics", value: 8 },
    { label: "Short-term speculation", value: 6 },
  ];
  return (
    <PageWrap>
      <PageHeader
        eyebrow="06 Incentive Engine"
        title={<>What we <span className="italic text-primary">reward</span>, made visible.</>}
        subtitle="No hidden weights, no invisible ranking. The Sanctum states its values, quantifies them, and lets you argue with them."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Panel eyebrow="Amplified" title="What the system rewards" className="lg:col-span-2">
          <div className="space-y-5">
            {rewards.map((r) => <Bar key={r.label} label={r.label} value={r.value} tone={r.tone} />)}
          </div>
        </Panel>
        <Panel eyebrow="Monitored, not amplified" title="What we decline to reward">
          <div className="space-y-5">
            {declines.map((r) => <Bar key={r.label} label={r.label} value={r.value} tone="warn" />)}
          </div>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">These signals are tracked so we can name them when they appear. They do not raise a steward's standing.</p>
        </Panel>
      </div>
      <Panel eyebrow="How it is calculated" title="The formula, in plain language" className="mt-4">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="rune mb-2">Truth</div>
            <p className="text-foreground/90 leading-relaxed">Actions that pass independent verification and cite their sources.</p>
          </div>
          <div>
            <div className="rune mb-2">Trust</div>
            <p className="text-foreground/90 leading-relaxed">Trust changes when other stewards, communities, or AI signals endorse or challenge you.</p>
          </div>
          <div>
            <div className="rune mb-2">Stewardship</div>
            <p className="text-foreground/90 leading-relaxed">Long-horizon outcomes weighted more than fast ones. A decade of care beats a viral quarter.</p>
          </div>
        </div>
      </Panel>
    </PageWrap>
  );
}