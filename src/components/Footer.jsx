export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">FleetFlow</h3>
            <p className="mt-2 text-sm text-slate-600">Software that helps trucking companies move faster with fewer headaches.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="#features">Features</a></li>
              <li><a className="hover:text-slate-900" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-slate-900" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Get in touch</h4>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-600"
              />
              <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
                Contact
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">We respond within 1 business day.</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} FleetFlow Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
