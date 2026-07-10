import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/graph")({
  head: () => ({
    meta: [
      { title: "Knowledge Graph — Atlas Sanctum" },
      { name: "description", content: "An interactive network of people, missions, organizations, capital, AI agents and communities — the shape of the covenant." },
    ],
  }),
  component: GraphPage,
});

type Node = { id: string; label: string; x: number; y: number; kind: "person" | "mission" | "org" | "capital" | "ai" | "community" };
const nodes: Node[] = [
  { id: "ada", label: "Ada", x: 50, y: 50, kind: "person" },
  { id: "delta", label: "Delta Guild", x: 22, y: 26, kind: "community" },
  { id: "kibera", label: "Kibera Coop", x: 78, y: 22, kind: "community" },
  { id: "rift", label: "Rift Valley Mentors", x: 15, y: 62, kind: "org" },
  { id: "wisdom", label: "Wisdom AI", x: 82, y: 62, kind: "ai" },
  { id: "basin", label: "Basin Council", x: 40, y: 82, kind: "org" },
  { id: "fund", label: "Patient Capital I", x: 62, y: 84, kind: "capital" },
  { id: "m-know", label: "Restore Knowledge", x: 68, y: 40, kind: "mission" },
  { id: "m-youth", label: "Mentor Youth", x: 30, y: 44, kind: "mission" },
  { id: "m-river", label: "River Basin", x: 50, y: 66, kind: "mission" },
];
const edges: [string, string][] = [
  ["ada", "m-know"], ["ada", "m-youth"], ["ada", "wisdom"], ["ada", "basin"],
  ["delta", "m-youth"], ["kibera", "m-know"], ["rift", "m-youth"],
  ["wisdom", "m-river"], ["basin", "m-river"], ["fund", "m-river"], ["fund", "m-know"],
];
const colorFor = (k: Node["kind"]) => ({
  person: "var(--primary)", mission: "var(--signal)", org: "var(--foreground)",
  capital: "var(--warn)", ai: "var(--accent)", community: "var(--verdant)",
}[k]);

function GraphPage() {
  return (
    <PageWrap>
      <PageHeader
        eyebrow="05 Knowledge Graph"
        title={<>The shape of the <span className="italic text-primary">covenant</span>.</>}
        subtitle="Every steward is a knot in a web. Follow a thread and you see how a single decision travels through people, communities, capital and consequence."
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Panel className="lg:col-span-3 !p-0 overflow-hidden">
          <div className="aspect-[4/3] w-full relative bg-[radial-gradient(circle_at_center,oklch(0.22_0.03_250)_0%,var(--background)_70%)]">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
              {edges.map(([a, b], i) => {
                const A = nodes.find((n) => n.id === a)!;
                const B = nodes.find((n) => n.id === b)!;
                return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--border)" strokeWidth={0.2} />;
              })}
            </svg>
            {nodes.map((n) => (
              <div key={n.id} className="absolute -translate-x-1/2 -translate-y-1/2 group" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                <div className="h-3 w-3 rounded-full ring-4 ring-background" style={{ backgroundColor: colorFor(n.kind), boxShadow: `0 0 16px ${colorFor(n.kind)}` }} />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] text-foreground/90 opacity-80 group-hover:opacity-100 transition">
                  {n.label}
                </div>
              </div>
            ))}
          </div>
        </Panel>
        <Panel eyebrow="Legend" title="Kinds of knot">
          <ul className="space-y-3 text-sm">
            {[
              ["Person", "var(--primary)"],
              ["Mission", "var(--signal)"],
              ["Organization", "var(--foreground)"],
              ["Capital", "var(--warn)"],
              ["AI agent", "var(--accent)"],
              ["Community", "var(--verdant)"],
            ].map(([label, c]) => (
              <li key={label} className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c as string }} />
                <span className="text-foreground">{label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground leading-relaxed">Hover a node to reveal its role. In the full Sanctum, click any knot to unfold its lineage of decisions.</p>
        </Panel>
      </div>
    </PageWrap>
  );
}