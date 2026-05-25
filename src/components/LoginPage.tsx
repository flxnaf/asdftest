import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(
        "We couldn't find an account for that email. Partner access is by invitation."
      );
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
              Access your account to submit cases, review plans, and download
              deliverables.
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

              {error && (
                <div className="rounded-md border border-ink-200 bg-bone px-4 py-3 text-[13px] text-ink-700">
                  {error}{" "}
                  <a
                    href="#/#contact"
                    className="font-medium text-ink-900 underline underline-offset-2"
                  >
                    Talk to us
                  </a>{" "}
                  about becoming a partner.
                </div>
              )}

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

            <p className="mt-8 text-[12.5px] text-ink-500">
              Don't have a partner account?{" "}
              <a
                href="#/#contact"
                className="font-medium text-ink-900 underline underline-offset-2"
              >
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
          <div className="eyebrow text-mint-300">For partners</div>
          <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.02em]">
            Every case, every status, every deliverable — in one place.
          </h2>
          <ul className="mt-8 space-y-3 text-[14px] text-ink-200">
            {[
              "Submit scans and prescriptions in one upload",
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
          Trouble signing in?{" "}
          <a href="mailto:partners@aline.tech" className="text-mint-300 hover:underline">
            partners@aline.tech
          </a>
        </div>
      </div>
    </div>
  );
}
