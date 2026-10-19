export default function TimelineItem({
  year,
  title,
  subtitle,
  note,
  badge,
  timeline,
  last = false,
}: {
  year: string;
  title: string;
  subtitle: string;
  note?: string;
  badge?: string;
  timeline?: string;
  last?: boolean;
}) {
  return (
    <div className="relative pl-8 md:pl-10 pb-8">
      {/* Dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-azure-500 border-2 border-[var(--bg-primary)] shadow-[0_0_0_4px_rgba(0,120,212,0.15)]" />

      {/* Line */}
      {!last && (
        <div className="absolute left-[5px] top-4 bottom-0 w-[2px] bg-[var(--border)]" />
      )}

      {/* Content */}
      <div>
        <span className="inline-block text-xs font-semibold text-azure-500 mb-1">
          {year}
        </span>
        <h3 className="text-base md:text-lg font-semibold leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[var(--text-muted)] mt-0.5">{subtitle}</p>
        {note && (
          <p className="text-xs text-[var(--text-muted)] mt-1 italic">{note}</p>
        )}
        {timeline && (
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            {timeline}
          </p>
        )}
        {badge && (
          <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}