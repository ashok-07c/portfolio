import React from "react";
import { motion } from "framer-motion";
import Reveal from "../Components/Reveal";

function SkillCard({ name, progress }) {
  const cleanProgress = Math.min(100, Math.max(0, progress || 0));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="progress-container"
        style={{ width: "100%", marginBottom: "24px" }}
      >
        <div
          className="progress-labels"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          <span
            className="progress-name"
            style={{
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {name}
          </span>

          <span
            className="progress-percentage"
            style={{
              color: "#64748b",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            {cleanProgress}%
          </span>
        </div>

        <div
          className="progress-bar-background"
          style={{
            width: "100%",
            height: "5px",
            backgroundColor: "#111827",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${cleanProgress}%` }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{
              height: "100%",
              backgroundColor: "#0066cc",
              borderRadius: "999px",
            }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const techStack = [
    { name: "React", val: 90 },
    { name: "Java", val: 80 },
    { name: "CSS", val: 90 },
    { name: "JavaScript", val: 90 },
    { name: "Spring", val: 10 },
  ];

  return (
    <Reveal>
      <div className="skills-section-wrapper">
        <div className="skills-left-column">
          <div className="txt">
            <span
              style={{
                fontSize: "38px",
                fontWeight: 700,
                color: "white",
                display: "block",
              }}
            >
              My <span style={{ color: "#1E90FF" }}>Skills</span>
            </span>

            <span
              className="small"
              style={{
                fontSize: "18px",
                color: "#94a3b8",
                display: "block",
                marginTop: "8px",
              }}
            >
              Technologies and tools i use tobuild modern applications
            </span>
          </div>

          <div
            className="bars-container"
            style={{
              marginTop: "35px",
              width: "100%",
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <SkillCard name={tech.name} progress={tech.val} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="skills-right-column"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="img"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "400px",
              borderRadius: "12px",
              border: "1px dashed #334155",
            }}
          ></div>
        </motion.div>
      </div>
    </Reveal>
  );
}
