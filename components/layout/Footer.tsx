import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] mt-20">
      <div className="container-custom py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Brand + Copyright (left) */}
          <p className="text-xs text-[var(--text-muted)] text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-[var(--text-primary)] font-medium">
              Avishka Pramod Pathirana
            </span>
            . All rights reserved.
          </p>

          {/* Socials (right) */}
          <div className="flex gap-2">
            <a
              href="https://github.com/AvishkaPramod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md border border-[var(--border)] hover:border-azure-500 hover:text-azure-500 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/avishka-pramod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md border border-[var(--border)] hover:border-azure-500 hover:text-azure-500 transition-all"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:avishpramod1031@gmail.com"
              aria-label="Email"
              className="p-2 rounded-md border border-[var(--border)] hover:border-azure-500 hover:text-azure-500 transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}