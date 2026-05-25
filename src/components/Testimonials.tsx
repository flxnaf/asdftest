/**
 * Placeholder section. Populate `quotes` with REAL partner testimonials only.
 * Until then, this renders three labelled placeholder cards so the layout is
 * obvious to whoever fills in the content. Do not ship with placeholder text.
 */

type Quote = {
  quote: string;
  name: string;
  role: string;
  org: string;
  metric: string;
};

const quotes: Quote[] = [
  // Example shape — DELETE this row and add real partner quotes:
  // {
  //   quote: "We doubled our case volume in nine months without hiring...",
  //   name: "Real partner name",
  //   role: "Founder & CEO",
  //   org: "Their lab · City",
  //   metric: "+102% case volume in 9 months",
  // },
];

const placeholderCount = 3;

export default function Testimonials() {
  const cards: Quote[] =
    quotes.length > 0
      ? quotes
      : Array.from({ length: placeholderCount }).map(() => ({
          quote: "[Replace with a real quote from a partner — lab owner or clinic principal — about a specific outcome they got. ~30–40 words.]",
          name: "[Partner name]",
          role: "[Their role]",
          org: "[Organisation · City]",
          metric: "[Quantified outcome]",
        }));

  return (
    <section className="bg-bone border-y border-ink-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="eyebrow">Partner outcomes</div>
          <h2 className="mt-4 text-[40px] lg:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            What our partners actually say.
          </h2>
          <p className="mt-5 text-[16px] text-ink-500 leading-[1.6]">
            Quotes from lab owners and clinic principals — not patients — with the
            outcome metric that matters to them.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {cards.map((q, i) => (
            <figure
              key={i}
              className="rounded-xl bg-white border border-ink-100 p-7 lg:p-8 flex flex-col"
            >
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true">
                <path
                  d="M11.2 0C5.6 0 0 5.5 0 13.4V22h11V11h-5.6c0-3.85 2.8-7.7 5.8-7.7V0zM27 0c-5.6 0-11.2 5.5-11.2 13.4V22h11V11h-5.6c0-3.85 2.8-7.7 5.8-7.7V0z"
                  fill="#3FB8B0"
                  opacity="0.85"
                />
              </svg>
              <blockquote className="mt-5 text-[16px] leading-[1.55] text-ink-800">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-ink-100">
                <div className="text-[14px] font-semibold text-ink-900">{q.name}</div>
                <div className="text-[12.5px] text-ink-500">
                  {q.role} · {q.org}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-mint-500 bg-mint-100/60 px-2 py-1 rounded-md">
                  ↗ {q.metric}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {quotes.length === 0 && (
          <p className="mt-8 text-[11px] text-ink-400">
            Placeholder layout. Populate <code className="font-mono">quotes</code> in
            <code className="font-mono"> Testimonials.tsx</code> with real partner
            testimonials before launch — or remove this section.
          </p>
        )}
      </div>
    </section>
  );
}
