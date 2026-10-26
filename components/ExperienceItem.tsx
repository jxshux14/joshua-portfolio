"use client";

import { useId, useState } from "react";

export default function ExperienceItem({
  years,
  company,
  role,
  tags,
  duties,
}: {
  years: string;
  company: string;
  role: string;
  tags: string;
  duties: string[];
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className={`experience-item exp-expandable${open ? " open" : ""}`}>
      <span>{years}</span>

      <div className="exp-main">
        <div className="exp-head">
          <div>
            <h3>{company}</h3>
            <p>{role}</p>
            <small>{tags}</small>
          </div>

          <button
            type="button"
            className="exp-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="exp-toggle-label">
              {open ? "Hide roles" : "Roles"}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="m6 9 6 6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="exp-panel" id={panelId}>
          <div className="exp-panel-inner">
            <ul>
              {duties.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}