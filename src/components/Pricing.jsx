export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$79',
      cadence: '/mo',
      features: ['Up to 25 assets', 'Basic dispatch', 'Email support'],
      cta: 'Start free',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '$199',
      cadence: '/mo',
      features: ['Up to 100 assets', 'Route optimization', 'Maintenance & DVIR', 'Priority support'],
      cta: 'Get started',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      cadence: '',
      features: ['Unlimited assets', 'Custom integrations', 'SLA & SSO', 'Dedicated CSM'],
      cta: 'Talk to sales',
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Choose a plan that scales with your fleet.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${tier.highlight ? 'border-indigo-600 bg-indigo-50' : 'border-slate-200 bg-white'}`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 right-6 rounded-full bg-indigo-600 px-2 py-1 text-xs font-medium text-white">Most popular</span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.cadence}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
