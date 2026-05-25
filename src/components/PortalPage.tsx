import { useState } from "react";
import {
  Bell,
  ChevronDown,
  FileText,
  HelpCircle,
  Home,
  LogOut,
  Plus,
  Search,
  Settings,
  Upload,
  Users,
} from "lucide-react";
import Logo from "./Logo";

type Status = "Awaiting your review" | "In design" | "Diagnosis" | "Delivered" | "Refinement";

const statusStyle: Record<Status, string> = {
  "Awaiting your review": "bg-mint-100 text-mint-500 border-mint-500/30",
  "In design": "bg-sky-accent/10 text-sky-accent border-sky-accent/30",
  Diagnosis: "bg-ink-50 text-ink-700 border-ink-200",
  Delivered: "bg-ink-900 text-mint-300 border-ink-900",
  Refinement: "bg-ink-50 text-ink-500 border-ink-200",
};

const cases: { id: string; patient: string; dx: string; assigned: string; updated: string; status: Status }[] = [
  { id: "YL-3091", patient: "Patient #1042", dx: "Adult crowding · Class I", assigned: "Dr. Tan", updated: "2 hr ago", status: "Awaiting your review" },
  { id: "YL-3088", patient: "Patient #1041", dx: "Class II div 1 · mild", assigned: "Dr. Raghu", updated: "5 hr ago", status: "In design" },
  { id: "YL-3087", patient: "Patient #1040", dx: "Spacing · midline diastema", assigned: "Dr. Tan", updated: "Yesterday", status: "Diagnosis" },
  { id: "YL-3084", patient: "Patient #1038", dx: "Refinement · UR1 rotation", assigned: "Dr. Okafor", updated: "Yesterday", status: "Delivered" },
  { id: "YL-3079", patient: "Patient #1033", dx: "Crowding + IPR planning", assigned: "Dr. Raghu", updated: "2 days ago", status: "Delivered" },
  { id: "YL-3071", patient: "Patient #1027", dx: "Deep bite · 5mm overbite", assigned: "Dr. Tan", updated: "3 days ago", status: "Refinement" },
  { id: "YL-3068", patient: "Patient #1024", dx: "Anterior crossbite", assigned: "Dr. Okafor", updated: "4 days ago", status: "Delivered" },
];

const sideItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: FileText, label: "All cases" },
  { icon: Upload, label: "New submission" },
  { icon: Users, label: "Team" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { v: "142", l: "Active cases" },
  { v: "31", l: "In design" },
  { v: "7", l: "Awaiting review" },
  { v: "48hr", l: "Avg. turnaround" },
];

