import { Award, ExternalLink, Clock } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  date?: string;
  file?: string;
  verifyUrl?: string;
  status?: string;
};

export default function CertCard({
  cert,
  onClick,
}: {
  cert: Cert;
  onClick: () => void;
}) {
  const inProgress = cert.status === "in-progress";

  return (
    <button
      onClick={onClick}
      className="card text-left group w-full relative"
    >
      {/* Status badge */}
      {inProgress && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
          <Clock className="w-2.5 h-2.5" />
          In Progress
        </span>
      )}

      <div className="flex items-start gap-3 mb-4">
        <div className={`p-2.5 rounded-lg border ${
          inProgress
            ? "bg-amber-500/10 border-amber-500/20"
            : "bg-azure-500/10 border-azure-500/20"
        }`}>
          <Award className={`w-5 h-5 ${
            inProgress ? "text-amber-400" : "text-azure-500"
          }`} />
        </div>
        <div className="flex-1 min-w-0 pr-20">
          <h3 className="font-semibold leading-snug group-hover:text-azure-500 transition-colors">
            {cert.title}
          </h3>
          <p className="text-xs text-[var(--text-muted)] mt-1">
            {cert.issuer}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs pt-3 border-t border-[var(--border)]">
        {inProgress ? (
          <span className="text-amber-400 font-medium">
            Currently learning
          </span>
        ) : (
          <>
            <span className="text-[var(--text-muted)]">
              {cert.date || "View certificate"}
            </span>
            <span className="inline-flex items-center gap-1 text-azure-500 group-hover:gap-2 transition-all font-medium">
              View <ExternalLink className="w-3 h-3" />
            </span>
          </>
        )}
      </div>
    </button>
  );
}