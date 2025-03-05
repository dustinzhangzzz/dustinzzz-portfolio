import React from "react";

import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils.js";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:dustinzhangzzz@gmail.com">dustinzhangzzz@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/dustin-zhang-zzz/">linkedin.com/dustin-zhang-zzz</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/dustinzhangzzz">github.com/dustinzhangzzz</a>
        </li>
      </ul>
    </footer>
  );
};
