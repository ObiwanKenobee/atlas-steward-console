import { createFileRoute } from "@tanstack/react-router";
import { PageWrap, PageHeader, Panel } from "@/components/sanctum/primitives";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Atlas Sanctum" },
      { name: "description", content: "Configure your stewardship profile, notifications and covenant preferences." },
    ],
  }),
  component: SettingsPage,
});

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-border/50 pb-3">
      <div className="rune">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}
function Toggle({ label, on }: { label: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-foreground/90">{label}</span>
      <span className={`h-5 w-9 rounded-full relative transition ${on ? "bg-primary" : "bg-secondary"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-background transition-all ${on ? "left-4" : "left-0.5"}`} />
      </span>
    </div>
  );
}

function SettingsPage() {
  return (
    <PageWrap>
      <PageHeader eyebrow="09 Settings" title="Your covenant, your preferences." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Panel eyebrow="Steward" title="Profile">
          <div className="space-y-4 text-sm">
            <Field label="Name" value="Ada Okonkwo" />
            <Field label="Home community" value="Delta Youth Guild" />
            <Field label="Tier" value="III · Custodian" />
          </div>
        </Panel>
        <Panel eyebrow="Signals" title="Notifications">
          <div className="space-y-3 text-sm">
            <Toggle label="Governance votes opening" on />
            <Toggle label="Wisdom AI insights above 70% confidence" on />
            <Toggle label="Trust index shifts > 0.5" on />
            <Toggle label="Community pings" />
          </div>
        </Panel>
      </div>
    </PageWrap>
  );
}