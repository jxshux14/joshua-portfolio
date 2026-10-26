"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ResumeViewer({
  className = "button button-light",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
      >
        {children ?? (
          <>
            View Resume <span>↗</span>
          </>
        )}
      </button>

      {open &&
        createPortal(
          <div
            className="resume-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            onClick={() => setOpen(false)}
          >
            <div className="resume-panel" onClick={(e) => e.stopPropagation()}>
              <div className="resume-bar">
                <span>Resume · Joshua Pangilinan</span>

                <div className="resume-actions">
                  <a href="/resume.pdf" download>
                    Download ↓
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    Open in new tab ↗
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close preview"
                  >
                    Close ✕
                  </button>
                </div>
              </div>

              <iframe src="/resume.pdf#view=FitH" title="Resume preview" />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}