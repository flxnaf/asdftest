import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.hash = "#/portal";
    }, 600);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-[1fr,1.1fr] bg-white">
      {/* Form side */}
      <div className="flex flex-col px-6 lg:px-16 py-10">
        <a href="#/" className="self-start">
          <Logo />
        </a>

        <div className="flex-1 flex items-center max-w-md w-full mx-auto">
          <div className="w-full">
            <h1 className="text-[32px] font-bold leading-tight tracking-[-0.02em] text-ink-900">
              Partner sign-in
            </h1>
            <p className="mt-2 text-[14.5px] text-ink-500">
              Access your white-labelled partner portal to submit cases, review
              plans, and download deliverables.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[12.5px] font-medium text-ink-700 mb-1.5"
                >
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  placeholder="you@yourlab.com"
                  className="w-full px-3.5 py-2.5 rounded-md border border-ink-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-mint-500/30 focus:border-mint-500 transition-colors"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="pw"
                    className="block text-[12.5px] font-medium text-ink-700"
                  >
                    Password
                  </label>
                  <a
                    href="#/login"
                    className="text-[12px] text-ink-500 hover:text-ink-800"
                  >
                    Forgot?
                  </a>
                </div>
                <input
                  id="pw"
                  type="password"
                  required
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-md border border-ink-200 text-[14px] text-ink-900 placeholder:text-ink-300 focus:outline-none focus:ring-2 focus:ring-mint-500/30 focus:border-mint-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-ink-900 text-white text-[14px] font-medium hover:bg-ink-800 transition-colors disabled:opacity-60"
              >
                {loading ? "Signing in…" : "Sign in"}
                {!loading && (
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-ink-100" />
              <span className="text-[11px] uppercase tracking-widest text-ink-400">
                or
              </span>
              <div className="h-px flex-1 bg-ink-100" />
            </div>

            <button
              type="button"
              onClick={onSubmit}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-ink-200 text-[14px] font-medium text-ink-800 hover:bg-ink-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8a12 12 0 1 1 8-21l5.7-5.7A20 20 0 1 0 24 44a20 20 0 0 0 19.6-15.5c.3-1.3.4-2.7.4-4 0-1.3-.1-2.7-.4-4z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8A12 12 0 0 1 24 12c3 0 5.8 1.1 8 3l5.7-5.7A20 20 0 0 0 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44a20 20 0 0 0 13.4-5.2l-6.2-5.2A12 12 0 0 1 12.7 28.5L6.1 33.6A20 20 0 0 0 24 44z" />
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.1 5.6l6.2 5.2c-.4.4 6.6-4.8 6.6-14.8 0-1.3-.1-2.7-.4-4z" />
              </svg>
              Continue with Google
            </button>

            <p className="mt-8 text-[12.5px] text-ink-500">
              Don't have a partner account?{" "}
              <a href="#/" className="font-medium text-ink-900 underline underline-offset-2">
                Submit a test case
              </a>{" "}
              to get started.
            </p>
          </div>
        </div>

        <div className="text-[11px] text-ink-400">
          © {new Date().getFullYear()} A Line Technologies Limited
        </div>
      </div>

      {/* Brand panel */}
      <div className="hidden lg:flex relative bg-ink-900 text-white overflow-hidden flex-col justify-between p-16">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-mint-500/10 blur-3xl" />

        <div className="relative" />

        <div className="relative max-w-md">
          <div className="eyebrow text-mint-300">Partner portal</div>
          <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.02em]">
            Every case, every status, every deliverable — in one place.
          </h2>
          <ul className="mt-8 space-y-3 text-[14px] text-ink-200">
            {[
              "Submit scans and prescriptions in under 4 minutes",
              "Track status across diagnosis, design, and clinical review",
              "Download STL stages and clinician-ready summaries",
              "Audit trail for every clinical action",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 rounded-full bg-mint-500 flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative text-[11px] text-ink-300">
          Trouble signing in? Contact{" "}
          <a href="mailto:partners@aline.tech" className="text-mint-300 hover:underline">
            partners@aline.tech
          </a>
        </div>
      </div>
    </div>
  );
}
