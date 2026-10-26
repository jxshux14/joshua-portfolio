import ResumeViewer from "@/components/ResumeViewer";

export default function Contact() {
  return (
    <section className="contact">
      <div className="section-label">01 / CONTACT</div>

      <div className="contact-content">
        <h2>
          Let's make
          <br />
          <em>something meaningful.</em>
        </h2>

        <a href="mailto:joshpangilinan14@gmail.com" className="contact-email">
          joshpangilinan14@gmail.com ↗
        </a>

        <div className="socials">
          <a
            href="https://www.linkedin.com/in/joshua-pangilinan-023842383/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/jxshux14"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <ResumeViewer className="resume-link">Resume ↗</ResumeViewer>
        </div>
      </div>
    </section>
  );
}