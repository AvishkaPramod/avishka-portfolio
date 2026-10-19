"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type Link = { href: string; label: string };

export default function MobileMenu({
  open,
  onClose,
  links,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  links: Link[];
  pathname: string;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] md:hidden"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-[var(--bg-secondary)] border-l border-[var(--border)] z-[80] md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
              <span className="text-lg font-bold">
                Avishka<span className="text-azure-500">.dev</span>
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg border border-[var(--border)] hover:border-azure-500 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ul className="flex flex-col gap-2 p-6">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block py-3 px-4 rounded-lg text-base font-medium transition-colors",
                        active
                          ? "bg-azure-500/10 text-azure-500"
                          : "text-[var(--text-muted)] hover:bg-[var(--bg-primary)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}