export default function PortalPage() {
  const [filter, setFilter] = useState<string>("All");
  const filters = ["All", "Awaiting your review", "In design", "Diagnosis", "Delivered", "Refinement"];
  const filtered = filter === "All" ? cases : cases.filter((c) => c.status === filter);

  return (
    <div className="min-h-screen bg-bone flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-60 flex-col bg-ink-950 text-white">
        <div className="px-5 h-16 flex items-center border-b border-white/10">
          <Logo variant="light" />
        </div>
        <nav className="flex-1 py-5 px-3 space-y-0.5">
          {sideItems.map((it) => (
            <a
              key={it.label}
              href="#/portal"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-[13.5px] transition-colors ${
                it.active
                  ? "bg-white/[0.08] text-white"
                  : "text-ink-300 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <it.icon className="w-4 h-4" strokeWidth={1.6} />
              {it.label}
            </a>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-0.5">
          <a
            href="#/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-[13.5px] text-ink-300 hover:bg-white/[0.04] hover:text-white transition-colors"
          >
            <HelpCircle className="w-4 h-4" strokeWidth={1.6} />
            Help & docs
          </a>
          <a
            href="#/"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-[13.5px] text-ink-300 hover:bg-white/[0.04] hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" strokeWidth={1.6} />
            Sign out
          </a>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-ink-100 flex items-center justify-between px-6">
          <div className="flex items-center gap-2 text-[13.5px] text-ink-500">
            <span className="text-ink-700 font-medium">Your Lab Co.</span>
            <ChevronDown className="w-3.5 h-3.5" />
            <span className="hidden md:inline mx-1 text-ink-200">/</span>
            <span className="hidden md:inline">Dashboard</span>
          </div>
          <div className="flex-1 max-w-md mx-6 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-300" />
              <input
                type="search"
                placeholder="Search cases, patients, IDs…"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-ink-50 border border-transparent text-[13.5px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus:bg-white focus:border-ink-200 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative p-2 rounded-md text-ink-500 hover:bg-ink-50 hover:text-ink-800 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" strokeWidth={1.6} />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-mint-500" />
            </button>
            <div className="h-8 w-8 rounded-full bg-ink-900 text-mint-300 text-[12px] font-semibold flex items-center justify-center">
              YL
            </div>
          </div>
        </header>

        {/* Demo banner */}
        <div className="bg-mint-100/60 border-b border-mint-500/20 px-6 py-2 text-[12px] text-ink-700 flex items-center justify-between">
          <span>
            <span className="font-semibold">Demo environment</span> — this is a sample partner
            portal. No real cases are stored.
          </span>
          <a href="#/" className="text-ink-900 underline underline-offset-2 font-medium">
            Back to site →
          </a>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-8 lg:px-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[26px] font-bold tracking-[-0.02em] text-ink-900">
                Welcome back, Dr. Chen
              </h1>
              <p className="mt-1 text-[13.5px] text-ink-500">
                Here's what's moving in your queue today.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-ink-900 text-white text-[13.5px] font-medium hover:bg-ink-800 transition-colors"
            >
              <Plus className="w-4 h-4" />
              New case submission
            </button>
          </div>

          {/* Stats */}
          <div className="mt-7 grid grid-cols-2 lg:grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-xl bg-white border border-ink-100 p-5"
              >
                <div className="text-[28px] font-bold tracking-[-0.02em] text-ink-900 nums">
                  {s.v}
                </div>
                <div className="mt-1 text-[12.5px] text-ink-500">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Cases card */}
          <div className="mt-8 rounded-xl bg-white border border-ink-100 overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-5 py-4 border-b border-ink-100">
              <h2 className="text-[15px] font-semibold text-ink-900">Recent cases</h2>
              <div className="flex flex-wrap gap-1.5">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`text-[12px] px-2.5 py-1 rounded-md border transition-colors ${
                      filter === f
                        ? "bg-ink-900 text-white border-ink-900"
                        : "bg-white text-ink-600 border-ink-200 hover:border-ink-300"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Table head */}
            <div className="hidden md:grid grid-cols-[110px,1fr,1fr,110px,140px,140px] gap-4 px-5 py-3 bg-bone text-[11px] font-semibold uppercase tracking-widest text-ink-400">
              <div>Case ID</div>
              <div>Patient</div>
              <div>Diagnosis</div>
              <div>Assigned</div>
              <div>Updated</div>
              <div>Status</div>
            </div>

            <ul className="divide-y divide-ink-100">
              {filtered.map((c) => (
                <li
                  key={c.id}
                  className="grid md:grid-cols-[110px,1fr,1fr,110px,140px,140px] gap-4 px-5 py-4 hover:bg-bone transition-colors cursor-pointer"
                >
                  <div className="text-[13px] font-medium text-ink-900 nums">{c.id}</div>
                  <div className="text-[13px] text-ink-700">{c.patient}</div>
                  <div className="text-[13px] text-ink-700">{c.dx}</div>
                  <div className="text-[12.5px] text-ink-500">{c.assigned}</div>
                  <div className="text-[12.5px] text-ink-500">{c.updated}</div>
                  <div>
                    <span
                      className={`inline-block text-[11px] font-medium px-2 py-1 rounded-md border ${statusStyle[c.status]}`}
                    >
                      {c.status}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            {filtered.length === 0 && (
              <div className="px-5 py-12 text-center text-[13px] text-ink-500">
                No cases match this filter.
              </div>
            )}
          </div>

          <p className="mt-6 text-[11px] text-ink-400">
            All case data shown is synthetic and used for demonstration only.
          </p>
        </div>
      </main>
    </div>
  );
}
