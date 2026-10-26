import TypewriterName from "@/components/TypewriterName";
import ResumeViewer from "@/components/ResumeViewer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="intro">
        <div className="section-label">01 / ABOUT</div>

        <div className="intro-content">
          <div className="about-left">
            <TypewriterName />

            <div className="intro-text">
              <p>
                Bachelor of Information Technology graduate specializing in
                Web and Mobile Application Development, passionate about
                building responsive web applications, intuitive interfaces and
                digital experiences where technology meets design.
              </p>

              <div className="resume-cta">
                <ResumeViewer />
              </div>
            </div>
          </div>

          <div className="portrait">
            <div className="portrait-img">
              <Image
                src="/joshua.jpg"
                alt="Portrait of Joshua Pangilinan"
                fill
                priority
                sizes="(max-width: 768px) 70vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <div className="section-label">02 / WHAT I DO</div>

        <div className="skills-grid">
          <div>
            <span>01</span>
            <h3>Web Development</h3>
            <p>
              Building responsive and functional web experiences using modern
              frontend technologies.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>UI / UX Design</h3>
            <p>
              Designing interfaces, wireframes, prototypes, and digital
              experiences with usability in mind.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>Creative Design</h3>
            <p>
              Creating branding, graphics, presentations, photography, and
              visual content.
            </p>
          </div>

          <div>
            <span>04</span>
            <h3>Technical Work</h3>
            <p>
              Technical writing, research, documentation, IT support, and
              collaborative project work.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}