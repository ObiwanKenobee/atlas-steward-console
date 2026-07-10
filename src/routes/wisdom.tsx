import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel } from "@/components/sanctum/primitives";
import { Sparkles, Send, AlertTriangle, CheckCircle2, Users, History } from "lucide-react";

export const Route = createFileRoute("/wisdom")({
  head: () => ({
    meta: [
      { title: "Wisdom AI — Atlas Sanctum" },
      { name: "description", content: "Wisdom AI is a conversational assistant for civilization-scale decisions: risks, precedents, affected communities and confidence — never a black box." },
    ],
  }),
  component: WisdomPage,
});

function WisdomPage() {
  return (
    <PageWrap>
      <PageHeader
        eyebrow="03 Wisdom AI"
        title={<>Ask the harder question. <span className="italic text-primary">Then</span> decide.</>}
        subtitle="Wisdom AI does not answer with confidence it does not have. Every recommendation shows its reasoning, the communities it affects, the precedents it draws on, and where it might be wrong."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Panel className="!p-0 overflow-hidden">
            <div className="p-6 border-b border-border/60">
              <div className="rune mb-2">Query · 14:22 today</div>
              <p className="font-display text-2xl text-foreground leading-snug">
                Should we invest in the Delta youth education initiative at its proposed $2.4M scale?
              </p>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <div className="rune mb-2 inline-flex items-center gap-2"><Sparkles className="h-3 w-3 text-primary" /> Recommendation</div>
                <p className="text-foreground/90 leading-relaxed">Yes — but phase the funding across three cohorts of 18 months rather than a single grant. Confidence is moderate, not high, because outcomes depend on mentor retention that has never been measured in this region.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-md border border-verdant/40 bg-verdant/5 p-4">
                  <div className="rune text-verdant mb-2 inline-flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3" /> Expected benefits</div>
                  <ul className="text-sm space-y-1.5 text-foreground/90 list-disc pl-4 marker:text-verdant">
                    <li>Reach 5,000 youth over a decade at $480/participant</li>
                    <li>Compounds prior mentorship investments in region</li>
                    <li>Creates a training pipeline for 200 local educators</li>
                  </ul>
                </div>
                <div className="rounded-md border border-warn/40 bg-warn/5 p-4">
                  <div className="rune text-warn mb-2 inline-flex items-center gap-1.5"><AlertTriangle className="h-3 w-3" /> Risks</div>
                  <ul className="text-sm space-y-1.5 text-foreground/90 list-disc pl-4 marker:text-warn">
                    <li>Political volatility in year 3 could disrupt cohort 2</li>
                    <li>Mentor burnout at 24 months is under-studied</li>
                    <li>Currency risk on cross-border payments (~6%)</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-md border border-border p-4">
                  <div className="rune mb-2 inline-flex items-center gap-1.5"><Users className="h-3 w-3" /> Affected</div>
                  <p className="text-sm text-foreground/90">≈ 5,000 youth, 200 educators, 3,400 families across 12 towns.</p>
                </div>
                <div className="rounded-md border border-border p-4">
                  <div className="rune mb-2 inline-flex items-center gap-1.5"><History className="h-3 w-3" /> Precedents</div>
                  <p className="text-sm text-foreground/90">Rift Valley Mentors (2013–2023), Cauca Youth Guild (2016–2024).</p>
                </div>
                <div className="rounded-md border border-border p-4">
                  <div className="rune mb-2">Confidence</div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-3xl text-primary">62%</span>
                    <span className="text-xs text-muted-foreground">moderate</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="rune mb-2">Suggested next steps</div>
                <ol className="text-sm text-foreground/90 space-y-1.5 list-decimal pl-5">
                  <li>Commission a 6-week mentor-retention baseline before committing cohort 2.</li>
                  <li>Co-sign phase-1 with at least three regional stewards.</li>
                  <li>Schedule a covenant review at month 18.</li>
                </ol>
              </div>
            </div>
          </Panel>
          <div className="panel p-3 flex items-center gap-2">
            <input placeholder="Ask a longer-horizon question…" className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground" />
            <button className="h-9 w-9 grid place-items-center rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <Panel eyebrow="Recent inquiries" title="History">
            <ul className="space-y-3 text-sm">
              {[
                "Should we accept the mining company's donation?",
                "How would a 20% reallocation to elders affect trust?",
                "What breaks first if we cut the archive budget?",
                "Which mission is most exposed to climate volatility?",
              ].map((q, i) => (
                <li key={i} className="pb-3 last:pb-0 border-b border-border/50 last:border-0 text-foreground/90 hover:text-foreground cursor-pointer">{q}</li>
              ))}
            </ul>
          </Panel>
          <Panel eyebrow="How Wisdom works" title="Transparency">
            <p className="text-sm text-muted-foreground leading-relaxed">Every answer is generated against a pinned corpus of prior covenants, community feedback, and external references. Sources appear inline. When the model is uncertain, it will say so — and refuse to guess.</p>
          </Panel>
        </div>
      </div>
    </PageWrap>
  );
}