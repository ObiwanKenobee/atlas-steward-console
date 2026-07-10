import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel } from "@/components/sanctum/primitives";
import { Users, Heart } from "lucide-react";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "Communities — Atlas Sanctum" },
      { name: "description", content: "Communities served by the Sanctum: their health, their stewards, and their long-horizon covenants." },
    ],
  }),
  component: CommunitiesPage,
});

const communities = [
  { name: "Kibera Learning Cooperative", region: "Nairobi, KE", members: 1420, health: 88, focus: "Knowledge" },
  { name: "Delta Youth Guild", region: "Niger Delta, NG", members: 612, health: 74, focus: "Mentorship" },
  { name: "Rift Valley Elders' Circle", region: "Rift Valley, KE", members: 148, health: 92, focus: "Wisdom" },
  { name: "Cauca River Council", region: "Cauca, CO", members: 340, health: 66, focus: "Restoration" },
  { name: "Sundarbans Coastal Assembly", region: "Sundarbans, BD", members: 820, health: 71, focus: "Climate" },
  { name: "Highlands Innovation Circle", region: "Chiapas, MX", members: 210, health: 81, focus: "Innovation" },
];

function CommunitiesPage() {
  return (
    <PageWrap>
      <PageHeader
        eyebrow="07 Communities"
        title={<>The people the Sanctum is <span className="italic text-primary">for</span>.</>}
        subtitle="Communities are not audiences. They are co-authors of every mission that touches them."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {communities.map((c) => (
          <Panel key={c.name}>
            <div className="rune">{c.region}</div>
            <h3 className="font-display text-2xl mt-2 text-foreground leading-tight">{c.name}</h3>
            <div className="mt-4 grid grid-cols-3 gap-3 pt-4 border-t border-border/60">
              <div>
                <div className="rune text-[0.6rem]">Members</div>
                <div className="font-display text-xl text-foreground mt-1 inline-flex items-center gap-1"><Users className="h-3.5 w-3.5 text-muted-foreground" />{c.members.toLocaleString()}</div>
              </div>
              <div>
                <div className="rune text-[0.6rem]">Health</div>
                <div className="font-display text-xl mt-1 inline-flex items-center gap-1 text-verdant"><Heart className="h-3.5 w-3.5" />{c.health}</div>
              </div>
              <div>
                <div className="rune text-[0.6rem]">Focus</div>
                <div className="text-sm text-foreground mt-1.5">{c.focus}</div>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </PageWrap>
  );
}