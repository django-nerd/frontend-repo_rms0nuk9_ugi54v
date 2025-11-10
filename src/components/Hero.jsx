import { Check, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Trusted by modern carriers
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              The operating system for smart trucking fleets
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Optimize routes, reduce empty miles, and keep loads moving. All your dispatch, ELD, and maintenance data in one place.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              {[
                'Real-time GPS & geofencing alerts',
                'Automated load planning and ETA predictions',
                'Preventive maintenance scheduling',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 text-indigo-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
              >
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                See how it works <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50 p-4">
                  <p className="text-xs text-slate-500">Live Units</p>
                  <p className="text-3xl font-bold text-slate-900">126</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 p-4">
                  <p className="text-xs text-slate-500">On-Time</p>
                  <p className="text-3xl font-bold text-slate-900">98%</p>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 p-4">
                  <p className="text-xs text-slate-500">Empty Miles</p>
                  <p className="text-3xl font-bold text-slate-900">-14%</p>
                </div>
              </div>
              <div className="mt-4 h-40 rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-white to-indigo-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
