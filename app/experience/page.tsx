import Image from "next/image";
import ExperienceItem from "@/components/ExperienceItem";

const experience = [
  {
    years: "Apr — Jun 2026",
    company: "San Juan City DRRM Department",
    role: "IT Intern",
    tags: "UI/UX · IT Support · Publication Design · Administration",
    duties: [
      "Served as lead designer for a departmental publication, managing layout and visual design across a large-scale print project in coordination with a cross-functional team.",
      "Designed the UI/UX and visual branding for an internal web-based system built with Laravel, covering multiple administrative and record-keeping modules.",
      "Supported administrative operations through inventory management, documentation, and recordkeeping.",
      "Assisted in coordinating and facilitating technical and skills-based trainings for department personnel.",
      "Provided general IT support, including hardware setup and troubleshooting.",
    ],
  },
  {
    years: "Dec 2025 — Mar 2026",
    company: "Highly Succeed Inc.",
    role: "Web Development & Graphics Design Intern",
    tags: "MERN · React · UI/UX · Figma · Graphic Design",
    duties: [
      "Contributed to full-stack web development using the MERN stack, with a focus on UI/UX design and React-based frontend implementation.",
      "Designed responsive, user-friendly interfaces for multiple system modules, translating functional requirements into clean, usable layouts.",
      "Served as UI/UX Designer across several internal projects, producing high-fidelity prototypes from concept through development-ready design.",
      "Delivered UI/UX design for a range of web and mobile applications in Figma, maintaining consistency and usability across projects.",
      "Supported client-facing work by producing presentation decks and visual materials in Canva.",
    ],
  },
];

// Set `logo` to the file path once you've added it, e.g. "/logos/feu.png"
const education = [
  {
    years: "2022 — 2026",
    school: "Far Eastern University Diliman",
    initials: "F",
    logo: "/logos/Feufernlogo.png" as string | null,
    degree: "Bachelor of Information Technology, Cum Laude",
    detail:
      "Web and Mobile Application · Web Development · Mobile Development · Database Systems · Software Engineering · UI/UX Design",
  },
  {
    years: "2020 — 2022",
    school: "Our Lady of Fatima University",
    initials: "O",
    logo: "/logos/OLFU.png" as string | null,
    degree: "Senior High School",
    detail: "Science, Technology, Engineering, and Mathematics (STEM) strand, With High Honors",
  },
];

const issuers = {
  cisco: { name: "Cisco", logo: "/logos/cisco.jpg" as string | null },
  certiport: { name: "Certiport", logo: "/logos/certiport.png" as string | null },
  freecodecamp: { name: "freeCodeCamp", logo: "/logos/freecodecamp.png" as string | null },
};

const certifications = [
  { title: "Python Developer Certification", issuer: issuers.freecodecamp, year: "2026" },
  { title: "IT Specialist in Python", issuer: issuers.certiport, year: "2025" },
  { title: "IT Specialist in Network Security", issuer: issuers.certiport, year: "2025" },
  { title: "DevNet Associate", issuer: issuers.cisco, year: "2025" },
  { title: "CCNA: Enterprise Networking, Security, and Automation", issuer: issuers.cisco, year: "2024" },
  { title: "CCNAv7: Switching, Routing, and Wireless Essentials", issuer: issuers.cisco, year: "2024" },
  { title: "IT Specialist in Networking", issuer: issuers.certiport, year: "2024" },
];

export default function Experience() {
  return (
    <section className="experience">
      <div className="section-label">01 / EXPERIENCE</div>

      <div className="experience-heading">
        <h2>
          Experience that
          <br />
          <em>shaped how I work.</em>
        </h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <ExperienceItem key={item.company} {...item} />
        ))}
      </div>

      {/* Education */}
      <div className="exp-block">
        <div className="section-label">02 / EDUCATION</div>

        <div className="experience-list exp-list-spaced">
          {education.map((e) => (
            <div className="experience-item" key={e.school}>
              <span>{e.years}</span>

              <div>
                <div className="edu-head">
                  <div className="edu-logo">
                    {e.logo ? (
                      <Image
                        src={e.logo}
                        alt={`${e.school} logo`}
                        fill
                        sizes="56px"
                      />
                    ) : (
                      <span>{e.initials}</span>
                    )}
                  </div>
                  <h3>{e.school}</h3>
                </div>

                <p>{e.degree}</p>
                <small>{e.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="exp-block">
        <div className="section-label">03 / CERTIFICATIONS</div>

        <div className="cert-grid">
          {certifications.map((c) => (
            <article className="cert-card" key={c.title}>
              <div className="cert-logo">
                {c.issuer.logo ? (
                  <Image
                    src={c.issuer.logo}
                    alt={`${c.issuer.name} logo`}
                    fill
                    sizes="56px"
                  />
                ) : (
                  <span>{c.issuer.name.charAt(0)}</span>
                )}
              </div>

              <div className="cert-text">
                <h3>{c.title}</h3>
                <p>{c.issuer.name}</p>
              </div>

              <span className="cert-year">{c.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}