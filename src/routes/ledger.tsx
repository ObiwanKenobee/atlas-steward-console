import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel } from "@/components/sanctum/primitives";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export const Route = createFileRoute("/ledger")({
  head: () => ({
    meta: [
      { title: "Covenant Ledger — Atlas Sanctum" },
      { name: "description", content: "A contribution history, not a transaction log — every action, its beneficiary, and its effect on trust and stewardship." },
    ],
  }),
  component: Ledger,
});

const rows = [
  { date: "Today · 14:20", action: "Co-signed Nairobi library grant", beneficiary: "Kibera Learning Cooperative", trust: 0.4, stewardship: "Knowledge · +12,401 entries" },
  { date: "Today · 09:47", action: "Welcomed 5 stewards", beneficiary: "Delta Youth Guild", trust: 0.2, stewardship: "Community · +5 stewards" },
  { date: "Yesterday", action: "Voted YES on river-basin phasing", beneficiary: "Basin Council (18 of 21)", trust: 0.1, stewardship: "Governance · quorum reached" },
  { date: "Yesterday", action: "Declined extractive partnership", beneficiary: "— (proposal withdrawn)", trust: 0.6, stewardship: "Integrity · precedent set" },
  { date: "3 days ago", action: "Renewed covenant with Rift Valley Mentors", beneficiary: "Rift Valley Mentors", trust: 0.3, stewardship: "Youth · 612 pairs sustained" },
  { date: "6 days ago", action: "Redirected surplus to elder stipends", beneficiary: "148 elders across 27 communities", trust: 0.5, stewardship: "Care · fair compensation" },
  { date: "11 days ago", action: "Flagged data-collection overreach", beneficiary: "Wisdom AI training pipeline", trust: -0.1, stewardship: "Reflection · policy tightened" },
];

function Ledger() {
  return (
    <PageWrap>
      <PageHeader
        eyebrow="04 Covenant Ledger"
        title={<>Every action, <span className="italic text-primary">accountable</span>.</>}
        subtitle="The Sanctum does not track balances. It tracks the trust you build, the beneficiaries you serve, and the stewardship you leave behind."
      />
      <Panel className="!p-0 overflow-hidden">
        <div className="grid grid-cols-12 rune px-6 py-3 border-b border-border/60">
          <div className="col-span-2">Date</div>
          <div className="col-span-4">Action</div>
          <div className="col-span-3">Beneficiary</div>
          <div className="col-span-1 text-right">Trust</div>
          <div className="col-span-2">Stewardship Impact</div>
        </div>
        {rows.map((r, i) => {
          const positive = r.trust >= 0;
          return (
            <div key={i} className="grid grid-cols-12 px-6 py-4 border-b border-border/40 last:border-0 items-start hover:bg-secondary/30 transition">
              <div className="col-span-2 rune text-[0.65rem]">{r.date}</div>
              <div className="col-span-4 text-sm text-foreground">{r.action}</div>
              <div className="col-span-3 text-sm text-muted-foreground">{r.beneficiary}</div>
              <div className={`col-span-1 text-right font-mono text-sm inline-flex items-center justify-end gap-0.5 ${positive ? "text-verdant" : "text-warn"}`}>
                {positive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {Math.abs(r.trust).toFixed(1)}
              </div>
              <div className="col-span-2 text-xs text-foreground/80">{r.stewardship}</div>
            </div>
          );
        })}
      </Panel>
    </PageWrap>
  );
}