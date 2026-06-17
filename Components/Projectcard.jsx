import { motion } from "framer-motion";
import Projects from "./projects.js";

export default function Projectcard() {
  return (
    <div className="container">
      {Projects.map((item, cardIndex) => {
        return (
          <motion.div
            className="projectcard"
            key={item.id || item.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.4,
              delay: cardIndex * 0.08,
            }}
            whileHover={{
              y: -5,
            }}
          >
            <div className="projectImg">
              <img src={item.banner} alt={item.title} />
            </div>

            <div className="title">{item.title}</div>

            <div className="info">{item.description}</div>

            <div className="stack">
              {item.techStack.map((tech, index) => {
                return (
                  <motion.div
                    key={index}
                    className="tech-stack"
                    whileHover={{
                      scale: 1.05,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="tech-logo"
                    />

                    <span className="techname">{tech.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
