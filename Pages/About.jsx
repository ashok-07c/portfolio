import { motion } from "framer-motion";
import Reveal from "../Components/Reveal";

export default function About() {
  return (
    <>
      <Reveal>
        <div className="about">
          <div className="txt">
            <div>
              <span>About </span>
              <span style={{ color: "#1E90FF" }}>Me</span>
            </div>

            <div className="tagline">
              I'm a passionate full stack developer who loves building perfect
              digital experience. I enjoy solving problems and turning ideas
              into real-world appllications.
            </div>

            <div className="profile-info">
              <div className="info-item">
                <i className="fa fa-user"></i>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}
                >
                  Name: Ashok Cherukuri
                </span>
              </div>

              <div className="info-item">
                <i className="fa fa-location-dot"></i>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}
                >
                  Location: Tirupati, India
                </span>
              </div>

              <div className="info-item">
                <i className="fa fa-briefcase"></i>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}
                >
                  Experience: 1+ Year
                </span>
              </div>

              <div className="info-item">
                <i className="fa fa-envelope"></i>
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "normal",
                  }}
                >
                  Email: cherukuriashok.07@gmail.com
                </span>
              </div>

              <a
                href="/Resume.pdf"
                download="My_Resume.pdf"
                className="hire-btn"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          <motion.div
            className="img"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          ></motion.div>
        </div>
      </Reveal>

      <div className="cards">
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#38BDF8",
            }}
          >
            10+
          </h1>
          <span>Projects Completed</span>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          whileHover={{ y: -5 }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#38BDF8",
            }}
          >
            1+
          </h1>
          <span>Years Experience</span>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#38BDF8",
            }}
          >
            10+
          </h1>
          <span>Technologies</span>
        </motion.div>

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#38BDF8",
            }}
          >
            6+
          </h1>
          <span>Happy Clients</span>
        </motion.div>
      </div>
    </>
  );
}
