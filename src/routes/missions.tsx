import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel, Bar } from "@/components/sanctum/primitives";
import { Users, Target, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/missions")({
  head: () => ({
    meta: [
      { title: "Missions — Atlas Sanctum" },
      { name: "description", content: "Long-horizon missions with purpose, stakeholders, AI-generated roadmaps and impact metrics — not projects, not tickets." },
    ],
  }),
  component: MissionsPage,
});

const missions = [
  {
    name: "Restore Community Knowledge",
    purpose: "Return oral and written knowledge to the communities that authored it.",
    horizon: "12 years",
    stewards: 14,
    skills: ["Archivists", "Elders", "Field ethnographers"],
    funded: 68,
    impact: [
      { label: "Entries verified", value: "12,401" },
      { label: "Communities served", value: "27" },
      { label: "Elders paid fairly", value: "148" },
    ],
    roadmap: [
      { phase: "Convene", state: "done" },
      { phase: "Digitize with consent", state: "active" },
      { phase: "Return in local formats", state: "next" },
      { phase: "Continuous stewardship", state: "future" },
    ],
    tone: "gold" as const,
  },
  {
    name: "Fund Local Innovation",
    purpose: "Route patient capital to founders solving problems in their own place.",
    horizon: "5 years",
    stewards: 9,
    skills: ["Local investors", "Mentors", "Legal"],
    funded: 42,
    impact: [
      { label: "Ventures backed", value: "38" },
      { label: "Regions", value: "9" },
      { label: "Repayment health", value: "94%" },
    ],
    roadmap: [
      { phase: "Scout", state: "done" },
      { phase: "Fund first cohort", state: "active" },
      { phase: "Peer mentorship", state: "active" },
      { phase: "Reinvest surplus", state: "next" },
    ],
    tone: "signal" as const,
  },
  {
    name: "Mentor Youth in the Delta",
    purpose: "Pair 5,000 young people with lifelong mentors who look like their future.",
    horizon: "20 years",
    stewards: 22,
    skills: ["Educators", "Elders", "Coordinators"],
    funded: 91,
    impact: [
      { label: "Youth engaged", value: "1,204" },
      { label: "Mentor pairs", value: "612" },
      { label: "Retention (yr 3)", value: "88%" },
    ],
    roadmap: [
      { phase: "Pilot 3 towns", state: "done" },
      { phase: "Scale to 12", state: "done" },
      { phase: "Regional guild", state: "active" },
      { phase: "Generational handoff", state: "future" },
    ],
    tone: "verdant" as const,
  },
  {
    name: "River-Basin Restoration",
    purpose: "Restore an entire watershed to functional health over four decades.",
    horizon: "40 years",
    stewards: 6,
    skills: ["Hydrologists", "Farmers", "Indigenous councils"],
    funded: 24,
    impact: [
      { label: "Km restored", value: "38" },
      { label: "Species returning", value: "14" },
      { label: "Households affected", value: "3,900" },
    ],
    roadmap: [
      { phase: "Council consent", state: "done" },
      { phase: "Baseline survey", state: "active" },
      { phase: "Phase-1 replanting", state: "next" },
      { phase: "Multi-generational care", state: "future" },
    ],
    tone: "warn" as const,
  },
];

export default function MissionsPage() { return <PageBody />; }
function PageBody() {
  return (
    <PageWrap>
      <PageHeader
        eyebrow="04 Missions in flight"
        title={<>Missions are <span className="italic text-primary">covenants</span>, not projects.</>}
        subtitle="Each mission carries a horizon measured in decades, the stewards responsible, and an AI-generated roadmap you can question, challenge and re-shape."
        actions={
          <button className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">Propose a mission</button>
        }
      />

      <div className="grid gap-4">
        {missions.map((m) => (
          <Panel key={m.name} className="!p-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border/60">
                <div className="rune mb-2">Horizon · {m.horizon}</div>
                <h3 className="font-display text-3xl leading-tight text-foreground">{m.name}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.purpose}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span key={s} className="rune px-2 py-1 border border-border rounded-full normal-case tracking-wider text-[0.68rem]">{s}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <Bar label="Funded" value={m.funded} tone={m.tone} />
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {m.stewards} stewards</span>
                  <span className="inline-flex items-center gap-1.5"><Target className="h-3.5 w-3.5" /> Aligned</span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-border/60">
                <div className="rune mb-4 inline-flex items-center gap-2"><Sparkles className="h-3 w-3" /> AI Roadmap</div>
                <ol className="space-y-3">
                  {m.roadmap.map((r, i) => {
                    const dotClass = r.state === "done" ? "bg-verdant border-verdant" : r.state === "active" ? "bg-primary border-primary" : r.state === "next" ? "border-signal" : "border-border";
                    const textClass = r.state === "future" ? "text-muted-foreground" : "text-foreground";
                    return (
                      <li key={i} className="flex items-center gap-3">
                        <span className={`h-2.5 w-2.5 rounded-full border ${dotClass}`} />
                        <span className={`text-sm ${textClass}`}>{r.phase}</span>
                        <span className="rune ml-auto text-[0.6rem]">{r.state}</span>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="lg:col-span-3 p-6 lg:p-8 bg-background/30">
                <div className="rune mb-4 inline-flex items-center gap-2"><TrendingUp className="h-3 w-3" /> Impact</div>
                <dl className="space-y-4">
                  {m.impact.map((im) => (
                    <div key={im.label}>
                      <dt className="rune text-[0.62rem]">{im.label}</dt>
                      <dd className="font-display text-2xl text-foreground mt-0.5">{im.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </PageWrap>
  );
}