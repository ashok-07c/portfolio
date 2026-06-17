import React from "react";
import { motion } from "framer-motion";
import Reveal from "../Components/Reveal";

export default function Contact() {
  return (
    <Reveal>
      <section className="contact-section">
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
            Have a project in mind or just want to say hi? Feel free to reach
            out and let's build something amazing together.
        </motion.p>

        <div className="contact-container">
          <motion.div
            className="contact-details"
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div className="detail">
              <i className="fa fa-envelope"></i>
              <span>cherukuriashok.07@gmail.com</span>
            </div>

            <div className="detail">
              <i className="fa fa-phone"></i>
              <span>+91 8885353548</span>
            </div>

            <div className="detail">
              <i className="fa fa-location-dot"></i>
              <span>Tirupati, India</span>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Subject" required />

            <textarea placeholder="Your Message" rows="5" required></textarea>

            <motion.button
              type="submit"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        <motion.div
          className="map"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.35154867290473!2d79.44253198408185!3d13.619713809372914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bbe07753d87%3A0x1e543312e60969c4!2sJC9R%2BVWQ%2C%20Korramenugunta%2C%20Tirupati%2C%20Andhra%20Pradesh%20517503!5e0!3m2!1sen!2sin!4v1781627360687!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </Reveal>
  );
}
