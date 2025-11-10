import { Map, Gauge, ShieldCheck, Wrench } from 'lucide-react';

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

export default function Features() {
  const items = [
    {
      icon: Map,
      title: 'Smart Dispatch',
      desc: 'Plan loads with AI-assisted routing, dynamic ETAs, and geofenced pickup/drop-off alerts.'
    },
    {
      icon: Gauge,
      title: 'ELD & Telematics',
      desc: 'Unified view of HOS, fuel efficiency, harsh events, and driver scorecards across devices.'
    },
    {
      icon: Wrench,
      title: 'Maintenance',
      desc: 'Automate service schedules, DVIR workflows, and parts inventory to reduce downtime.'
    },
    {
      icon: ShieldCheck,
      title: 'Compliance',
      desc: 'Stay audit-ready with document vaults, COI tracking, and digital signatures.'
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Operate with precision</h2>
          <p className="mt-3 text-slate-600">Everything you need to run a modern fleet in one connected platform.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <FeatureCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
