import Placeholder from "./Placeholder";
import { useLang } from "../i18n/LangContext";

const VIDEO_SRC = "/demo-3d.mp4"; // populated when /public/demo-3d.mp4 exists
const POSTER_SRC = "/demo-3d-poster.jpg"; // optional first-frame poster

type Props = { hasVideo?: boolean };

/**
 * Renders the demo video if the asset has been supplied (set hasVideo=true
 * after dropping /public/demo-3d.mp4 in). Falls back to the labelled
 * placeholder so the layout is preserved during dev.
 */
export default function HeroVisual({ hasVideo = false }: Props) {
  const { t } = useLang();

  if (hasVideo) {
    return (
      <div className="relative rounded-xl overflow-hidden border border-ink-100 bg-ink-900">
        <video
          className="w-full h-auto block"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <Placeholder
      label={t.hero.placeholderLabel}
      hint={t.hero.placeholderHint}
      spec={t.hero.placeholderSpec}
      aspect="aspect-[4/3]"
    />
  );
}
