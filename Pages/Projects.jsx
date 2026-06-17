import Projectcard from "../Components/Projectcard";
import Reveal from "../Components/Reveal";

export default function Projects() {
  return (
    <Reveal>
      <div className="projectsection">
        <span
          style={{
            fontSize: "40px",
            fontWeight: "bold",
          }}
        >
          My <span style={{ color: "#1E90FF" }}>P</span>rojects
        </span>

        <p>Some of the selected projects that I worked on</p>

        <Projectcard />
      </div>
    </Reveal>
  );
}
