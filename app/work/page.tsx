import Image from "next/image";

const projects = [
  {
    title: "RigStore",
    category: "E-Commerce · Web Development",
    year: "2026",
    description:
      "An e-commerce site for PC parts, from budget builds to extreme rigs. Built as a mini project during my internship at Highly Succeed Inc.",
    tags: ["Vue", "E-Commerce", "UI/UX"],
    live: "https://rigstore.vercel.app/",
    github: "#",
    image: "/projects/RigStore.png",
  },
  {
    title: "HSI Alumni Portal",
    category: "Web Development · UI/UX",
    year: "2026",
    description:
      "A full-stack alumni platform with directory, mentorship, networking, and document access features.",
    tags: ["MERN", "React", "Figma"],
    live: "#",
    github: "#",
    image: "/projects/HSI-Alumni-Portal.png",
  },
];

export default function Work() {
  return (
    <section className="work">
      <div className="section-heading">
        <div className="section-label">01 / SELECTED WORK</div>
        <p>A selection of projects I've worked on.</p>
      </div>

      <div className="projects">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-image">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <span>{project.title}</span>
              )}
            </div>

            <div className="project-body">
              <div className="project-info">
                <div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>

                <span className="project-year">{project.year}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn-dark"
                >
                  Live site ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}