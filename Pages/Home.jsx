import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./../Components/Footer";
import { motion } from "framer-motion";
import Reveal from "../Components/Reveal";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techStack = [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Java",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
    {
      name: "Spring",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg",
    },
    {
      name: "CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <Reveal>
          <div className="txt">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span style={{ color: "#1E90FF" }}>Hi,</span> <span>I'm</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>Ashok</span>
              <span style={{ color: "#1E90FF" }}> Cherukuri</span>
            </motion.div>

            <motion.div
              className="role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.div>

            <motion.div
              className="tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I build scalable and performant web applications with modern
              technologies
            </motion.div>

            <motion.div
              className="buttons"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="view" onClick={() => navigate("/projects")}>
                View My Work
              </button>

              <button
                className="contact-btn"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </Reveal>

        <motion.div
          className="img"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        ></motion.div>
      </div>

      <Reveal>
        <div className="tech-container">
          <h2>TECHNOLOGIES I WORK WITH</h2>

          <div className="tech">
            {techStack.map((tech, index) => (
              <motion.div
                className="tech-item"
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
              >
                <img src={tech.logo} alt={tech.name} />
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      <Footer />
    </>
  );
}
